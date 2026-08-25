import sys
import os
from khmer_lang import __version__
from khmer_lang.runner import run_code
from khmer_lang.lexer import Lexer
from khmer_lang.parser import Parser
from khmer_lang.environment import create_global_environment, format_khmer_value
from khmer_lang.interpreter import Interpreter
from khmer_lang.errors import KhmerLangError


def main():
    args = sys.argv[1:]

    if not args:
        run_repl()
        return

    if args[0] in ("-h", "--help", "help"):
        print_help()
        return

    if args[0] in ("-v", "--version", "version"):
        print(f"KhmerLang (ភាសាខ្មែរ) version {__version__}")
        return

    filepath = args[0]
    if not os.path.exists(filepath):
        print(f"កំហុស/Error: មិនរករកឃើញឯកសារ/File not found: {filepath}")
        sys.exit(1)

    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    res = run_code(code)
    if res["stdout"]:
        sys.stdout.write(res["stdout"])
    if res["error"]:
        sys.stderr.write(res["error"] + "\n")
        sys.exit(1)


def run_repl():
    print(f"==================================================")
    print(f"  ភាសាខ្មែរ (KhmerLang) v{__version__} REPL")
    print(f"  វាយ 'ចាកចេញ' ឬ 'exit' ឬ 'quit' ដើម្បីចាកចេញ")
    print(f"==================================================")

    global_env = create_global_environment()
    interpreter = Interpreter(global_env=global_env)

    while True:
        try:
            line = input("ខ្មែរ> ")
            if line.strip() in ("ចាកចេញ", "exit", "quit"):
                break
            if not line.strip():
                continue

            lexer = Lexer(line)
            tokens = lexer.tokenize()
            parser = Parser(tokens)
            ast = parser.parse()
            result = interpreter.interpret(ast)

            if result is not None:
                print(f"--> {format_khmer_value(result)}")

        except (KeyboardInterrupt, EOFError):
            print("\nលាហើយ! / Goodbye!")
            break
        except KhmerLangError as e:
            print(e.format_message())
        except Exception as e:
            print(f"កំហុស/Error: {str(e)}")


def print_help():
    print("""
ការប្រើប្រាស់ / Usage:
  khmer [filename.khmer]    : ដំណើការឯកសារភាសាខ្មែរ / Run Khmer script file
  khmer                     : បើក REPL សម្រាប់សរសេរកូដភ្លាមៗ / Open REPL
  khmer --help              : បង្ហាញការណែនាំនេះ / Show this help
  khmer --version           : បង្ហាញជំនាន់ / Show version
""")
