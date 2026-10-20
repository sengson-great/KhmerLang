import unittest
from khmer_lang.lexer import Lexer
from khmer_lang.parser import Parser
from khmer_lang.ast_nodes import VarDeclNode, PrintNode, IfNode, BinaryOpNode

class TestParser(unittest.TestCase):
    def test_var_decl(self):
        source = "តាំង x = ១០;"
        tokens = Lexer(source).tokenize()
        ast = Parser(tokens).parse()
        self.assertEqual(len(ast), 1)
        self.assertTrue(isinstance(ast[0], VarDeclNode))
        self.assertEqual(ast[0].name, "x")
        self.assertEqual(ast[0].value.value, 10)

    def test_print(self):
        source = "បង្ហាញ(\"ជម្រាបសួរ\", ១២៣)"
        tokens = Lexer(source).tokenize()
        ast = Parser(tokens).parse()
        self.assertEqual(len(ast), 1)
        self.assertTrue(isinstance(ast[0], PrintNode))
        self.assertEqual(len(ast[0].expressions), 2)

    def test_if_condition(self):
        source = "បើ (x > ៥) { បង្ហាញ(x) }"
        tokens = Lexer(source).tokenize()
        ast = Parser(tokens).parse()
        self.assertEqual(len(ast), 1)
        self.assertTrue(isinstance(ast[0], IfNode))
        self.assertTrue(isinstance(ast[0].condition, BinaryOpNode))

if __name__ == "__main__":
    unittest.main()
