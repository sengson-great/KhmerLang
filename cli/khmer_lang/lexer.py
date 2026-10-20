from typing import List
from khmer_lang.tokens import TokenType, Token, KEYWORDS, KHMER_DIGITS
from khmer_lang.errors import LexerError


class Lexer:
    def __init__(self, source: str):
        self.source = source
        self.position = 0
        self.line = 1
        self.column = 1
        self.length = len(source)

    def _peek(self, offset: int = 0) -> str:
        pos = self.position + offset
        if pos >= self.length:
            return '\0'
        return self.source[pos]

    def _advance(self) -> str:
        ch = self._peek()
        self.position += 1
        if ch == '\n':
            self.line += 1
            self.column = 1
        else:
            self.column += 1
        return ch

    def _is_khmer_digit(self, ch: str) -> bool:
        return ch in KHMER_DIGITS

    def _is_digit(self, ch: str) -> bool:
        return ch.isdigit() or self._is_khmer_digit(ch)

    def _is_ident_start(self, ch: str) -> bool:
        if ch == '_' or ch.isalpha():
            return True
        code = ord(ch)
        # Khmer script ranges: Khmer (\u1780-\u17FF), Khmer Symbols (\u19E0-\u19FF)
        return (0x1780 <= code <= 0x17FF) or (0x19E0 <= code <= 0x19FF)

    def _is_ident_part(self, ch: str) -> bool:
        return self._is_ident_start(ch) or self._is_digit(ch)

    def tokenize(self) -> List[Token]:
        tokens: List[Token] = []

        while self.position < self.length:
            ch = self._peek()

            # Whitespace and Khmer Zero-Width Spaces (\u200b, \u00a0, \ufeff)
            if ch in ' \t\r\n\u200b\u00a0\ufeff':
                self._advance()
                continue

            # Comments
            if ch == '#' or (ch == '/' and self._peek(1) == '/'):
                while self._peek() not in ('\n', '\0'):
                    self._advance()
                continue

            if ch == '/' and self._peek(1) == '*':
                self._advance() # /
                self._advance() # *
                while not (self._peek() == '*' and self._peek(1) == '/') and self._peek() != '\0':
                    self._advance()
                if self._peek() != '\0':
                    self._advance() # *
                    self._advance() # /
                continue

            start_line = self.line
            start_col = self.column

            # Numbers (Khmer or ASCII digits)
            if self._is_digit(ch):
                num_str = ""
                has_dot = False

                while self._is_digit(self._peek()) or (self._peek() == '.' and not has_dot and self._is_digit(self._peek(1))):
                    c = self._advance()
                    if c == '.':
                        has_dot = True
                    num_str += c

                # Convert Khmer digits to ASCII digits
                normalized = num_str.translate(str.maketrans(KHMER_DIGITS))
                val = float(normalized) if has_dot else int(normalized)
                tokens.append(Token(TokenType.NUMBER, val, start_line, start_col))
                continue

            # Strings (support ASCII quotes and Unicode quotes “ ” ‘ ’)
            if ch in ('"', "'", '“', '”', '‘', '’'):
                open_quote = self._advance()
                close_quotes = ('"', "'", '“', '”', '‘', '’') if open_quote in ('“', '”', '‘', '’') else (open_quote,)
                str_val = ""
                while self._peek() not in close_quotes and self._peek() != '\0':
                    c = self._advance()
                    if c == '\\':
                        nxt = self._advance()
                        if nxt == 'n': str_val += '\n'
                        elif nxt == 't': str_val += '\t'
                        elif nxt == '\\': str_val += '\\'
                        elif nxt in close_quotes: str_val += nxt
                        else: str_val += nxt
                    else:
                        str_val += c

                if self._peek() == '\0':
                    raise LexerError("String មិនបានបិទ / Unclosed string literal", start_line, start_col)
                self._advance() # close quote
                tokens.append(Token(TokenType.STRING, str_val, start_line, start_col))
                continue

            # Multi-character Operators
            if ch == '=' and self._peek(1) == '=':
                self._advance(); self._advance()
                tokens.append(Token(TokenType.EQ, "==", start_line, start_col))
                continue
            if ch == '!' and self._peek(1) == '=':
                self._advance(); self._advance()
                tokens.append(Token(TokenType.NEQ, "!=", start_line, start_col))
                continue
            if ch == '<' and self._peek(1) == '=':
                self._advance(); self._advance()
                tokens.append(Token(TokenType.LTE, "<=", start_line, start_col))
                continue
            if ch == '>' and self._peek(1) == '=':
                self._advance(); self._advance()
                tokens.append(Token(TokenType.GTE, ">=", start_line, start_col))
                continue
            if ch == '&' and self._peek(1) == '&':
                self._advance(); self._advance()
                tokens.append(Token(TokenType.AND, "&&", start_line, start_col))
                continue
            if ch == '|' and self._peek(1) == '|':
                self._advance(); self._advance()
                tokens.append(Token(TokenType.OR, "||", start_line, start_col))
                continue

            # Single-character Operators & Delimiters (including fullwidth dot ． and Khmer Khan ។ / ៖)
            single_ops = {
                '+': TokenType.PLUS,
                '-': TokenType.MINUS,
                '*': TokenType.STAR,
                '/': TokenType.SLASH,
                '%': TokenType.MODULO,
                '=': TokenType.ASSIGN,
                '<': TokenType.LT,
                '>': TokenType.GT,
                '!': TokenType.NOT,
                '.': TokenType.DOT,
                '．': TokenType.DOT,       # Fullwidth dot
                '(': TokenType.LPAREN,
                ')': TokenType.RPAREN,
                '{': TokenType.LBRACE,
                '}': TokenType.RBRACE,
                '[': TokenType.LBRACKET,
                ']': TokenType.RBRACKET,
                ',': TokenType.COMMA,
                ';': TokenType.SEMICOLON,
                '៖': TokenType.COLON,       # Khmer Colon
                'colon': TokenType.COLON,
                ':': TokenType.COLON,
                '។': TokenType.SEMICOLON,   # Khmer Khan as statement delimiter
            }
            if ch in single_ops:
                self._advance()
                tokens.append(Token(single_ops[ch], ch, start_line, start_col))
                continue

            # Identifiers and Keywords
            if self._is_ident_start(ch):
                ident = ""
                while self._is_ident_part(self._peek()):
                    ident += self._advance()

                if ident in KEYWORDS:
                    tokens.append(Token(KEYWORDS[ident], ident, start_line, start_col))
                else:
                    tokens.append(Token(TokenType.IDENTIFIER, ident, start_line, start_col))
                continue

            # Unknown Character
            bad_char = self._advance()
            raise LexerError(f"អក្សរ/សញ្ញាមិនស្គាល់ '{bad_char}' (U+{ord(bad_char):04X}) / Unexpected character '{bad_char}'", start_line, start_col)

        tokens.append(Token(TokenType.EOF, None, self.line, self.column))
        return tokens
