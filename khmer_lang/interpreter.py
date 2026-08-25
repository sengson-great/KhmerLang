from typing import List, Any, Dict, Optional
from khmer_lang.ast_nodes import (
    ASTNode, NumberNode, StringNode, BooleanNode, NullNode,
    ArrayNode, ObjectNode, IdentifierNode, ThisNode, UnaryOpNode, BinaryOpNode,
    AssignmentNode, MemberAccessNode, MemberAssignmentNode, IndexAccessNode, IndexAssignmentNode,
    FunctionCallNode, NewNode, VarDeclNode, PrintNode, BlockNode, IfNode, WhileNode, ForNode,
    FunctionDeclNode, ClassDeclNode, ReturnNode, ExpressionStmtNode
)
from khmer_lang.environment import Environment, BuiltinFunction, create_global_environment, format_khmer_value
from khmer_lang.errors import RuntimeError, ReturnException


class KhmerFunction:
    def __init__(self, name: str, params: List[str], body: BlockNode, closure_env: Environment):
        self.name = name
        self.params = params
        self.body = body
        self.closure_env = closure_env

    def bind(self, instance: 'KhmerInstance') -> 'KhmerFunction':
        bound_env = Environment(self.closure_env)
        bound_env.define("នេះ", instance)
        bound_env.define("ខ្លួនវា", instance)
        return KhmerFunction(self.name, self.params, self.body, bound_env)

    def call(self, interpreter: 'Interpreter', args: List[Any]) -> Any:
        if len(args) != len(self.params):
            raise RuntimeError(f"អនុគមន៍/វិធី '{self.name}' ត្រូវការប៉ារ៉ាម៉ែត្រចំនួន {len(self.params)} ប៉ុន្តែទទួលបាន {len(args)} / Method '{self.name}' expected {len(self.params)} arguments, got {len(args)}")

        local_env = Environment(self.closure_env)
        for param, arg in zip(self.params, args):
            local_env.define(param, arg)

        try:
            interpreter.execute_block(self.body.statements, local_env)
        except ReturnException as ret:
            return ret.value
        return None

    def __repr__(self):
        return f"<អនុគមន៍/វិធី {self.name}>"


class KhmerClass:
    def __init__(self, name: str, parent: Optional['KhmerClass'], methods: Dict[str, KhmerFunction]):
        self.name = name
        self.parent = parent
        self.methods = methods

    def find_method(self, name: str) -> Optional[KhmerFunction]:
        if name in self.methods:
            return self.methods[name]
        if self.parent:
            return self.parent.find_method(name)
        return None

    def instantiate(self, interpreter: 'Interpreter', args: List[Any]) -> 'KhmerInstance':
        instance = KhmerInstance(self)
        initializer = self.find_method("បង្កើត") # Constructor
        if initializer:
            bound_init = initializer.bind(instance)
            bound_init.call(interpreter, args)
        elif len(args) > 0:
            raise RuntimeError(f"ថ្នាក់ '{self.name}' គ្មានវិធីសាស្ត្របង្កើត (Constructor) / Class '{self.name}' has no constructor taking arguments")
        return instance

    def __repr__(self):
        return f"<ថ្នាក់ {self.name}>"


class KhmerInstance:
    def __init__(self, khmer_class: KhmerClass):
        self.khmer_class = khmer_class
        self.fields: Dict[str, Any] = {}

    def get(self, name: str) -> Any:
        if name in self.fields:
            return self.fields[name]

        method = self.khmer_class.find_method(name)
        if method:
            return method.bind(self)

        raise RuntimeError(f"មិនស្គាល់សមាជិក ឬវិធីសាស្ត្រ '{name}' ក្នុងថ្នាក់ '{self.khmer_class.name}' / Undefined property or method '{name}'")

    def set(self, name: str, value: Any):
        self.fields[name] = value

    def __repr__(self):
        return f"<វត្ថុនៃថ្នាក់ {self.khmer_class.name}>"


class Interpreter:
    def __init__(self, global_env: Environment = None, stdout_write=None):
        self.global_env = global_env if global_env is not None else create_global_environment(stdout_write)
        self.current_env = self.global_env

    def interpret(self, statements: List[ASTNode]) -> Any:
        result = None
        for stmt in statements:
            result = self.execute(stmt, self.current_env)
        return result

    def execute(self, node: ASTNode, env: Environment) -> Any:
        method_name = f"visit_{type(node).__name__}"
        visitor = getattr(self, method_name, self.generic_visit)
        return visitor(node, env)

    def generic_visit(self, node: ASTNode, env: Environment):
        raise RuntimeError(f"មិនអាចអនុវត្តថ្នាំង AST នេះបានទេ / Unsupported AST node type: {type(node).__name__}")

    def execute_block(self, statements: List[ASTNode], env: Environment) -> Any:
        previous_env = self.current_env
        self.current_env = env
        try:
            res = None
            for stmt in statements:
                res = self.execute(stmt, env)
            return res
        finally:
            self.current_env = previous_env

    # Visitor Methods

    def visit_NumberNode(self, node: NumberNode, env: Environment):
        return node.value

    def visit_StringNode(self, node: StringNode, env: Environment):
        return node.value

    def visit_BooleanNode(self, node: BooleanNode, env: Environment):
        return node.value

    def visit_NullNode(self, node: NullNode, env: Environment):
        return None

    def visit_ThisNode(self, node: ThisNode, env: Environment):
        return env.get("នេះ")

    def visit_ArrayNode(self, node: ArrayNode, env: Environment):
        return [self.execute(elem, env) for elem in node.elements]

    def visit_ObjectNode(self, node: ObjectNode, env: Environment):
        obj = {}
        for key, val_node in node.pairs:
            obj[key] = self.execute(val_node, env)
        return obj

    def visit_IdentifierNode(self, node: IdentifierNode, env: Environment):
        try:
            return env.get(node.name)
        except RuntimeError as err:
            # Fallback: Check if 'នេះ' is present in scope and contains member/method 'node.name'
            try:
                this_obj = env.get("នេះ")
                if isinstance(this_obj, KhmerInstance) and (node.name in this_obj.fields or this_obj.khmer_class.find_method(node.name)):
                    return this_obj.get(node.name)
            except Exception:
                pass
            raise err

    def visit_UnaryOpNode(self, node: UnaryOpNode, env: Environment):
        val = self.execute(node.operand, env)
        if node.op in ("មិន", "!"):
            return not self._is_truthy(val)
        if node.op == "-":
            if not isinstance(val, (int, float)):
                raise RuntimeError("សញ្ញា '-' ប្រើបានតែលើលេខប៉ុណ្ណោះ / '-' requires numeric operand")
            return -val
        raise RuntimeError(f"សញ្ញាប្រតិបត្តិការ unary មិនស្គាល់ '{node.op}' / Unknown unary operator '{node.op}'")

    def visit_BinaryOpNode(self, node: BinaryOpNode, env: Environment):
        left = self.execute(node.left, env)
        op = node.op

        # Short-circuit logic operators
        if op in ("និង", "&&"):
            if not self._is_truthy(left):
                return left
            return self.execute(node.right, env)
        if op in ("ឬ", "||"):
            if self._is_truthy(left):
                return left
            return self.execute(node.right, env)

        right = self.execute(node.right, env)

        # Equality
        if op == "==":
            return left == right
        if op == "!=":
            return left != right

        # Addition / String Concatenation
        if op == "+":
            if isinstance(left, str) or isinstance(right, str):
                return format_khmer_value(left) + format_khmer_value(right)
            if isinstance(left, (int, float)) and isinstance(right, (int, float)):
                return left + right
            raise RuntimeError("ការបូក '+' អាចប្រើបានតែលើលេខ ឬអក្សរ / '+' requires numbers or strings")

        # Arithmetic
        if op in ("-", "*", "/", "%"):
            if not (isinstance(left, (int, float)) and isinstance(right, (int, float))):
                raise RuntimeError(f"ប្រតិបត្តិការ '{op}' ត្រូវការលេខ / '{op}' requires numeric operands")
            if op == "-": return left - right
            if op == "*": return left * right
            if op == "/":
                if right == 0:
                    raise RuntimeError("មិនអាចចែកនឹងសូន្យបានទេ / Division by zero")
                return left / right
            if op == "%": return left % right

        # Comparisons
        if op in ("<", ">", "<=", ">="):
            if not (isinstance(left, (int, float)) and isinstance(right, (int, float))):
                raise RuntimeError(f"ការប្រៀបធៀប '{op}' ត្រូវការលេខ / '{op}' requires numeric operands")
            if op == "<": return left < right
            if op == ">": return left > right
            if op == "<=": return left <= right
            if op == ">=": return left >= right

        raise RuntimeError(f"សញ្ញាប្រតិបត្តិការមិនស្គាល់ '{op}' / Unknown binary operator '{op}'")

    def visit_VarDeclNode(self, node: VarDeclNode, env: Environment):
        val = None
        if node.value is not None:
            val = self.execute(node.value, env)
        env.define(node.name, val)
        return val

    def visit_AssignmentNode(self, node: AssignmentNode, env: Environment):
        val = self.execute(node.value, env)
        try:
            env.assign(node.name, val)
        except RuntimeError as err:
            # Fallback: if 'នេះ' is in scope, assign to this_obj.fields
            try:
                this_obj = env.get("នេះ")
                if isinstance(this_obj, KhmerInstance):
                    this_obj.set(node.name, val)
                    return val
            except Exception:
                pass
            raise err
        return val

    def visit_MemberAccessNode(self, node: MemberAccessNode, env: Environment):
        target = self.execute(node.target, env)
        if isinstance(target, KhmerInstance):
            return target.get(node.member)
        if isinstance(target, dict):
            return target.get(node.member, None)
        raise RuntimeError(f"មិនអាចចូលប្រើប្រាស់សមាជិក '{node.member}' លើប្រភេទនេះបានទេ / Member access on invalid target")

    def visit_MemberAssignmentNode(self, node: MemberAssignmentNode, env: Environment):
        target = self.execute(node.target, env)
        val = self.execute(node.value, env)
        if isinstance(target, KhmerInstance):
            target.set(node.member, val)
            return val
        if isinstance(target, dict):
            target[node.member] = val
            return val
        raise RuntimeError(f"មិនអាចកំណត់តម្លៃសមាជិក '{node.member}' លើប្រភេទនេះបានទេ / Member assignment on invalid target")

    def visit_IndexAccessNode(self, node: IndexAccessNode, env: Environment):
        target = self.execute(node.target, env)
        idx = self.execute(node.index, env)

        if isinstance(target, list):
            if not isinstance(idx, (int, float)):
                raise RuntimeError("សន្ទស្សន៍បញ្ជីត្រូវតែជាលេខ / Array index must be a number")
            int_idx = int(idx)
            if int_idx < 0 or int_idx >= len(target):
                raise RuntimeError(f"សន្ទស្សន៍លើសព្រំដែន ({int_idx}) / Index out of bounds ({int_idx})")
            return target[int_idx]

        if isinstance(target, str):
            if not isinstance(idx, (int, float)):
                raise RuntimeError("សន្ទស្សន៍អក្សរត្រូវតែជាលេខ / String index must be a number")
            int_idx = int(idx)
            if int_idx < 0 or int_idx >= len(target):
                raise RuntimeError(f"សន្ទស្សន៍អក្សរលើសព្រំដែន ({int_idx}) / String index out of bounds ({int_idx})")
            return target[int_idx]

        if isinstance(target, dict):
            key = str(idx)
            return target.get(key, None)

        raise RuntimeError("មិនអាចទាញយកសន្ទស្សន៍លើប្រភេទនេះបានទេ / Target is not indexable")

    def visit_IndexAssignmentNode(self, node: IndexAssignmentNode, env: Environment):
        target = self.execute(node.target, env)
        idx = self.execute(node.index, env)
        val = self.execute(node.value, env)

        if isinstance(target, list):
            if not isinstance(idx, (int, float)):
                raise RuntimeError("សន្ទស្សន៍បញ្ជីត្រូវតែជាលេខ / Array index must be a number")
            int_idx = int(idx)
            if int_idx < 0 or int_idx >= len(target):
                raise RuntimeError(f"សន្ទស្សន៍លើសព្រំដែន ({int_idx}) / Index out of bounds ({int_idx})")
            target[int_idx] = val
            return val

        if isinstance(target, dict):
            key = str(idx)
            target[key] = val
            return val

        raise RuntimeError("មិនអាចកំណត់សន្ទស្សន៍លើប្រភេទនេះបានទេ / Target is not indexable for assignment")

    def visit_FunctionCallNode(self, node: FunctionCallNode, env: Environment):
        callee = self.execute(node.callee, env)
        args = [self.execute(arg, env) for arg in node.args]

        if isinstance(callee, KhmerClass):
            return callee.instantiate(self, args)
        if isinstance(callee, KhmerFunction):
            return callee.call(self, args)
        if isinstance(callee, BuiltinFunction):
            return callee(*args)

        raise RuntimeError("មិនមែនជាអនុគមន៍ ឬថ្នាក់ / Target is not callable")

    def visit_NewNode(self, node: NewNode, env: Environment):
        khmer_class = env.get(node.class_name)
        if not isinstance(khmer_class, KhmerClass):
            raise RuntimeError(f"'{node.class_name}' មិនមែនជាថ្នាក់ (Class) ទេ / '{node.class_name}' is not a class")
        args = [self.execute(arg, env) for arg in node.args]
        return khmer_class.instantiate(self, args)

    def visit_ClassDeclNode(self, node: ClassDeclNode, env: Environment):
        parent_class = None
        if node.parent_name:
            parent_class = env.get(node.parent_name)
            if not isinstance(parent_class, KhmerClass):
                raise RuntimeError(f"ថ្នាក់មេ '{node.parent_name}' មិនត្រឹមត្រូវ / Parent class '{node.parent_name}' is not a class")

        methods = {}
        for m_stmt in node.methods:
            func = KhmerFunction(m_stmt.name, m_stmt.params, m_stmt.body, env)
            methods[m_stmt.name] = func

        khmer_class = KhmerClass(node.name, parent_class, methods)
        env.define(node.name, khmer_class)
        return khmer_class

    def visit_PrintNode(self, node: PrintNode, env: Environment):
        vals = [self.execute(expr, env) for expr in node.expressions]
        print_fn = env.get("បង្ហាញ")
        return print_fn(*vals)

    def visit_BlockNode(self, node: BlockNode, env: Environment):
        block_env = Environment(env)
        return self.execute_block(node.statements, block_env)

    def visit_IfNode(self, node: IfNode, env: Environment):
        cond_val = self.execute(node.condition, env)
        if self._is_truthy(cond_val):
            return self.execute(node.then_branch, env)
        elif node.else_branch:
            return self.execute(node.else_branch, env)
        return None

    def visit_WhileNode(self, node: WhileNode, env: Environment):
        res = None
        while self._is_truthy(self.execute(node.condition, env)):
            res = self.execute(node.body, env)
        return res

    def visit_ForNode(self, node: ForNode, env: Environment):
        for_env = Environment(env)
        if node.initializer:
            self.execute(node.initializer, for_env)

        res = None
        while True:
            if node.condition:
                cond_val = self.execute(node.condition, for_env)
                if not self._is_truthy(cond_val):
                    break
            res = self.execute(node.body, for_env)
            if node.increment:
                self.execute(node.increment, for_env)

        return res

    def visit_FunctionDeclNode(self, node: FunctionDeclNode, env: Environment):
        func = KhmerFunction(node.name, node.params, node.body, env)
        env.define(node.name, func)
        return func

    def visit_ReturnNode(self, node: ReturnNode, env: Environment):
        val = None
        if node.value is not None:
            val = self.execute(node.value, env)
        raise ReturnException(val)

    def visit_ExpressionStmtNode(self, node: ExpressionStmtNode, env: Environment):
        return self.execute(node.expression, env)

    def _is_truthy(self, val: Any) -> bool:
        if val is None or val is False or val == 0 or val == "":
            return False
        return True
