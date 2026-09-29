/**
 * KhmerLang (ភាសាខ្មែរ) Client-side JavaScript Engine
 * Provides instant execution for KhmerLang code directly in the browser!
 */

// Khmer Numerals mapping
const KHMER_DIGITS = {
    '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4',
    '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9'
};

const ASCII_TO_KHMER = {
    '0': '០', '1': '១', '2': '២', '3': '៣', '4': '៤',
    '5': '៥', '6': '៦', '7': '៧', '8': '៨', '9': '៩'
};

function toKhmerDigits(val) {
    return String(val).replace(/[0-9]/g, ch => ASCII_TO_KHMER[ch] || ch);
}

function formatKhmerValue(val) {
    if (val === null || val === undefined) return 'ទទេ';
    if (typeof val === 'boolean') return val ? 'ពិត' : 'មិនពិត';
    if (typeof val === 'number') {
        const str = Number.isInteger(val) ? String(val) : String(val);
        return toKhmerDigits(str);
    }
    if (Array.isArray(val)) {
        return '[' + val.map(formatKhmerValue).join(', ') + ']';
    }
    if (typeof val === 'object') {
        if (val instanceof KhmerInstance) return `<វត្ថុនៃថ្នាក់ ${val.khmerClass.name}>`;
        if (val instanceof KhmerClass) return `<ថ្នាក់ ${val.name}>`;
        if (val instanceof KhmerFunction) return `<អនុគមន៍/វិធី ${val.name}>`;
        const pairs = Object.entries(val).map(([k, v]) => `"${k}": ${formatKhmerValue(v)}`);
        return '{' + pairs.join(', ') + '}';
    }
    return String(val);
}

// Token Types
const TokenType = {
    NUMBER: 'NUMBER', STRING: 'STRING', IDENTIFIER: 'IDENTIFIER',
    LET: 'LET', PRINT: 'PRINT', IF: 'IF', ELSE_IF: 'ELSE_IF', ELSE: 'ELSE',
    WHILE: 'WHILE', FOR: 'FOR', FUNCTION: 'FUNCTION', RETURN: 'RETURN',
    TRUE: 'TRUE', FALSE: 'FALSE', NULL: 'NULL', AND: 'AND', OR: 'OR', NOT: 'NOT',
    CLASS: 'CLASS', METHOD: 'METHOD', THIS: 'THIS', SELF: 'SELF', NEW: 'NEW', EXTENDS: 'EXTENDS',
    PLUS: 'PLUS', MINUS: 'MINUS', STAR: 'STAR', SLASH: 'SLASH', MODULO: 'MODULO',
    ASSIGN: 'ASSIGN', EQ: 'EQ', NEQ: 'NEQ', LT: 'LT', GT: 'GT', LTE: 'LTE', GTE: 'GTE',
    DOT: 'DOT', LPAREN: 'LPAREN', RPAREN: 'RPAREN', LBRACE: 'LBRACE', RBRACE: 'RBRACE',
    LBRACKET: 'LBRACKET', RBRACKET: 'RBRACKET', COMMA: 'COMMA', SEMICOLON: 'SEMICOLON', COLON: 'COLON',
    EOF: 'EOF'
};

const KEYWORDS = {
    'តាំង': TokenType.LET, 'បង្ហាញ': TokenType.PRINT, 'បើ': TokenType.IF, 'ឬបើ': TokenType.ELSE_IF,
    'ផ្សេងទៀត': TokenType.ELSE, 'ខណៈ': TokenType.WHILE, 'សម្រាប់': TokenType.FOR,
    'អនុគមន៍': TokenType.FUNCTION, 'ត្រឡប់': TokenType.RETURN, 'ពិត': TokenType.TRUE,
    'មិនពិត': TokenType.FALSE, 'ទទេ': TokenType.NULL, 'និង': TokenType.AND, 'ឬ': TokenType.OR, 'មិន': TokenType.NOT,
    'ថ្នាក់': TokenType.CLASS, 'វិធី': TokenType.METHOD, 'នេះ': TokenType.THIS,
    'ខ្លួនវា': TokenType.SELF, 'ថ្មី': TokenType.NEW, 'បន្តពី': TokenType.EXTENDS,
};

class Token {
    constructor(type, value, line, column) {
        this.type = type;
        this.value = value;
        this.line = line;
        this.column = column;
    }
}

class Lexer {
    constructor(source) {
        this.source = source;
        this.position = 0;
        this.line = 1;
        this.column = 1;
        this.length = source.length;
    }

    peek(offset = 0) {
        const pos = this.position + offset;
        return pos >= this.length ? '\0' : this.source[pos];
    }

    advance() {
        const ch = this.peek();
        this.position++;
        if (ch === '\n') {
            this.line++;
            this.column = 1;
        } else {
            this.column++;
        }
        return ch;
    }

    isKhmerDigit(ch) {
        return !!KHMER_DIGITS[ch];
    }

    isDigit(ch) {
        return (ch >= '0' && ch <= '9') || this.isKhmerDigit(ch);
    }

    isIdentStart(ch) {
        if (ch === '_' || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) return true;
        const code = ch.charCodeAt(0);
        return (code >= 0x1780 && code <= 0x17FF) || (code >= 0x19E0 && code <= 0x19FF);
    }

    isIdentPart(ch) {
        return this.isIdentStart(ch) || this.isDigit(ch);
    }

    tokenize() {
        const tokens = [];

        while (this.position < this.length) {
            const ch = this.peek();

            if (' \t\r\n\u200b\u00a0\ufeff'.includes(ch)) {
                this.advance();
                continue;
            }

            if (ch === '#' || (ch === '/' && this.peek(1) === '/')) {
                while (this.peek() !== '\n' && this.peek() !== '\0') {
                    this.advance();
                }
                continue;
            }

            if (ch === '/' && this.peek(1) === '*') {
                this.advance(); this.advance();
                while (!(this.peek() === '*' && this.peek(1) === '/') && this.peek() !== '\0') {
                    this.advance();
                }
                if (this.peek() !== '\0') {
                    this.advance(); this.advance();
                }
                continue;
            }

            const startLine = this.line;
            const startCol = this.column;

            if (this.isDigit(ch)) {
                let numStr = '';
                let hasDot = false;
                while (this.isDigit(this.peek()) || (this.peek() === '.' && !hasDot && this.isDigit(this.peek(1)))) {
                    const c = this.advance();
                    if (c === '.') hasDot = true;
                    numStr += c;
                }
                let norm = '';
                for (let i = 0; i < numStr.length; i++) {
                    norm += KHMER_DIGITS[numStr[i]] || numStr[i];
                }
                const val = hasDot ? parseFloat(norm) : parseInt(norm, 10);
                tokens.push(new Token(TokenType.NUMBER, val, startLine, startCol));
                continue;
            }

            if ('"\'“”‘’'.includes(ch)) {
                const openQuote = this.advance();
                const isCurly = '“”‘’'.includes(openQuote);
                const closeQuotes = isCurly ? ['"', "'", '“', '”', '‘', '’'] : [openQuote];
                let strVal = '';
                while (!closeQuotes.includes(this.peek()) && this.peek() !== '\0') {
                    const c = this.advance();
                    if (c === '\\') {
                        const nxt = this.advance();
                        if (nxt === 'n') strVal += '\n';
                        else if (nxt === 't') strVal += '\t';
                        else if (nxt === '\\') strVal += '\\';
                        else strVal += nxt;
                    } else {
                        strVal += c;
                    }
                }
                if (this.peek() === '\0') {
                    throw new Error(`String មិនបានបិទ [បន្ទាត់ ${startLine}, ជួរ ${startCol}]`);
                }
                this.advance();
                tokens.push(new Token(TokenType.STRING, strVal, startLine, startCol));
                continue;
            }

            if (ch === '=' && this.peek(1) === '=') {
                this.advance(); this.advance();
                tokens.push(new Token(TokenType.EQ, '==', startLine, startCol));
                continue;
            }
            if (ch === '!' && this.peek(1) === '=') {
                this.advance(); this.advance();
                tokens.push(new Token(TokenType.NEQ, '!=', startLine, startCol));
                continue;
            }
            if (ch === '<' && this.peek(1) === '=') {
                this.advance(); this.advance();
                tokens.push(new Token(TokenType.LTE, '<=', startLine, startCol));
                continue;
            }
            if (ch === '>' && this.peek(1) === '=') {
                this.advance(); this.advance();
                tokens.push(new Token(TokenType.GTE, '>=', startLine, startCol));
                continue;
            }
            if (ch === '&' && this.peek(1) === '&') {
                this.advance(); this.advance();
                tokens.push(new Token(TokenType.AND, '&&', startLine, startCol));
                continue;
            }
            if (ch === '|' && this.peek(1) === '|') {
                this.advance(); this.advance();
                tokens.push(new Token(TokenType.OR, '||', startLine, startCol));
                continue;
            }

            const singleOps = {
                '+': TokenType.PLUS, '-': TokenType.MINUS, '*': TokenType.STAR, '/': TokenType.SLASH,
                '%': TokenType.MODULO, '=': TokenType.ASSIGN, '<': TokenType.LT, '>': TokenType.GT,
                '!': TokenType.NOT, '.': TokenType.DOT, '．': TokenType.DOT,
                '(': TokenType.LPAREN, ')': TokenType.RPAREN, '{': TokenType.LBRACE, '}': TokenType.RBRACE,
                '[': TokenType.LBRACKET, ']': TokenType.RBRACKET, ',': TokenType.COMMA,
                ';': TokenType.SEMICOLON, '។': TokenType.SEMICOLON, '៖': TokenType.COLON, ':': TokenType.COLON
            };

            if (singleOps[ch]) {
                this.advance();
                tokens.push(new Token(singleOps[ch], ch, startLine, startCol));
                continue;
            }

            if (this.isIdentStart(ch)) {
                let ident = '';
                while (this.isIdentPart(this.peek())) {
                    ident += this.advance();
                }
                if (KEYWORDS[ident]) {
                    tokens.push(new Token(KEYWORDS[ident], ident, startLine, startCol));
                } else {
                    tokens.push(new Token(TokenType.IDENTIFIER, ident, startLine, startCol));
                }
                continue;
            }

            const bad = this.advance();
            throw new Error(`អក្សរមិនស្គាល់ '${bad}' [បន្ទាត់ ${startLine}, ជួរ ${startCol}]`);
        }

        tokens.push(new Token(TokenType.EOF, null, this.line, this.column));
        return tokens;
    }
}

// AST Nodes
class VarDeclNode { constructor(name, value) { this.name = name; this.value = value; } }
class PrintNode { constructor(expressions) { this.expressions = expressions; } }
class IfNode { constructor(cond, thenB, elseB) { this.cond = cond; this.thenB = thenB; this.elseB = elseB; } }
class WhileNode { constructor(cond, body) { this.cond = cond; this.body = body; } }
class ForNode { constructor(init, cond, inc, body) { this.init = init; this.cond = cond; this.inc = inc; this.body = body; } }
class FunctionDeclNode { constructor(name, params, body) { this.name = name; this.params = params; this.body = body; } }
class ClassDeclNode { constructor(name, parent, methods) { this.name = name; this.parent = parent; this.methods = methods; } }
class ReturnNode { constructor(val) { this.val = val; } }
class BlockNode { constructor(statements) { this.statements = statements; } }
class ExprStmtNode { constructor(expr) { this.expr = expr; } }

class NumberNode { constructor(val) { this.val = val; } }
class StringNode { constructor(val) { this.val = val; } }
class BoolNode { constructor(val) { this.val = val; } }
class NullNode {}
class IdentifierNode { constructor(name) { this.name = name; } }
class ThisNode {}
class ArrayNode { constructor(elements) { this.elements = elements; } }
class ObjectNode { constructor(pairs) { this.pairs = pairs; } }
class UnaryOpNode { constructor(op, operand) { this.op = op; this.operand = operand; } }
class BinaryOpNode { constructor(left, op, right) { this.left = left; this.op = op; this.right = right; } }
class AssignmentNode { constructor(name, value) { this.name = name; this.value = value; } }
class MemberAccessNode { constructor(target, member) { this.target = target; this.member = member; } }
class MemberAssignmentNode { constructor(target, member, value) { this.target = target; this.member = member; this.value = value; } }
class IndexAccessNode { constructor(target, index) { this.target = target; this.index = index; } }
class IndexAssignmentNode { constructor(target, index, value) { this.target = target; this.index = index; this.value = value; } }
class FunctionCallNode { constructor(callee, args) { this.callee = callee; this.args = args; } }
class NewNode { constructor(className, args) { this.className = className; this.args = args; } }

class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.current = 0;
    }

    peek(offset = 0) {
        const pos = this.current + offset;
        return pos >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[pos];
    }

    match(...types) {
        if (types.includes(this.peek().type)) {
            this.advance();
            return true;
        }
        return false;
    }

    check(type) {
        return this.peek().type === type;
    }

    advance() {
        const tok = this.tokens[this.current];
        if (this.current < this.tokens.length - 1) this.current++;
        return tok;
    }

    consume(type, message) {
        if (this.check(type)) return this.advance();
        const tok = this.peek();
        throw new Error(`${message} (បានជួប '${tok.value}' នៅបន្ទាត់ ${tok.line})`);
    }

    parse() {
        const stmts = [];
        while (!this.check(TokenType.EOF)) {
            const s = this.statement();
            if (s) stmts.push(s);
        }
        return stmts;
    }

    statement() {
        while (this.match(TokenType.SEMICOLON)) {}
        if (this.check(TokenType.EOF)) return null;

        if (this.check(TokenType.LET)) return this.varDecl();
        if (this.check(TokenType.PRINT)) return this.printStmt();
        if (this.check(TokenType.IF)) return this.ifStmt();
        if (this.check(TokenType.WHILE)) return this.whileStmt();
        if (this.check(TokenType.FOR)) return this.forStmt();
        if (this.check(TokenType.FUNCTION) || this.check(TokenType.METHOD)) return this.funcDecl();
        if (this.check(TokenType.CLASS)) return this.classDecl();
        if (this.check(TokenType.RETURN)) return this.returnStmt();
        if (this.check(TokenType.LBRACE)) return this.blockStmt();

        return this.exprStmt();
    }

    varDecl() {
        this.consume(TokenType.LET, "ត្រូវមាន 'តាំង'");
        const name = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះអថេរ").value;
        let value = null;
        if (this.match(TokenType.ASSIGN)) {
            value = this.expression();
        }
        this.match(TokenType.SEMICOLON);
        return new VarDeclNode(name, value);
    }

    printStmt() {
        this.consume(TokenType.PRINT, "ត្រូវមាន 'បង្ហាញ'");
        const exprs = [];
        if (this.match(TokenType.LPAREN)) {
            if (!this.check(TokenType.RPAREN)) {
                exprs.push(this.expression());
                while (this.match(TokenType.COMMA)) {
                    exprs.push(this.expression());
                }
            }
            this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
        } else {
            exprs.push(this.expression());
            while (this.match(TokenType.COMMA)) {
                exprs.push(this.expression());
            }
        }
        this.match(TokenType.SEMICOLON);
        return new PrintNode(exprs);
    }

    ifStmt() {
        this.consume(TokenType.IF, "ត្រូវមាន 'បើ'");
        const hasParen = this.match(TokenType.LPAREN);
        const cond = this.expression();
        if (hasParen) this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
        const thenB = this.blockStmt();
        let elseB = null;
        if (this.check(TokenType.ELSE_IF)) {
            elseB = this.elseIfChain();
        } else if (this.match(TokenType.ELSE)) {
            elseB = this.blockStmt();
        }
        return new IfNode(cond, thenB, elseB);
    }

    elseIfChain() {
        this.consume(TokenType.ELSE_IF, "ត្រូវមាន 'ឬបើ'");
        const hasParen = this.match(TokenType.LPAREN);
        const cond = this.expression();
        if (hasParen) this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
        const thenB = this.blockStmt();
        let elseB = null;
        if (this.check(TokenType.ELSE_IF)) {
            elseB = this.elseIfChain();
        } else if (this.match(TokenType.ELSE)) {
            elseB = this.blockStmt();
        }
        return new IfNode(cond, thenB, elseB);
    }

    whileStmt() {
        this.consume(TokenType.WHILE, "ត្រូវមាន 'ខណៈ'");
        const hasParen = this.match(TokenType.LPAREN);
        const cond = this.expression();
        if (hasParen) this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
        const body = this.blockStmt();
        return new WhileNode(cond, body);
    }

    forStmt() {
        this.consume(TokenType.FOR, "ត្រូវមាន 'សម្រាប់'");
        this.consume(TokenType.LPAREN, "ត្រូវមាន '('");
        let init = null;
        if (!this.check(TokenType.SEMICOLON)) {
            init = this.check(TokenType.LET) ? this.varDecl() : this.exprStmt();
        } else {
            this.advance();
        }
        let cond = null;
        if (!this.check(TokenType.SEMICOLON)) cond = this.expression();
        this.consume(TokenType.SEMICOLON, "ត្រូវមាន ';'");
        let inc = null;
        if (!this.check(TokenType.RPAREN)) inc = this.expression();
        this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
        const body = this.blockStmt();
        return new ForNode(init, cond, inc, body);
    }

    funcDecl() {
        this.advance(); // consume FUNCTION or METHOD
        const name = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះអនុគមន៍").value;
        this.consume(TokenType.LPAREN, "ត្រូវមាន '('");
        const params = [];
        if (!this.check(TokenType.RPAREN)) {
            params.push(this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ").value);
            while (this.match(TokenType.COMMA)) {
                params.push(this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ").value);
            }
        }
        this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
        const body = this.blockStmt();
        return new FunctionDeclNode(name, params, body);
    }

    classDecl() {
        this.consume(TokenType.CLASS, "ត្រូវមាន 'ថ្នាក់'");
        const name = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះថ្នាក់").value;
        let parent = null;
        if (this.match(TokenType.EXTENDS)) {
            parent = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះថ្នាក់មេ").value;
        }
        this.consume(TokenType.LBRACE, "ត្រូវមាន '{'");
        const methods = [];
        while (!this.check(TokenType.RBRACE) && !this.check(TokenType.EOF)) {
            let mName;
            if (this.match(TokenType.METHOD, TokenType.FUNCTION)) {
                mName = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះវិធី").value;
            } else if (this.check(TokenType.IDENTIFIER)) {
                mName = this.advance().value;
            } else {
                throw new Error(`វិធីមិនត្រឹមត្រូវក្នុងថ្នាក់ '${this.peek().value}'`);
            }
            this.consume(TokenType.LPAREN, "ត្រូវមាន '('");
            const params = [];
            if (!this.check(TokenType.RPAREN)) {
                params.push(this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ").value);
                while (this.match(TokenType.COMMA)) {
                    params.push(this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះប៉ារ៉ាម៉ែត្រ").value);
                }
            }
            this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
            const body = this.blockStmt();
            methods.push(new FunctionDeclNode(mName, params, body));
        }
        this.consume(TokenType.RBRACE, "ត្រូវមាន '}'");
        return new ClassDeclNode(name, parent, methods);
    }

    returnStmt() {
        this.consume(TokenType.RETURN, "ត្រូវមាន 'ត្រឡប់'");
        let val = null;
        if (!this.check(TokenType.SEMICOLON) && !this.check(TokenType.RBRACE) && !this.check(TokenType.EOF)) {
            val = this.expression();
        }
        this.match(TokenType.SEMICOLON);
        return new ReturnNode(val);
    }

    blockStmt() {
        this.consume(TokenType.LBRACE, "ត្រូវមាន '{'");
        const stmts = [];
        while (!this.check(TokenType.RBRACE) && !this.check(TokenType.EOF)) {
            const s = this.statement();
            if (s) stmts.push(s);
        }
        this.consume(TokenType.RBRACE, "ត្រូវមាន '}'");
        return new BlockNode(stmts);
    }

    exprStmt() {
        const expr = this.expression();
        this.match(TokenType.SEMICOLON);
        return new ExprStmtNode(expr);
    }

    expression() { return this.assignment(); }

    assignment() {
        const expr = this.logicalOr();
        if (this.match(TokenType.ASSIGN)) {
            const val = this.assignment();
            if (expr instanceof IdentifierNode) return new AssignmentNode(expr.name, val);
            if (expr instanceof MemberAccessNode) return new MemberAssignmentNode(expr.target, expr.member, val);
            if (expr instanceof IndexAccessNode) return new IndexAssignmentNode(expr.target, expr.index, val);
            throw new Error("ការកំណត់តម្លៃមិនត្រឹមត្រូវ");
        }
        return expr;
    }

    logicalOr() {
        let expr = this.logicalAnd();
        while (this.match(TokenType.OR)) {
            expr = new BinaryOpNode(expr, 'ឬ', this.logicalAnd());
        }
        return expr;
    }

    logicalAnd() {
        let expr = this.equality();
        while (this.match(TokenType.AND)) {
            expr = new BinaryOpNode(expr, 'និង', this.equality());
        }
        return expr;
    }

    equality() {
        let expr = this.comparison();
        while (this.check(TokenType.EQ) || this.check(TokenType.NEQ)) {
            const op = this.advance().value;
            expr = new BinaryOpNode(expr, op, this.comparison());
        }
        return expr;
    }

    comparison() {
        let expr = this.term();
        while ([TokenType.LT, TokenType.GT, TokenType.LTE, TokenType.GTE].includes(this.peek().type)) {
            const op = this.advance().value;
            expr = new BinaryOpNode(expr, op, this.term());
        }
        return expr;
    }

    term() {
        let expr = this.factor();
        while ([TokenType.PLUS, TokenType.MINUS].includes(this.peek().type)) {
            const op = this.advance().value;
            expr = new BinaryOpNode(expr, op, this.factor());
        }
        return expr;
    }

    factor() {
        let expr = this.unary();
        while ([TokenType.STAR, TokenType.SLASH, TokenType.MODULO].includes(this.peek().type)) {
            const op = this.advance().value;
            expr = new BinaryOpNode(expr, op, this.unary());
        }
        return expr;
    }

    unary() {
        if (this.check(TokenType.NOT) || this.check(TokenType.MINUS)) {
            const op = this.advance().value;
            return new UnaryOpNode(op, this.unary());
        }
        return this.callAndMember();
    }

    callAndMember() {
        let expr = this.primary();
        while (true) {
            if (this.match(TokenType.LPAREN)) {
                const args = [];
                if (!this.check(TokenType.RPAREN)) {
                    args.push(this.expression());
                    while (this.match(TokenType.COMMA)) args.push(this.expression());
                }
                this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
                expr = new FunctionCallNode(expr, args);
            } else if (this.match(TokenType.DOT)) {
                const member = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះសមាជិក").value;
                expr = new MemberAccessNode(expr, member);
            } else if (this.match(TokenType.LBRACKET)) {
                const idx = this.expression();
                this.consume(TokenType.RBRACKET, "ត្រូវមាន ']'");
                expr = new IndexAccessNode(expr, idx);
            } else {
                break;
            }
        }
        return expr;
    }

    primary() {
        if (this.match(TokenType.NUMBER)) return new NumberNode(this.tokens[this.current - 1].value);
        if (this.match(TokenType.STRING)) return new StringNode(this.tokens[this.current - 1].value);
        if (this.match(TokenType.TRUE)) return new BoolNode(true);
        if (this.match(TokenType.FALSE)) return new BoolNode(false);
        if (this.match(TokenType.NULL)) return new NullNode();
        if (this.match(TokenType.THIS, TokenType.SELF)) return new ThisNode();
        if (this.match(TokenType.IDENTIFIER)) return new IdentifierNode(this.tokens[this.current - 1].value);

        if (this.match(TokenType.NEW)) {
            const cName = this.consume(TokenType.IDENTIFIER, "ត្រូវមានឈ្មោះថ្នាក់").value;
            this.consume(TokenType.LPAREN, "ត្រូវមាន '('");
            const args = [];
            if (!this.check(TokenType.RPAREN)) {
                args.push(this.expression());
                while (this.match(TokenType.COMMA)) args.push(this.expression());
            }
            this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
            return new NewNode(cName, args);
        }

        if (this.match(TokenType.LPAREN)) {
            const expr = this.expression();
            this.consume(TokenType.RPAREN, "ត្រូវមាន ')'");
            return expr;
        }

        if (this.match(TokenType.LBRACKET)) {
            const elements = [];
            if (!this.check(TokenType.RBRACKET)) {
                elements.push(this.expression());
                while (this.match(TokenType.COMMA)) elements.push(this.expression());
            }
            this.consume(TokenType.RBRACKET, "ត្រូវមាន ']'");
            return new ArrayNode(elements);
        }

        if (this.match(TokenType.LBRACE)) {
            const pairs = [];
            if (!this.check(TokenType.RBRACE)) {
                let k = this.primary();
                let kn = (k instanceof StringNode) ? k.val : (k.name || String(k));
                this.consume(TokenType.COLON, "ត្រូវមាន ':'");
                let v = this.expression();
                pairs.push([kn, v]);
                while (this.match(TokenType.COMMA)) {
                    k = this.primary();
                    kn = (k instanceof StringNode) ? k.val : (k.name || String(k));
                    this.consume(TokenType.COLON, "ត្រូវមាន ':'");
                    v = this.expression();
                    pairs.push([kn, v]);
                }
            }
            this.consume(TokenType.RBRACE, "ត្រូវមាន '}'");
            return new ObjectNode(pairs);
        }

        throw new Error(`កំហុសវេយ្យាករណ៍ក្បែរ '${this.peek().value}' [បន្ទាត់ ${this.peek().line}]`);
    }
}

// Runtime Environment
class Environment {
    constructor(parent = null) {
        this.values = {};
        this.parent = parent;
    }
    define(name, value) { this.values[name] = value; }
    get(name) {
        if (name in this.values) return this.values[name];
        if (this.parent) return this.parent.get(name);
        throw new Error(`មិនស្គាល់អថេរ ឬអនុគមន៍ '${name}'`);
    }
    assign(name, value) {
        if (name in this.values) { this.values[name] = value; return; }
        if (this.parent) { this.parent.assign(name, value); return; }
        throw new Error(`អថេរមិនទាន់បានប្រកាស '${name}'`);
    }
}

class ReturnSignal { constructor(val) { this.value = val; } }

class KhmerFunction {
    constructor(name, params, body, closure) {
        this.name = name; this.params = params; this.body = body; this.closure = closure;
    }
    bind(instance) {
        const bound = new Environment(this.closure);
        bound.define('នេះ', instance);
        bound.define('ខ្លួនវា', instance);
        return new KhmerFunction(this.name, this.params, this.body, bound);
    }
    call(interp, args) {
        if (args.length !== this.params.length) {
            throw new Error(`វិធី '${this.name}' ត្រូវការ ${this.params.length} ប៉ារ៉ាម៉ែត្រ`);
        }
        const local = new Environment(this.closure);
        for (let i = 0; i < this.params.length; i++) local.define(this.params[i], args[i]);
        try {
            interp.executeBlock(this.body.statements, local);
        } catch (e) {
            if (e instanceof ReturnSignal) return e.value;
            throw e;
        }
        return null;
    }
}

class KhmerClass {
    constructor(name, parent, methods) {
        this.name = name; this.parent = parent; this.methods = methods;
    }
    findMethod(name) {
        if (this.methods[name]) return this.methods[name];
        if (this.parent) return this.parent.findMethod(name);
        return null;
    }
    instantiate(interp, args) {
        const inst = new KhmerInstance(this);
        const init = this.findMethod('បង្កើត');
        if (init) {
            init.bind(inst).call(interp, args);
        } else if (args.length > 0) {
            throw new Error(`ថ្នាក់ '${this.name}' គ្មាន Constructor`);
        }
        return inst;
    }
}

class KhmerInstance {
    constructor(khmerClass) {
        this.khmerClass = khmerClass;
        this.fields = {};
    }
    get(name) {
        if (name in this.fields) return this.fields[name];
        const m = this.khmerClass.findMethod(name);
        if (m) return m.bind(this);
        throw new Error(`មិនស្គាល់សមាជិក '${name}' ក្នុងថ្នាក់ '${this.khmerClass.name}'`);
    }
    set(name, val) { this.fields[name] = val; }
}

class Interpreter {
    constructor(stdoutWrite) {
        this.stdoutWrite = stdoutWrite || console.log;
        this.globalEnv = new Environment();
        this.currentEnv = this.globalEnv;

        // Built-ins
        this.globalEnv.define('បង្ហាញ', (...args) => {
            const str = args.map(formatKhmerValue).join(' ');
            this.stdoutWrite(str + '\n');
            return null;
        });
        this.globalEnv.define('print', this.globalEnv.get('បង្ហាញ'));
        this.globalEnv.define('ប្រវែង', (arg) => {
            if (typeof arg === 'string' || Array.isArray(arg)) return arg.length;
            if (typeof arg === 'object' && arg !== null) return Object.keys(arg).length;
            throw new Error("'ប្រវែង' ប្រើបានតែជាមួយ string, array ឬ object");
        });
        this.globalEnv.define('len', this.globalEnv.get('ប្រវែង'));
        this.globalEnv.define('ប្រភេទ', (arg) => {
            if (arg === null || arg === undefined) return 'ទទេ';
            if (typeof arg === 'boolean') return 'តក្កវិទ្យា';
            if (typeof arg === 'number') return 'លេខ';
            if (typeof arg === 'string') return 'អក្សរ';
            if (Array.isArray(arg)) return 'បញ្ជី';
            if (arg instanceof KhmerInstance) return `ថ្នាក់(${arg.khmerClass.name})`;
            if (arg instanceof KhmerClass) return `ថ្នាក់(${arg.name})`;
            if (typeof arg === 'object') return 'វត្ថុ';
            return 'អនុគមន៍';
        });
        this.globalEnv.define('type', this.globalEnv.get('ប្រភេទ'));
        this.globalEnv.define('បន្ថែម', (arr, elem) => {
            if (Array.isArray(arr)) { arr.push(elem); return arr; }
            throw new Error("'បន្ថែម' ប្រើបានតែជាមួយ Array");
        });
        this.globalEnv.define('append', this.globalEnv.get('បន្ថែម'));
    }

    interpret(statements) {
        let result = null;
        for (const s of statements) {
            result = this.execute(s, this.currentEnv);
        }
        return result;
    }

    execute(node, env) {
        if (!node) return null;
        if (node instanceof NumberNode) return node.val;
        if (node instanceof StringNode) return node.val;
        if (node instanceof BoolNode) return node.val;
        if (node instanceof NullNode) return null;
        if (node instanceof ArrayNode) return node.elements.map(e => this.execute(e, env));
        if (node instanceof ObjectNode) {
            const obj = {};
            for (const [k, v] of node.pairs) obj[k] = this.execute(v, env);
            return obj;
        }
        if (node instanceof IdentifierNode) return env.get(node.name);
        if (node instanceof ThisNode) {
            try { return env.get('នេះ'); }
            catch { return env.get('ខ្លួនវា'); }
        }
        if (node instanceof UnaryOpNode) {
            const operand = this.execute(node.operand, env);
            if (node.op === '!' || node.op === 'មិន') return !operand;
            if (node.op === '-') return -operand;
            throw new Error(`Unary operator មិនស្គាល់ '${node.op}'`);
        }
        if (node instanceof BinaryOpNode) {
            const left = this.execute(node.left, env);
            if (node.op === 'និង' || node.op === '&&') {
                if (!left) return left;
                return this.execute(node.right, env);
            }
            if (node.op === 'ឬ' || node.op === '||') {
                if (left) return left;
                return this.execute(node.right, env);
            }
            const right = this.execute(node.right, env);
            if (node.op === '==') return left === right;
            if (node.op === '!=') return left !== right;
            if (node.op === '+') {
                if (typeof left === 'string' || typeof right === 'string') {
                    return formatKhmerValue(left) + formatKhmerValue(right);
                }
                return left + right;
            }
            if (node.op === '-') return left - right;
            if (node.op === '*') return left * right;
            if (node.op === '/') {
                if (right === 0) throw new Error("មិនអាចចែកនឹងសូន្យបានទេ");
                return left / right;
            }
            if (node.op === '%') return left % right;
            if (node.op === '<') return left < right;
            if (node.op === '>') return left > right;
            if (node.op === '<=') return left <= right;
            if (node.op === '>=') return left >= right;
        }
        if (node instanceof VarDeclNode) {
            const val = node.value ? this.execute(node.value, env) : null;
            env.define(node.name, val);
            return val;
        }
        if (node instanceof AssignmentNode) {
            const val = this.execute(node.value, env);
            try {
                env.assign(node.name, val);
            } catch (err) {
                try {
                    const thisObj = env.get('នេះ');
                    if (thisObj instanceof KhmerInstance) { thisObj.set(node.name, val); return val; }
                } catch {}
                throw err;
            }
            return val;
        }
        if (node instanceof MemberAccessNode) {
            const t = this.execute(node.target, env);
            if (t instanceof KhmerInstance) return t.get(node.member);
            if (typeof t === 'object' && t !== null) return t[node.member];
            throw new Error(`មិនអាចចូលប្រើ '${node.member}'`);
        }
        if (node instanceof MemberAssignmentNode) {
            const t = this.execute(node.target, env);
            const val = this.execute(node.value, env);
            if (t instanceof KhmerInstance) { t.set(node.member, val); return val; }
            if (typeof t === 'object' && t !== null) { t[node.member] = val; return val; }
            throw new Error(`មិនអាចកំណត់ '${node.member}'`);
        }
        if (node instanceof IndexAccessNode) {
            const t = this.execute(node.target, env);
            const idx = this.execute(node.index, env);
            if (Array.isArray(t) || typeof t === 'string') return t[idx];
            if (typeof t === 'object' && t !== null) return t[idx];
            throw new Error("មិនអាចទាញយក index បានទេ");
        }
        if (node instanceof IndexAssignmentNode) {
            const t = this.execute(node.target, env);
            const idx = this.execute(node.index, env);
            const val = this.execute(node.value, env);
            if (Array.isArray(t) || (typeof t === 'object' && t !== null)) {
                t[idx] = val; return val;
            }
            throw new Error("មិនអាចកំណត់ index បានទេ");
        }
        if (node instanceof FunctionCallNode) {
            const callee = this.execute(node.callee, env);
            const args = node.args.map(a => this.execute(a, env));
            if (callee instanceof KhmerClass) return callee.instantiate(this, args);
            if (callee instanceof KhmerFunction) return callee.call(this, args);
            if (typeof callee === 'function') return callee(...args);
            throw new Error("មិនមែនជាអនុគមន៍ ឬថ្នាក់ទេ");
        }
        if (node instanceof NewNode) {
            const cls = env.get(node.className);
            if (!(cls instanceof KhmerClass)) throw new Error(`'${node.className}' មិនមែនជាថ្នាក់ទេ`);
            const args = node.args.map(a => this.execute(a, env));
            return cls.instantiate(this, args);
        }
        if (node instanceof ClassDeclNode) {
            let parent = null;
            if (node.parent) {
                parent = env.get(node.parent);
                if (!(parent instanceof KhmerClass)) throw new Error(`ថ្នាក់មេ '${node.parent}' មិនត្រឹមត្រូវ`);
            }
            const methods = {};
            for (const m of node.methods) {
                methods[m.name] = new KhmerFunction(m.name, m.params, m.body, env);
            }
            const cls = new KhmerClass(node.name, parent, methods);
            env.define(node.name, cls);
            return cls;
        }
        if (node instanceof PrintNode) {
            const vals = node.expressions.map(e => this.execute(e, env));
            const fn = env.get('បង្ហាញ');
            return fn(...vals);
        }
        if (node instanceof BlockNode) {
            const bEnv = new Environment(env);
            return this.executeBlock(node.statements, bEnv);
        }
        if (node instanceof IfNode) {
            const cond = this.execute(node.cond, env);
            if (cond) return this.execute(node.thenB, env);
            if (node.elseB) return this.execute(node.elseB, env);
            return null;
        }
        if (node instanceof WhileNode) {
            let res = null;
            while (this.execute(node.cond, env)) {
                res = this.execute(node.body, env);
            }
            return res;
        }
        if (node instanceof ForNode) {
            const fEnv = new Environment(env);
            if (node.init) this.execute(node.init, fEnv);
            let res = null;
            while (true) {
                if (node.cond && !this.execute(node.cond, fEnv)) break;
                res = this.execute(node.body, fEnv);
                if (node.inc) this.execute(node.inc, fEnv);
            }
            return res;
        }
        if (node instanceof FunctionDeclNode) {
            const fn = new KhmerFunction(node.name, node.params, node.body, env);
            env.define(node.name, fn);
            return fn;
        }
        if (node instanceof ReturnNode) {
            const val = node.val ? this.execute(node.val, env) : null;
            throw new ReturnSignal(val);
        }
        if (node instanceof ExprStmtNode) {
            return this.execute(node.expr, env);
        }
        return null;
    }

    executeBlock(statements, env) {
        const prev = this.currentEnv;
        this.currentEnv = env;
        try {
            let res = null;
            for (const s of statements) res = this.execute(s, env);
            return res;
        } finally {
            this.currentEnv = prev;
        }
    }
}

// Global runKhmerCode runner
window.runKhmerCode = function(source) {
    let output = '';
    const t0 = performance.now();
    try {
        const lexer = new Lexer(source);
        const tokens = lexer.tokenize();
        const parser = new Parser(tokens);
        const ast = parser.parse();
        const interp = new Interpreter(text => { output += text; });
        interp.interpret(ast);
        const t1 = performance.now();
        return {
            status: 'success',
            stdout: output,
            error: null,
            duration: Math.round(t1 - t0)
        };
    } catch (e) {
        const t1 = performance.now();
        return {
            status: 'error',
            stdout: output,
            error: 'កំហុស/Error: ' + e.message,
            duration: Math.round(t1 - t0)
        };
    }
};
