import unittest
from khmer_lang.lexer import Lexer
from khmer_lang.tokens import TokenType

class TestLexer(unittest.TestCase):
    def test_khmer_keywords(self):
        source = "តាំង បង្ហាញ បើ ឬបើ ផ្សេងទៀត ខណៈ សម្រាប់ អនុគមន៍ ត្រឡប់ ពិត មិនពិត ទទេ និង ឬ មិន"
        lexer = Lexer(source)
        tokens = lexer.tokenize()
        expected = [
            TokenType.LET, TokenType.PRINT, TokenType.IF, TokenType.ELSE_IF,
            TokenType.ELSE, TokenType.WHILE, TokenType.FOR, TokenType.FUNCTION,
            TokenType.RETURN, TokenType.TRUE, TokenType.FALSE, TokenType.NULL,
            TokenType.AND, TokenType.OR, TokenType.NOT, TokenType.EOF
        ]
        self.assertEqual([t.type for t in tokens], expected)

    def test_khmer_numerals(self):
        source = "១២៣ ៤៥.៦៧"
        lexer = Lexer(source)
        tokens = lexer.tokenize()
        self.assertEqual(tokens[0].value, 123)
        self.assertEqual(tokens[1].value, 45.67)

    def test_operators_and_identifiers(self):
        source = "តាំង ចំនួន = ១០ + ៥;"
        lexer = Lexer(source)
        tokens = lexer.tokenize()
        self.assertEqual(tokens[0].type, TokenType.LET)
        self.assertEqual(tokens[1].value, "ចំនួន")
        self.assertEqual(tokens[2].type, TokenType.ASSIGN)
        self.assertEqual(tokens[3].value, 10)
        self.assertEqual(tokens[4].type, TokenType.PLUS)
        self.assertEqual(tokens[5].value, 5)

if __name__ == "__main__":
    unittest.main()
