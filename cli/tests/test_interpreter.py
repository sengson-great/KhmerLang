import unittest
from khmer_lang.runner import run_code

class TestInterpreter(unittest.TestCase):
    def test_run_hello(self):
        code = 'តាំង ឈ្មោះ = "សុខ"; បង្ហាញ("ជម្រាបសួរ", ឈ្មោះ);'
        res = run_code(code)
        self.assertEqual(res["status"], "success")
        self.assertEqual(res["stdout"].strip(), "ជម្រាបសួរ សុខ")

    def test_khmer_math(self):
        code = 'តាំង a = ១០; តាំង b = ២០; បង្ហាញ(a + b);'
        res = run_code(code)
        self.assertEqual(res["status"], "success")
        self.assertEqual(res["stdout"].strip(), "៣០")

    def test_functions(self):
        code = '''
        អនុគមន៍ គុណ(x, y) {
            ត្រឡប់ x * y
        }
        បង្ហាញ(គុណ(៥, ៦))
        '''
        res = run_code(code)
        self.assertEqual(res["status"], "success")
        self.assertEqual(res["stdout"].strip(), "៣០")

    def test_syntax_error(self):
        code = 'តាំង = ១០;'
        res = run_code(code)
        self.assertEqual(res["status"], "error")
        self.assertIn("កំហុស", res["error"])

if __name__ == "__main__":
    unittest.main()
