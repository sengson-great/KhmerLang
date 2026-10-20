import unittest
import json
from server import ProgramizStyleServer
from io import BytesIO

class MockRequest:
    def __init__(self, body: bytes):
        self.rfile = BytesIO(body)
        self.wfile = BytesIO()

class TestServer(unittest.TestCase):
    def test_run_api_endpoint(self):
        payload = json.dumps({"code": "តាំង x = ៥; បង្ហាញ(x * ២);"}).encode("utf-8")
        
        # Test runner function directly
        from khmer_lang.runner import run_code
        res = run_code("តាំង x = ៥; បង្ហាញ(x * ២);")
        self.assertEqual(res["status"], "success")
        self.assertEqual(res["stdout"].strip(), "១០")

if __name__ == "__main__":
    unittest.main()
