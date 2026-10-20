from typing import List, Any, Optional

class ASTNode:
    pass

# Expressions

class NumberNode(ASTNode):
    def __init__(self, value: float):
        self.value = value

    def __repr__(self):
        return f"NumberNode({self.value})"

class StringNode(ASTNode):
    def __init__(self, value: str):
        self.value = value

    def __repr__(self):
        return f"StringNode({repr(self.value)})"

class BooleanNode(ASTNode):
    def __init__(self, value: bool):
        self.value = value

    def __repr__(self):
        return f"BooleanNode({self.value})"

class NullNode(ASTNode):
    def __repr__(self):
        return "NullNode()"

class ArrayNode(ASTNode):
    def __init__(self, elements: List[ASTNode]):
        self.elements = elements

    def __repr__(self):
        return f"ArrayNode({self.elements})"

class ObjectNode(ASTNode):
    def __init__(self, pairs: List[tuple]):
        self.pairs = pairs

    def __repr__(self):
        return f"ObjectNode({self.pairs})"

class IdentifierNode(ASTNode):
    def __init__(self, name: str):
        self.name = name

    def __repr__(self):
        return f"IdentifierNode({self.name})"

class ThisNode(ASTNode):
    def __repr__(self):
        return "ThisNode()"

class UnaryOpNode(ASTNode):
    def __init__(self, op: str, operand: ASTNode):
        self.op = op
        self.operand = operand

    def __repr__(self):
        return f"UnaryOpNode({self.op}, {self.operand})"

class BinaryOpNode(ASTNode):
    def __init__(self, left: ASTNode, op: str, right: ASTNode):
        self.left = left
        self.op = op
        self.right = right

    def __repr__(self):
        return f"BinaryOpNode({self.left}, {self.op}, {self.right})"

class AssignmentNode(ASTNode):
    def __init__(self, name: str, value: ASTNode):
        self.name = name
        self.value = value

    def __repr__(self):
        return f"AssignmentNode({self.name}, {self.value})"

class MemberAccessNode(ASTNode):
    def __init__(self, target: ASTNode, member: str):
        self.target = target
        self.member = member

    def __repr__(self):
        return f"MemberAccessNode({self.target}.{self.member})"

class MemberAssignmentNode(ASTNode):
    def __init__(self, target: ASTNode, member: str, value: ASTNode):
        self.target = target
        self.member = member
        self.value = value

    def __repr__(self):
        return f"MemberAssignmentNode({self.target}.{self.member} = {self.value})"

class IndexAccessNode(ASTNode):
    def __init__(self, target: ASTNode, index: ASTNode):
        self.target = target
        self.index = index

    def __repr__(self):
        return f"IndexAccessNode({self.target}, {self.index})"

class IndexAssignmentNode(ASTNode):
    def __init__(self, target: ASTNode, index: ASTNode, value: ASTNode):
        self.target = target
        self.index = index
        self.value = value

    def __repr__(self):
        return f"IndexAssignmentNode({self.target}, [{self.index}] = {self.value})"

class FunctionCallNode(ASTNode):
    def __init__(self, callee: ASTNode, args: List[ASTNode]):
        self.callee = callee
        self.args = args

    def __repr__(self):
        return f"FunctionCallNode({self.callee}, {self.args})"

class NewNode(ASTNode):
    def __init__(self, class_name: str, args: List[ASTNode]):
        self.class_name = class_name
        self.args = args

    def __repr__(self):
        return f"NewNode({self.class_name}, {self.args})"

# Statements

class VarDeclNode(ASTNode):
    def __init__(self, name: str, value: Optional[ASTNode]):
        self.name = name
        self.value = value

    def __repr__(self):
        return f"VarDeclNode({self.name}, {self.value})"

class PrintNode(ASTNode):
    def __init__(self, expressions: List[ASTNode]):
        self.expressions = expressions

    def __repr__(self):
        return f"PrintNode({self.expressions})"

class BlockNode(ASTNode):
    def __init__(self, statements: List[ASTNode]):
        self.statements = statements

    def __repr__(self):
        return f"BlockNode({self.statements})"

class IfNode(ASTNode):
    def __init__(self, condition: ASTNode, then_branch: ASTNode, else_branch: Optional[ASTNode] = None):
        self.condition = condition
        self.then_branch = then_branch
        self.else_branch = else_branch

    def __repr__(self):
        return f"IfNode({self.condition}, {self.then_branch}, else={self.else_branch})"

class WhileNode(ASTNode):
    def __init__(self, condition: ASTNode, body: ASTNode):
        self.condition = condition
        self.body = body

    def __repr__(self):
        return f"WhileNode({self.condition}, {self.body})"

class ForNode(ASTNode):
    def __init__(self, initializer: Optional[ASTNode], condition: Optional[ASTNode], increment: Optional[ASTNode], body: ASTNode):
        self.initializer = initializer
        self.condition = condition
        self.increment = increment
        self.body = body

    def __repr__(self):
        return f"ForNode(init={self.initializer}, cond={self.condition}, inc={self.increment}, body={self.body})"

class FunctionDeclNode(ASTNode):
    def __init__(self, name: str, params: List[str], body: BlockNode):
        self.name = name
        self.params = params
        self.body = body

    def __repr__(self):
        return f"FunctionDeclNode({self.name}({self.params}), {self.body})"

class ClassDeclNode(ASTNode):
    def __init__(self, name: str, parent_name: Optional[str], methods: List[FunctionDeclNode]):
        self.name = name
        self.parent_name = parent_name
        self.methods = methods

    def __repr__(self):
        return f"ClassDeclNode({self.name} extends {self.parent_name}, methods={self.methods})"

class ReturnNode(ASTNode):
    def __init__(self, value: Optional[ASTNode] = None):
        self.value = value

    def __repr__(self):
        return f"ReturnNode({self.value})"

class ExpressionStmtNode(ASTNode):
    def __init__(self, expression: ASTNode):
        self.expression = expression

    def __repr__(self):
        return f"ExpressionStmtNode({self.expression})"
