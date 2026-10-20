from typing import List, Optional
from khmer_lang.tokens import TokenType, Token
from khmer_lang.errors import ParserError
from khmer_lang.ast_nodes import (
    ASTNode, NumberNode, StringNode, BooleanNode, NullNode,
    ArrayNode, ObjectNode, IdentifierNode, ThisNode, UnaryOpNode, BinaryOpNode,
    AssignmentNode, MemberAccessNode, MemberAssignmentNode, IndexAccessNode, IndexAssignmentNode,
    FunctionCallNode, NewNode, VarDeclNode, PrintNode, BlockNode, IfNode, WhileNode, ForNode,
    FunctionDeclNode, ClassDeclNode, ReturnNode, ExpressionStmtNode
)

class Parser:
    def __init__(self, tokens: List[Token]):
        self.tokens = tokens
        self.current = 0

    def _peek(self, offset: int = 0) -> Token:
        pos = self.current + offset
        if pos >= len(self.tokens):
            return self.tokens[-1]
        return self.tokens[pos]

    def _match(self, *types: TokenType) -> bool:
        if self._peek().type in types:
            self._advance()
            return True
        return False

    def _check(self, type_: TokenType) -> bool:
        return self._peek().type == type_

    def _advance(self) -> Token:
        tok = self.tokens[self.current]
        if self.current < len(self.tokens) - 1:
            self.current += 1
        return tok

    def _consume(self, type_: TokenType, message: str) -> Token:
        if self._check(type_):
            return self._advance()
        tok = self._peek()
        raise ParserError(f"{message} (បានជួប/Found '{tok.value}' នៅបន្ទាត់ {tok.line})", tok.line, tok.column)

    def parse(self) -> List[ASTNode]:
        statements = []
        while not self._check(TokenType.EOF):
            stmt = self._statement()
            if stmt:
                statements.append(stmt)
        return statements

    def _statement(self) -> ASTNode:
        # Optional semicolons
        while self._match(TokenType.SEMICOLON):
            pass

        if self._check(TokenType.EOF):
            return None

        if self._check(TokenType.LET):
            return self._var_decl_statement()
        if self._check(TokenType.PRINT):
            return self._print_statement()
        if self._check(TokenType.IF):
            return self._if_statement()
        if self._check(TokenType.WHILE):
            return self._while_statement()
        if self._check(TokenType.FOR):
            return self._for_statement()
        if self._check(TokenType.FUNCTION) or self._check(TokenType.METHOD):
            return self._function_decl_statement()
        if self._check(TokenType.CLASS):
            return self._class_decl_statement()
        if self._check(TokenType.RETURN):
            return self._return_statement()
        if self._check(TokenType.LBRACE):
            return self._block_statement()

        return self._expression_statement()

    def _var_decl_statement(self) -> ASTNode:
        self._consume(TokenType.LET, "ត្រូវមាន 'តាំង' / Expected 'តាំង'")
        name_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះអថេរ / Expected variable name")

        value = None
        if self._match(TokenType.ASSIGN):
            value = self._expression()

        self._match(TokenType.SEMICOLON)
        return VarDeclNode(name_tok.value, value)

    def _print_statement(self) -> ASTNode:
        self._consume(TokenType.PRINT, "ត្រូវមាន 'បង្ហាញ' / Expected 'បង្ហាញ'")

        expressions = []
        if self._match(TokenType.LPAREN):
            if not self._check(TokenType.RPAREN):
                expressions.append(self._expression())
                while self._match(TokenType.COMMA):
                    expressions.append(self._expression())
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' បិទ / Expected ')'")
        else:
            # Bare arguments: បង្ហាញ x, y
            expressions.append(self._expression())
            while self._match(TokenType.COMMA):
                expressions.append(self._expression())

        self._match(TokenType.SEMICOLON)
        return PrintNode(expressions)

    def _if_statement(self) -> ASTNode:
        self._consume(TokenType.IF, "ត្រូវមាន 'បើ' / Expected 'បើ'")
        
        has_paren = self._match(TokenType.LPAREN)
        condition = self._expression()
        if has_paren:
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' បិទលក្ខខណ្ឌ / Expected ')'")

        then_branch = self._block_statement()
        else_branch = None

        if self._check(TokenType.ELSE_IF):
            else_branch = self._else_if_chain()
        elif self._match(TokenType.ELSE):
            else_branch = self._block_statement()

        return IfNode(condition, then_branch, else_branch)

    def _else_if_chain(self) -> ASTNode:
        self._consume(TokenType.ELSE_IF, "ត្រូវមាន 'ឬបើ' / Expected 'ឬបើ'")

        has_paren = self._match(TokenType.LPAREN)
        condition = self._expression()
        if has_paren:
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' បិទលក្ខខណ្ឌ / Expected ')'")

        then_branch = self._block_statement()
        else_branch = None

        if self._check(TokenType.ELSE_IF):
            else_branch = self._else_if_chain()
        elif self._match(TokenType.ELSE):
            else_branch = self._block_statement()

        return IfNode(condition, then_branch, else_branch)

    def _while_statement(self) -> ASTNode:
        self._consume(TokenType.WHILE, "ត្រូវមាន 'ខណៈ' / Expected 'ខណៈ'")

        has_paren = self._match(TokenType.LPAREN)
        condition = self._expression()
        if has_paren:
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' បិទលក្ខខណ្ឌ / Expected ')'")

        body = self._block_statement()
        return WhileNode(condition, body)

    def _for_statement(self) -> ASTNode:
        self._consume(TokenType.FOR, "ត្រូវមាន 'សម្រាប់' / Expected 'សម្រាប់'")
        self._consume(TokenType.LPAREN, "ត្រូវមាន '(' ក្នុងសម្រាប់ / Expected '(' in for loop")

        initializer = None
        if not self._check(TokenType.SEMICOLON):
            if self._check(TokenType.LET):
                initializer = self._var_decl_statement()
            else:
                initializer = self._expression_statement()
        else:
            self._advance() # consume ;

        condition = None
        if not self._check(TokenType.SEMICOLON):
            condition = self._expression()
        self._consume(TokenType.SEMICOLON, "ត្រូវមាន ';' ក្នុងសម្រាប់ / Expected ';'")

        increment = None
        if not self._check(TokenType.RPAREN):
            increment = self._expression()
        self._consume(TokenType.RPAREN, "ត្រូវមាន ')' ក្នុងសម្រាប់ / Expected ')'")

        body = self._block_statement()
        return ForNode(initializer, condition, increment, body)

    def _function_decl_statement(self) -> ASTNode:
        # Accept either អនុគមន៍ (FUNCTION) or វិធី (METHOD)
        if not (self._match(TokenType.FUNCTION) or self._match(TokenType.METHOD)):
            tok = self._peek()
            raise ParserError(f"ត្រូវមាន 'អនុគមន៍' ឬ 'វិធី' / Expected 'អនុគមន៍' or 'វិធី'", tok.line, tok.column)

        name_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះអនុគមន៍ / Expected function name")

        self._consume(TokenType.LPAREN, "ត្រូវមាន '(' / Expected '('")
        params = []
        if not self._check(TokenType.RPAREN):
            param_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name")
            params.append(param_tok.value)
            while self._match(TokenType.COMMA):
                param_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name")
                params.append(param_tok.value)
        self._consume(TokenType.RPAREN, "ត្រូវមាន ')' / Expected ')'")

        body = self._block_statement()
        return FunctionDeclNode(name_tok.value, params, body)

    def _class_decl_statement(self) -> ClassDeclNode:
        self._consume(TokenType.CLASS, "ត្រូវមាន 'ថ្នាក់' / Expected 'ថ្នាក់'")
        class_name_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះថ្នាក់ / Expected class name")

        parent_name = None
        if self._match(TokenType.EXTENDS):
            parent_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះថ្នាក់មេ / Expected parent class name")
            parent_name = parent_tok.value

        self._consume(TokenType.LBRACE, "ត្រូវមាន '{' ដើមថ្នាក់ / Expected '{' for class body")
        methods = []

        while not self._check(TokenType.RBRACE) and not self._check(TokenType.EOF):
            # Method could be prefixed with វិធី / អនុគមន៍ or be a constructor 'បង្កើត' or plain identifier
            if self._match(TokenType.METHOD, TokenType.FUNCTION):
                method_name_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះវិធី / Expected method name")
            elif self._check(TokenType.IDENTIFIER):
                method_name_tok = self._advance()
            else:
                tok = self._peek()
                raise ParserError(f"វិធីសាស្ត្រមិនត្រឹមត្រូវក្នុងថ្នាក់ '{tok.value}' / Invalid method definition in class", tok.line, tok.column)

            self._consume(TokenType.LPAREN, "ត្រូវមាន '(' / Expected '('")
            params = []
            if not self._check(TokenType.RPAREN):
                param_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name")
                params.append(param_tok.value)
                while self._match(TokenType.COMMA):
                    param_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ / Expected parameter name")
                    params.append(param_tok.value)
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' / Expected ')'")

            body = self._block_statement()
            methods.append(FunctionDeclNode(method_name_tok.value, params, body))

        self._consume(TokenType.RBRACE, "ត្រូវមាន '}' បិទថ្នាក់ / Expected '}' for class body")
        return ClassDeclNode(class_name_tok.value, parent_name, methods)

    def _return_statement(self) -> ASTNode:
        self._consume(TokenType.RETURN, "ត្រូវមាន 'ត្រឡប់' / Expected 'ត្រឡប់'")
        value = None
        if not self._check(TokenType.SEMICOLON) and not self._check(TokenType.RBRACE) and not self._check(TokenType.EOF):
            value = self._expression()
        self._match(TokenType.SEMICOLON)
        return ReturnNode(value)

    def _block_statement(self) -> BlockNode:
        self._consume(TokenType.LBRACE, "ត្រូវមាន '{' / Expected '{'")
        statements = []
        while not self._check(TokenType.RBRACE) and not self._check(TokenType.EOF):
            stmt = self._statement()
            if stmt:
                statements.append(stmt)
        self._consume(TokenType.RBRACE, "ត្រូវមាន '}' បិទប្លុក / Expected '}'")
        return BlockNode(statements)

    def _expression_statement(self) -> ASTNode:
        expr = self._expression()
        self._match(TokenType.SEMICOLON)
        return ExpressionStmtNode(expr)

    # Expression parsing with operator precedence

    def _expression(self) -> ASTNode:
        return self._assignment()

    def _assignment(self) -> ASTNode:
        expr = self._logical_or()

        if self._match(TokenType.ASSIGN):
            value = self._assignment()
            if isinstance(expr, IdentifierNode):
                return AssignmentNode(expr.name, value)
            elif isinstance(expr, MemberAccessNode):
                return MemberAssignmentNode(expr.target, expr.member, value)
            elif isinstance(expr, IndexAccessNode):
                return IndexAssignmentNode(expr.target, expr.index, value)
            raise ParserError("ការកំណត់តម្លៃមិនត្រឹមត្រូវ / Invalid assignment target", self._peek().line, self._peek().column)

        return expr

    def _logical_or(self) -> ASTNode:
        expr = self._logical_and()
        while self._match(TokenType.OR):
            op = "ឬ"
            right = self._logical_and()
            expr = BinaryOpNode(expr, op, right)
        return expr

    def _logical_and(self) -> ASTNode:
        expr = self._equality()
        while self._match(TokenType.AND):
            op = "និង"
            right = self._equality()
            expr = BinaryOpNode(expr, op, right)
        return expr

    def _equality(self) -> ASTNode:
        expr = self._comparison()
        while self._peek().type in (TokenType.EQ, TokenType.NEQ):
            op = self._advance().value
            right = self._comparison()
            expr = BinaryOpNode(expr, op, right)
        return expr

    def _comparison(self) -> ASTNode:
        expr = self._term()
        while self._peek().type in (TokenType.LT, TokenType.GT, TokenType.LTE, TokenType.GTE):
            op = self._advance().value
            right = self._term()
            expr = BinaryOpNode(expr, op, right)
        return expr

    def _term(self) -> ASTNode:
        expr = self._factor()
        while self._peek().type in (TokenType.PLUS, TokenType.MINUS):
            op = self._advance().value
            right = self._factor()
            expr = BinaryOpNode(expr, op, right)
        return expr

    def _factor(self) -> ASTNode:
        expr = self._unary()
        while self._peek().type in (TokenType.STAR, TokenType.SLASH, TokenType.MODULO):
            op = self._advance().value
            right = self._unary()
            expr = BinaryOpNode(expr, op, right)
        return expr

    def _unary(self) -> ASTNode:
        if self._peek().type in (TokenType.NOT, TokenType.MINUS):
            op_tok = self._advance()
            operand = self._unary()
            return UnaryOpNode(op_tok.value, operand)
        return self._call_and_member()

    def _call_and_member(self) -> ASTNode:
        expr = self._primary()

        while True:
            if self._match(TokenType.LPAREN):
                args = []
                if not self._check(TokenType.RPAREN):
                    args.append(self._expression())
                    while self._match(TokenType.COMMA):
                        args.append(self._expression())
                self._consume(TokenType.RPAREN, "ត្រូវមាន ')' / Expected ')'")
                expr = FunctionCallNode(expr, args)
            elif self._match(TokenType.DOT):
                member_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះសមាជិក / Expected member name after '.'")
                expr = MemberAccessNode(expr, member_tok.value)
            elif self._match(TokenType.LBRACKET):
                index = self._expression()
                self._consume(TokenType.RBRACKET, "ត្រូវមាន ']' / Expected ']'")
                expr = IndexAccessNode(expr, index)
            else:
                break

        return expr

    def _primary(self) -> ASTNode:
        if self._match(TokenType.NUMBER):
            return NumberNode(self.tokens[self.current - 1].value)
        if self._match(TokenType.STRING):
            return StringNode(self.tokens[self.current - 1].value)
        if self._match(TokenType.TRUE):
            return BooleanNode(True)
        if self._match(TokenType.FALSE):
            return BooleanNode(False)
        if self._match(TokenType.NULL):
            return NullNode()
        if self._match(TokenType.THIS, TokenType.SELF):
            return ThisNode()
        if self._match(TokenType.IDENTIFIER):
            return IdentifierNode(self.tokens[self.current - 1].value)

        # Instantiate object with 'ថ្មី' (new) keyword: ថ្មី មនុស្ស(args...)
        if self._match(TokenType.NEW):
            class_tok = self._consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះថ្នាក់បន្ទាប់ពី 'ថ្មី' / Expected class name after 'ថ្មី'")
            self._consume(TokenType.LPAREN, "ត្រូវមាន '(' / Expected '('")
            args = []
            if not self._check(TokenType.RPAREN):
                args.append(self._expression())
                while self._match(TokenType.COMMA):
                    args.append(self._expression())
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' / Expected ')'")
            return NewNode(class_tok.value, args)

        # Parenthesized expression
        if self._match(TokenType.LPAREN):
            expr = self._expression()
            self._consume(TokenType.RPAREN, "ត្រូវមាន ')' / Expected ')'")
            return expr

        # Array literal [elem1, elem2, ...]
        if self._match(TokenType.LBRACKET):
            elements = []
            if not self._check(TokenType.RBRACKET):
                elements.append(self._expression())
                while self._match(TokenType.COMMA):
                    elements.append(self._expression())
            self._consume(TokenType.RBRACKET, "ត្រូវមាន ']' / Expected ']'")
            return ArrayNode(elements)

        # Object literal { key: val, ... }
        if self._match(TokenType.LBRACE):
            pairs = []
            if not self._check(TokenType.RBRACE):
                key = self._primary()
                key_name = key.value if isinstance(key, StringNode) else (key.name if isinstance(key, IdentifierNode) else str(key))
                self._consume(TokenType.COLON, "ត្រូវមាន ':' / Expected ':'")
                val = self._expression()
                pairs.append((key_name, val))
                while self._match(TokenType.COMMA):
                    key = self._primary()
                    key_name = key.value if isinstance(key, StringNode) else (key.name if isinstance(key, IdentifierNode) else str(key))
                    self._consume(TokenType.COLON, "ត្រូវមាន ':' / Expected ':'")
                    val = self._expression()
                    pairs.append((key_name, val))
            self._consume(TokenType.RBRACE, "ត្រូវមាន '}' / Expected '}'")
            return ObjectNode(pairs)

        tok = self._peek()
        raise ParserError(f"កំហុសវាក្យសព្ទ / Syntax error near '{tok.value}'", tok.line, tok.column)
