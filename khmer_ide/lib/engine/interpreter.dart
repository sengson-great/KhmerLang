import 'ast_nodes.dart';
import 'environment.dart';
import 'errors.dart';

class Interpreter {
  final Environment globalEnv;
  late Environment currentEnv;

  Interpreter({Environment? globalEnv, void Function(String)? stdoutWrite})
      : globalEnv = globalEnv ?? createGlobalEnvironment(stdoutWrite: stdoutWrite) {
    currentEnv = this.globalEnv;
  }

  dynamic interpret(List<ASTNode> statements) {
    dynamic result;
    for (final stmt in statements) {
      result = execute(stmt, currentEnv);
    }
    return result;
  }

  dynamic execute(ASTNode node, Environment env) {
    if (node is NumberNode) return node.value;
    if (node is StringNode) return node.value;
    if (node is BooleanNode) return node.value;
    if (node is NullNode) return null;
    if (node is ArrayNode) return _visitArrayNode(node, env);
    if (node is ObjectNode) return _visitObjectNode(node, env);
    if (node is IdentifierNode) return _visitIdentifierNode(node, env);
    if (node is ThisNode) return _visitThisNode(node, env);
    if (node is UnaryOpNode) return _visitUnaryOpNode(node, env);
    if (node is BinaryOpNode) return _visitBinaryOpNode(node, env);
    if (node is AssignmentNode) return _visitAssignmentNode(node, env);
    if (node is MemberAccessNode) return _visitMemberAccessNode(node, env);
    if (node is MemberAssignmentNode) return _visitMemberAssignmentNode(node, env);
    if (node is IndexAccessNode) return _visitIndexAccessNode(node, env);
    if (node is IndexAssignmentNode) return _visitIndexAssignmentNode(node, env);
    if (node is FunctionCallNode) return _visitFunctionCallNode(node, env);
    if (node is NewNode) return _visitNewNode(node, env);
    if (node is VarDeclNode) return _visitVarDeclNode(node, env);
    if (node is PrintNode) return _visitPrintNode(node, env);
    if (node is BlockNode) return _visitBlockNode(node, env);
    if (node is IfNode) return _visitIfNode(node, env);
    if (node is WhileNode) return _visitWhileNode(node, env);
    if (node is ForNode) return _visitForNode(node, env);
    if (node is FunctionDeclNode) return _visitFunctionDeclNode(node, env);
    if (node is ClassDeclNode) return _visitClassDeclNode(node, env);
    if (node is ReturnNode) return _visitReturnNode(node, env);
    if (node is ExpressionStmtNode) return execute(node.expression, env);

    throw RuntimeError(
        "មិនអាចអនុវត្តថ្នាំង AST នេះបានទេ / Unsupported AST node type: ${node.runtimeType}");
  }

  dynamic executeBlock(List<ASTNode> statements, Environment env) {
    final previousEnv = currentEnv;
    currentEnv = env;
    try {
      dynamic res;
      for (final stmt in statements) {
        res = execute(stmt, env);
      }
      return res;
    } finally {
      currentEnv = previousEnv;
    }
  }

  bool _isTruthy(dynamic val) {
    if (val == null || val == false || val == 0 || val == '') {
      return false;
    }
    return true;
  }

  dynamic _visitArrayNode(ArrayNode node, Environment env) {
    return node.elements.map((e) => execute(e, env)).toList();
  }

  dynamic _visitObjectNode(ObjectNode node, Environment env) {
    final Map<String, dynamic> obj = {};
    for (final pair in node.pairs) {
      obj[pair.key] = execute(pair.value, env);
    }
    return obj;
  }

  dynamic _visitIdentifierNode(IdentifierNode node, Environment env) {
    return env.get(node.name);
  }

  dynamic _visitThisNode(ThisNode node, Environment env) {
    try {
      return env.get('នេះ');
    } catch (_) {
      try {
        return env.get('ខ្លួនវា');
      } catch (_) {
        throw RuntimeError(
            "ពាក្យ 'នេះ' ឬ 'ខ្លួនវា' អាចប្រើប្រាស់បានតែក្នុងវិធីសាស្ត្រនៃថ្នាក់ប៉ុណ្ណោះ / 'នេះ'/'ខ្លួនវា' can only be used inside class methods");
      }
    }
  }

  dynamic _visitUnaryOpNode(UnaryOpNode node, Environment env) {
    final operand = execute(node.operand, env);
    if (node.op == '!' || node.op == 'មិន') {
      return !_isTruthy(operand);
    }
    if (node.op == '-') {
      if (operand is num) {
        return -operand;
      }
      throw RuntimeError(
          "សញ្ញាដក '-' ត្រូវការលេខ / '-' requires a numeric operand");
    }
    throw RuntimeError(
        "សញ្ញាប្រតិបត្តិការ unary មិនស្គាល់ '${node.op}' / Unknown unary operator '${node.op}'");
  }

  dynamic _visitBinaryOpNode(BinaryOpNode node, Environment env) {
    final left = execute(node.left, env);
    final op = node.op;

    // Short-circuit logic
    if (op == 'និង' || op == '&&') {
      if (!_isTruthy(left)) {
        return left;
      }
      return execute(node.right, env);
    }
    if (op == 'ឬ' || op == '||') {
      if (_isTruthy(left)) {
        return left;
      }
      return execute(node.right, env);
    }

    final right = execute(node.right, env);

    // Equality
    if (op == '==') {
      return left == right;
    }
    if (op == '!=') {
      return left != right;
    }

    // Addition / String Concatenation
    if (op == '+') {
      if (left is String || right is String) {
        return formatKhmerValue(left) + formatKhmerValue(right);
      }
      if (left is num && right is num) {
        return left + right;
      }
      throw RuntimeError(
          "ការបូក '+' អាចប្រើបានតែលើលេខ ឬអក្សរ / '+' requires numbers or strings");
    }

    // Arithmetic
    if (op == '-' || op == '*' || op == '/' || op == '%') {
      if (left is! num || right is! num) {
        throw RuntimeError(
            "ប្រតិបត្តិការ '$op' ត្រូវការលេខ / '$op' requires numeric operands");
      }
      if (op == '-') return left - right;
      if (op == '*') return left * right;
      if (op == '/') {
        if (right == 0) {
          throw RuntimeError("មិនអាចចែកនឹងសូន្យបានទេ / Division by zero");
        }
        final res = left / right;
        return res == res.roundToDouble() ? res.toInt() : res;
      }
      if (op == '%') return left % right;
    }

    // Comparisons
    if (op == '<' || op == '>' || op == '<=' || op == '>=') {
      if (left is! num || right is! num) {
        throw RuntimeError(
            "ការប្រៀបធៀប '$op' ត្រូវការលេខ / '$op' requires numeric operands");
      }
      if (op == '<') return left < right;
      if (op == '>') return left > right;
      if (op == '<=') return left <= right;
      if (op == '>=') return left >= right;
    }

    throw RuntimeError(
        "សញ្ញាប្រតិបត្តិការមិនស្គាល់ '$op' / Unknown binary operator '$op'");
  }

  dynamic _visitVarDeclNode(VarDeclNode node, Environment env) {
    dynamic val;
    if (node.value != null) {
      val = execute(node.value!, env);
    }
    env.define(node.name, val);
    return val;
  }

  dynamic _visitAssignmentNode(AssignmentNode node, Environment env) {
    final val = execute(node.value, env);
    try {
      env.assign(node.name, val);
    } on RuntimeError {
      // Fallback: if 'នេះ' is in scope, assign to thisObj.fields
      try {
        final thisObj = env.get('នេះ');
        if (thisObj is KhmerInstance) {
          thisObj.set(node.name, val);
          return val;
        }
      } catch (_) {}
      rethrow;
    }
    return val;
  }

  dynamic _visitMemberAccessNode(MemberAccessNode node, Environment env) {
    final target = execute(node.target, env);
    if (target is KhmerInstance) {
      return target.get(node.member);
    }
    if (target is Map) {
      return target[node.member];
    }
    throw RuntimeError(
        "មិនអាចចូលប្រើប្រាស់សមាជិក '${node.member}' លើប្រភេទនេះបានទេ / Member access on invalid target");
  }

  dynamic _visitMemberAssignmentNode(MemberAssignmentNode node, Environment env) {
    final target = execute(node.target, env);
    final val = execute(node.value, env);
    if (target is KhmerInstance) {
      target.set(node.member, val);
      return val;
    }
    if (target is Map) {
      target[node.member] = val;
      return val;
    }
    throw RuntimeError(
        "មិនអាចកំណត់តម្លៃសមាជិក '${node.member}' លើប្រភេទនេះបានទេ / Member assignment on invalid target");
  }

  dynamic _visitIndexAccessNode(IndexAccessNode node, Environment env) {
    final target = execute(node.target, env);
    final idx = execute(node.index, env);

    if (target is List) {
      if (idx is! num) {
        throw RuntimeError("សន្ទស្សន៍បញ្ជីត្រូវតែជាលេខ / Array index must be a number");
      }
      final intIdx = idx.toInt();
      if (intIdx < 0 || intIdx >= target.length) {
        throw RuntimeError("សន្ទស្សន៍លើសព្រំដែន ($intIdx) / Index out of bounds ($intIdx)");
      }
      return target[intIdx];
    }

    if (target is String) {
      if (idx is! num) {
        throw RuntimeError("សន្ទស្សន៍អក្សរត្រូវតែជាលេខ / String index must be a number");
      }
      final intIdx = idx.toInt();
      if (intIdx < 0 || intIdx >= target.length) {
        throw RuntimeError(
            "សន្ទស្សន៍អក្សរលើសព្រំដែន ($intIdx) / String index out of bounds ($intIdx)");
      }
      return target[intIdx];
    }

    if (target is Map) {
      return target[idx.toString()];
    }

    throw RuntimeError(
        "មិនអាចទាញយកសន្ទស្សន៍លើប្រភេទនេះបានទេ / Target is not indexable");
  }

  dynamic _visitIndexAssignmentNode(IndexAssignmentNode node, Environment env) {
    final target = execute(node.target, env);
    final idx = execute(node.index, env);
    final val = execute(node.value, env);

    if (target is List) {
      if (idx is! num) {
        throw RuntimeError("សន្ទស្សន៍បញ្ជីត្រូវតែជាលេខ / Array index must be a number");
      }
      final intIdx = idx.toInt();
      if (intIdx < 0 || intIdx >= target.length) {
        throw RuntimeError("សន្ទស្សន៍លើសព្រំដែន ($intIdx) / Index out of bounds ($intIdx)");
      }
      target[intIdx] = val;
      return val;
    }

    if (target is Map) {
      target[idx.toString()] = val;
      return val;
    }

    throw RuntimeError(
        "មិនអាចកំណត់សន្ទស្សន៍លើប្រភេទនេះបានទេ / Target is not indexable for assignment");
  }

  dynamic _visitFunctionCallNode(FunctionCallNode node, Environment env) {
    final callee = execute(node.callee, env);
    final args = node.args.map((arg) => execute(arg, env)).toList();

    if (callee is KhmerClass) {
      return callee.instantiate(this, args);
    }
    if (callee is KhmerFunction) {
      return callee.call(this, args);
    }
    if (callee is BuiltinFunction) {
      return callee(args);
    }

    throw RuntimeError("មិនមែនជាអនុគមន៍ ឬថ្នាក់ / Target is not callable");
  }

  dynamic _visitNewNode(NewNode node, Environment env) {
    final khmerClass = env.get(node.className);
    if (khmerClass is! KhmerClass) {
      throw RuntimeError(
          "'${node.className}' មិនមែនជាថ្នាក់ (Class) ទេ / '${node.className}' is not a class");
    }
    final args = node.args.map((arg) => execute(arg, env)).toList();
    return khmerClass.instantiate(this, args);
  }

  dynamic _visitClassDeclNode(ClassDeclNode node, Environment env) {
    KhmerClass? parentClass;
    if (node.parentName != null) {
      final p = env.get(node.parentName!);
      if (p is! KhmerClass) {
        throw RuntimeError(
            "ថ្នាក់មេ '${node.parentName}' មិនត្រឹមត្រូវ / Parent class '${node.parentName}' is not a class");
      }
      parentClass = p;
    }

    final Map<String, KhmerFunction> methods = {};
    for (final mStmt in node.methods) {
      final func = KhmerFunction(mStmt.name, mStmt.params, mStmt.body, env);
      methods[mStmt.name] = func;
    }

    final khmerClass = KhmerClass(node.name, parentClass, methods);
    env.define(node.name, khmerClass);
    return khmerClass;
  }

  dynamic _visitPrintNode(PrintNode node, Environment env) {
    final vals = node.expressions.map((expr) => execute(expr, env)).toList();
    final printFn = env.get('បង្ហាញ') as BuiltinFunction;
    return printFn(vals);
  }

  dynamic _visitBlockNode(BlockNode node, Environment env) {
    final blockEnv = Environment(env);
    return executeBlock(node.statements, blockEnv);
  }

  dynamic _visitIfNode(IfNode node, Environment env) {
    final condVal = execute(node.condition, env);
    if (_isTruthy(condVal)) {
      return execute(node.thenBranch, env);
    } else if (node.elseBranch != null) {
      return execute(node.elseBranch!, env);
    }
    return null;
  }

  dynamic _visitWhileNode(WhileNode node, Environment env) {
    dynamic res;
    while (_isTruthy(execute(node.condition, env))) {
      res = execute(node.body, env);
    }
    return res;
  }

  dynamic _visitForNode(ForNode node, Environment env) {
    final forEnv = Environment(env);
    if (node.initializer != null) {
      execute(node.initializer!, forEnv);
    }

    dynamic res;
    while (true) {
      if (node.condition != null) {
        final condVal = execute(node.condition!, forEnv);
        if (!_isTruthy(condVal)) {
          break;
        }
      }
      res = execute(node.body, forEnv);
      if (node.increment != null) {
        execute(node.increment!, forEnv);
      }
    }
    return res;
  }

  dynamic _visitFunctionDeclNode(FunctionDeclNode node, Environment env) {
    final func = KhmerFunction(node.name, node.params, node.body, env);
    env.define(node.name, func);
    return func;
  }

  dynamic _visitReturnNode(ReturnNode node, Environment env) {
    dynamic val;
    if (node.value != null) {
      val = execute(node.value!, env);
    }
    throw ReturnException(val);
  }
}
