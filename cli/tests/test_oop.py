import unittest
from khmer_lang.runner import run_code

class TestOOP(unittest.TestCase):
    def test_class_instantiation_and_methods(self):
        code = '''
        ថ្នាក់ គណនា {
            បង្កើត(តម្លៃដើម) {
                នេះ.តម្លៃ = តម្លៃដើម
            }
            វិធី បូក(n) {
                នេះ.តម្លៃ = នេះ.តម្លៃ + n
                ត្រឡប់ នេះ.តម្លៃ
            }
        }
        តាំង c = ថ្មី គណនា(១០);
        c.បូក(៥);
        បង្ហាញ(c.តម្លៃ);
        '''
        res = run_code(code)
        self.assertEqual(res["status"], "success")
        self.assertEqual(res["stdout"].strip(), "១៥")

    def test_inheritance(self):
        code = '''
        ថ្នាក់ សត្វ {
            វិធី យំ() {
                ត្រឡប់ "សំឡេងសត្វ"
            }
        }
        ថ្នាក់ ឆ្កែ បន្តពី សត្វ {
            វិធី យំ() {
                ត្រឡប់ "វូស! វូស!"
            }
        }
        តាំង dog = ថ្មី ឆ្កែ();
        បង្ហាញ(dog.យំ());
        '''
        res = run_code(code)
        self.assertEqual(res["status"], "success")
        self.assertEqual(res["stdout"].strip(), "វូស! វូស!")

if __name__ == "__main__":
    unittest.main()
