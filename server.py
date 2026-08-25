import http.server
import socketserver
import json
import os
import sys

# Ensure khmer_lang is in python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from khmer_lang.runner import run_code

PORT = 8000
WEB_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "web")


class ProgramizStyleServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_DIR, **kwargs)

    def do_POST(self):
        if self.path == "/api/run":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length).decode("utf-8")

            try:
                data = json.loads(post_data)
                code = data.get("code", "")
            except Exception:
                code = post_data

            result = run_code(code)

            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(result, ensure_ascii=False).encode("utf-8"))
        else:
            self.send_error(404, "Endpoint Not Found")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()


def start_server(port=PORT):
    handler = ProgramizStyleServer
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"==================================================")
        print(f"  🚀 Programiz-style KhmerLang Web IDE is running!")
        print(f"  👉 Open URL: http://localhost:{port}")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n Server stopped.")


if __name__ == "__main__":
    port_arg = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    start_server(port_arg)
