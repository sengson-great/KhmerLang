import 'tokens.dart';
import 'errors.dart';
import 'ast_nodes.dart';

class Parser {
  final List<Token> tokens;
  int current = 0;

  Parser(this.tokens);

  Token _peek([int offset = 0]) {
    final pos = current + offset;
    if (pos >= tokens.length) {
      return tokens.last;
    }
    return tokens[pos];
  }

  bool _match(List<TokenType> types) {
    if (types.contains(_peek().type)) {
      _advance();
      return true;
    }
    return false;
  }

  bool _check(TokenType type) {
    return _peek().type == type;
  }

  Token _advance() {
    final tok = tokens[current];
    if (current < tokens.length - 1) {
      current++;
    }
    return tok;
  }

  Token _consume(TokenType type, String message) {
    if (_check(type)) {
      return _advance();
    }
    final tok = _peek();
    throw ParserError(
      "$message (បានជួប/Found '${tok.value}' នៅបន្ទាត់ ${tok.line})",
      tok.line,
      tok.column,
    );
  }

  List<ASTNode> parse() {
    final List<ASTNode> statements = [];
    while (!_check(TokenType.eof)) {
      final stmt = _statement();
      if (stmt != null) {
        statements.add(stmt);
      }
    }
    return statements;
  }

  ASTNode? _statement() {
    while (_match([TokenType.semicolon])) {}

    if (_check(TokenType.eof)) {
      return null;
    }

    if (_check(TokenType.let)) {
      return _varDeclStatement();
    }
    if (_check(TokenType.print)) {
      return _printStatement();
    }
    if (_check(TokenType.ifType)) {
      return _ifStatement();
    }
    if (_check(TokenType.whileType)) {
      return _whileStatement();
    }
    if (_check(TokenType.forType)) {
      return _forStatement();
    }
    if (_check(TokenType.function) || _check(TokenType.method)) {
      return _functionDeclStatement();
    }
    if (_check(TokenType.classType)) {
      return _classDeclStatement();
    }
    if (_check(TokenType.returnType)) {
      return _returnStatement();
    }
    if (_check(TokenType.lbrace)) {
      return _blockStatement();
    }

    return _expressionStatement();
  }

  ASTNode _varDeclStatement() {
    _consume(TokenType.let, "ត្រូវមាន 'តាំង' / Expected 'តាំង'");
    final nameTok = _consume(
        TokenType.identifier, "ត្រូវមានឈ្មោះអថេរ / Expected variable name");

    ASTNode? value;
    if (_match([TokenType.assign])) {
      value = _expression();
    }

    _match([TokenType.semicolon]);
    return VarDeclNode(nameTok.value.toString(), value);
  }

  ASTNode _printStatement() {
    _consume(TokenType.print, "ត្រូវមាន 'បង្ហាញ' / Expected 'បង្ហាញ'");

    final List<ASTNode> expressions = [];
    if (_match([TokenType.lparen])) {
      if (!_check(TokenType.rparen)) {
        expressions.add(_expression());
        while (_match([TokenType.comma])) {
          expressions.add(_expression());
        }
      }
      _consume(TokenType.rparen, "ត្រូវមាន ')' បិទ / Expected ')'");
    } else {
      expressions.add(_expression());
      while (_match([TokenType.comma])) {
        expressions.add(_expression());
      }
    }

    _match([TokenType.semicolon]);
    return PrintNode(expressions);
  }

  ASTNode _ifStatement() {
    _consume(TokenType.ifType, "ត្រូវមាន 'បើ' / Expected 'បើ'");

    final hasParen = _match([TokenType.lparen]);
    final condition = _expression();
    if (hasParen) {
      _consume(
          TokenType.rparen, "ត្រូវមាន ')' បិទលក្ខខណ្ឌ / Expected ')'");
    }

    final thenBranch = _blockStatement();
    ASTNode? elseBranch;

    if (_check(TokenType.elseIf)) {
      elseBranch = _elseIfChain();
    } else if (_match([TokenType.elseType])) {
      elseBranch = _blockStatement();
    }

    return IfNode(condition, thenBranch, elseBranch);
  }

  ASTNode _elseIfChain() {
    _consume(TokenType.elseIf, "ត្រូវមាន 'ឬបើ' / Expected 'ឬបើ'");

    final hasParen = _match([TokenType.lparen]);
    final condition = _expression();
    if (hasParen) {
      _consume(
          TokenType.rparen, "ត្រូវមាន ')' បិទលក្ខខណ្ឌ / Expected ')'");
    }

    final thenBranch = _blockStatement();
    ASTNode? elseBranch;

    if (_check(TokenType.elseIf)) {
      elseBranch = _elseIfChain();
    } else if (_match([TokenType.elseType])) {
      elseBranch = _blockStatement();
    }

    return IfNode(condition, thenBranch, elseBranch);
  }

  ASTNode _whileStatement() {
    _consume(TokenType.whileType, "ត្រូវមាន 'ខណៈ' / Expected 'ខណៈ'");

    final hasParen = _match([TokenType.lparen]);
    final condition = _expression();
    if (hasParen) {
      _consume(
          TokenType.rparen, "ត្រូវមាន ')' បិទលក្ខខណ្ឌ / Expected ')'");
    }

    final body = _blockStatement();
    return WhileNode(condition, body);
  }

  ASTNode _forStatement() {
    _consume(TokenType.forType, "ត្រូវមាន 'សម្រាប់' / Expected 'សម្រាប់'");
    _consume(TokenType.lparen, "ត្រូវមាន '(' ក្នុងសម្រាប់ / Expected '(' in for loop");

    ASTNode? initializer;
    if (!_check(TokenType.semicolon)) {
      if (_check(TokenType.let)) {
        initializer = _varDeclStatement();
      } else {
        initializer = _expressionStatement();
      }
    } else {
      _advance();
    }

    ASTNode? condition;
    if (!_check(TokenType.semicolon)) {
      condition = _expression();
    }
    _consume(TokenType.semicolon, "ត្រូវមាន ';' ក្នុងសម្រាប់ / Expected ';'");

    ASTNode? increment;
    if (!_check(TokenType.rparen)) {
      increment = _expression();
    }
    _consume(TokenType.rparen, "ត្រូវមាន ')' ក្នុងសម្រាប់ / Expected ')'");

    final body = _blockStatement();
    return ForNode(initializer, condition, increment, body);
  }

  ASTNode _functionDeclStatement() {
    if (!(_match([TokenType.function]) || _match([TokenType.method]))) {
      final tok = _peek();
      throw ParserError(
          "ត្រូវមាន 'អនុគមន៍' ឬ 'វិធី' / Expected 'អនុគមន៍' or 'វិធី'",
          tok.line,
          tok.column);
    }

    final nameTok = _consume(
        TokenType.identifier, "ត្រូវមានឈ្មោះអនុគមន៍ / Expected function name");

    _consume(TokenType.lparen, "ត្រូវមាន '(' / Expected '('");
    final List<String> params = [];
    if (!_check(TokenType.rparen)) {
      final paramTok = _consume(TokenType.identifier,
          "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name");
      params.add(paramTok.value.toString());
      while (_match([TokenType.comma])) {
        final nextParam = _consume(TokenType.identifier,
            "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name");
        params.add(nextParam.value.toString());
      }
    }
    _consume(TokenType.rparen, "ត្រូវមាន ')' / Expected ')'");

    final body = _blockStatement();
    return FunctionDeclNode(nameTok.value.toString(), params, body);
  }

  ClassDeclNode _classDeclStatement() {
    _consume(TokenType.classType, "ត្រូវមាន 'ថ្នាក់' / Expected 'ថ្នាក់'");
    final classNameTok = _consume(
        TokenType.identifier, "ត្រូវមានឈ្មោះថ្នាក់ / Expected class name");

    String? parentName;
    if (_match([TokenType.extendsType])) {
      final parentTok = _consume(TokenType.identifier,
          "ត្រូវមានឈ្មោះថ្នាក់មេ / Expected parent class name");
      parentName = parentTok.value.toString();
    }

    _consume(
        TokenType.lbrace, "ត្រូវមាន '{' ដើមថ្នាក់ / Expected '{' for class body");
    final List<FunctionDeclNode> methods = [];

    while (!_check(TokenType.rbrace) && !_check(TokenType.eof)) {
      Token methodNameTok;
      if (_match([TokenType.method, TokenType.function])) {
        methodNameTok = _consume(
            TokenType.identifier, "ត្រូវមានឈ្មោះវិធី / Expected method name");
      } else if (_check(TokenType.identifier)) {
        methodNameTok = _advance();
      } else {
        final tok = _peek();
        throw ParserError(
            "វិធីសាស្ត្រមិនត្រឹមត្រូវក្នុងថ្នាក់ '${tok.value}' / Invalid method definition in class",
            tok.line,
            tok.column);
      }

      _consume(TokenType.lparen, "ត្រូវមាន '(' / Expected '('");
      final List<String> params = [];
      if (!_check(TokenType.rparen)) {
        final paramTok = _consume(TokenType.identifier,
            "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name");
        params.add(paramTok.value.toString());
        while (_match([TokenType.comma])) {
          final nextParam = _consume(TokenType.identifier,
              "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name");
          params.add(nextParam.value.toString());
        }
      }
      _consume(TokenType.rparen, "ត្រូវមាន ')' / Expected ')'");

      final body = _blockStatement();
      methods.add(FunctionDeclNode(methodNameTok.value.toString(), params, body));
    }

    _consume(TokenType.rbrace, "ត្រូវមាន '}' បិទថ្នាក់ / Expected '}' for class body");
    return ClassDeclNode(classNameTok.value.toString(), parentName, methods);
  }

  ASTNode _returnStatement() {
    _consume(TokenType.returnType, "ត្រូវមាន 'ត្រឡប់' / Expected 'ត្រឡប់'");
    ASTNode? value;
    if (!_check(TokenType.semicolon) &&
        !_check(TokenType.rbrace) &&
        !_check(TokenType.eof)) {
      value = _expression();
    }
    _match([TokenType.semicolon]);
    return ReturnNode(value);
  }

  BlockNode _blockStatement() {
    _consume(TokenType.lbrace, "ត្រូវមាន '{' / Expected '{'");
    final List<ASTNode> statements = [];
    while (!_check(TokenType.rbrace) && !_check(TokenType.eof)) {
      final stmt = _statement();
      if (stmt != null) {
        statements.add(stmt);
      }
    }
    _consume(TokenType.rbrace, "ត្រូវមាន '}' បិទប្លុក / Expected '}'");
    return BlockNode(statements);
  }

  ASTNode _expressionStatement() {
    final expr = _expression();
    _match([TokenType.semicolon]);
    return ExpressionStmtNode(expr);
  }

  ASTNode _expression() {
    return _assignment();
  }

  ASTNode _assignment() {
    final expr = _logicalOr();

    if (_match([TokenType.assign])) {
      final value = _assignment();
      if (expr is IdentifierNode) {
        return AssignmentNode(expr.name, value);
      } else if (expr is MemberAccessNode) {
        return MemberAssignmentNode(expr.target, expr.member, value);
      } else if (expr is IndexAccessNode) {
        return IndexAssignmentNode(expr.target, expr.index, value);
      }
      final peekTok = _peek();
      throw ParserError(
          "ការកំណត់តម្លៃមិនត្រឹមត្រូវ / Invalid assignment target",
          peekTok.line,
          peekTok.column);
    }

    return expr;
  }

  ASTNode _logicalOr() {
    var expr = _logicalAnd();
    while (_match([TokenType.or])) {
      final right = _logicalAnd();
      expr = BinaryOpNode(expr, 'ឬ', right);
    }
    return expr;
  }

  ASTNode _logicalAnd() {
    var expr = _equality();
    while (_match([TokenType.and])) {
      final right = _equality();
      expr = BinaryOpNode(expr, 'និង', right);
    }
    return expr;
  }

  ASTNode _equality() {
    var expr = _comparison();
    while (_check(TokenType.eq) || _check(TokenType.neq)) {
      final op = _advance().value.toString();
      final right = _comparison();
      expr = BinaryOpNode(expr, op, right);
    }
    return expr;
  }

  ASTNode _comparison() {
    var expr = _term();
    while (_check(TokenType.lt) ||
        _check(TokenType.gt) ||
        _check(TokenType.lte) ||
        _check(TokenType.gte)) {
      final op = _advance().value.toString();
      final right = _term();
      expr = BinaryOpNode(expr, op, right);
    }
    return expr;
  }

  ASTNode _term() {
    var expr = _factor();
    while (_check(TokenType.plus) || _check(TokenType.minus)) {
      final op = _advance().value.toString();
      final right = _factor();
      expr = BinaryOpNode(expr, op, right);
    }
    return expr;
  }

  ASTNode _factor() {
    var expr = _unary();
    while (_check(TokenType.star) ||
        _check(TokenType.slash) ||
        _check(TokenType.modulo)) {
      final op = _advance().value.toString();
      final right = _unary();
      expr = BinaryOpNode(expr, op, right);
    }
    return expr;
  }

  ASTNode _unary() {
    if (_check(TokenType.not) || _check(TokenType.minus)) {
      final opTok = _advance();
      final operand = _unary();
      return UnaryOpNode(opTok.value.toString(), operand);
    }
    return _callAndMember();
  }

  ASTNode _callAndMember() {
    var expr = _primary();

    while (true) {
      if (_match([TokenType.lparen])) {
        final List<ASTNode> args = [];
        if (!_check(TokenType.rparen)) {
          args.add(_expression());
          while (_match([TokenType.comma])) {
            args.add(_expression());
          }
        }
        _consume(TokenType.rparen, "ត្រូវមាន ')' / Expected ')'");
        expr = FunctionCallNode(expr, args);
      } else if (_match([TokenType.dot])) {
        final memberTok = _consume(TokenType.identifier,
            "ត្រូវមានឈ្មោះសមាជិក / Expected member name after '.'");
        expr = MemberAccessNode(expr, memberTok.value.toString());
      } else if (_match([TokenType.lbracket])) {
        final index = _expression();
        _consume(TokenType.rbracket, "ត្រូវមាន ']' / Expected ']'");
        expr = IndexAccessNode(expr, index);
      } else {
        break;
      }
    }

    return expr;
  }

  ASTNode _primary() {
    if (_match([TokenType.number])) {
      return NumberNode(tokens[current - 1].value as num);
    }
    if (_match([TokenType.string])) {
      return StringNode(tokens[current - 1].value.toString());
    }
    if (_match([TokenType.trueType])) {
      return const BooleanNode(true);
    }
    if (_match([TokenType.falseType])) {
      return const BooleanNode(false);
    }
    if (_match([TokenType.nullType])) {
      return const NullNode();
    }
    if (_match([TokenType.thisType, TokenType.self])) {
      return const ThisNode();
    }
    if (_match([TokenType.identifier])) {
      return IdentifierNode(tokens[current - 1].value.toString());
    }

    // Instantiate with 'ថ្មី' (new): ថ្មី មនុស្ស(...)
    if (_match([TokenType.newType])) {
      final classTok = _consume(TokenType.identifier,
          "ត្រូវមានឈ្មោះថ្នាក់បន្ទាប់ពី 'ថ្មី' / Expected class name after 'ថ្មី'");
      _consume(TokenType.lparen, "ត្រូវមាន '(' / Expected '('");
      final List<ASTNode> args = [];
      if (!_check(TokenType.rparen)) {
        args.add(_expression());
        while (_match([TokenType.comma])) {
          args.add(_expression());
        }
      }
      _consume(TokenType.rparen, "ត្រូវមាន ')' / Expected ')'");
      return NewNode(classTok.value.toString(), args);
    }

    // Parenthesized expression
    if (_match([TokenType.lparen])) {
      final expr = _expression();
      _consume(TokenType.rparen, "ត្រូវមាន ')' / Expected ')'");
      return expr;
    }

    // Array literal [a, b, c]
    if (_match([TokenType.lbracket])) {
      final List<ASTNode> elements = [];
      if (!_check(TokenType.rbracket)) {
        elements.add(_expression());
        while (_match([TokenType.comma])) {
          elements.add(_expression());
        }
      }
      _consume(TokenType.rbracket, "ត្រូវមាន ']' / Expected ']'");
      return ArrayNode(elements);
    }

    // Object literal { key: val }
    if (_match([TokenType.lbrace])) {
      final List<MapEntry<String, ASTNode>> pairs = [];
      if (!_check(TokenType.rbracket) && !_check(TokenType.rbrace)) {
        final keyNode = _primary();
        final keyName = (keyNode is StringNode)
            ? keyNode.value
            : (keyNode is IdentifierNode ? keyNode.name : keyNode.toString());
        _consume(TokenType.colon, "ត្រូវមាន ':' / Expected ':'");
        final val = _expression();
        pairs.add(MapEntry(keyName, val));
        while (_match([TokenType.comma])) {
          final nextKeyNode = _primary();
          final nextKeyName = (nextKeyNode is StringNode)
              ? nextKeyNode.value
              : (nextKeyNode is IdentifierNode
                  ? nextKeyNode.name
                  : nextKeyNode.toString());
          _consume(TokenType.colon, "ត្រូវមាន ':' / Expected ':'");
          final nextVal = _expression();
          pairs.add(MapEntry(nextKeyName, nextVal));
        }
      }
      _consume(TokenType.rbrace, "ត្រូវមាន '}' / Expected '}'");
      return ObjectNode(pairs);
    }

    final tok = _peek();
    throw ParserError(
      "កំហុសវាក្យសព្ទ / Syntax error near '${tok.value}'",
      tok.line,
      tok.column,
    );
  }
}
