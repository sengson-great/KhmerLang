import io
from khmer_lang.lexer import Lexer
from khmer_lang.parser import Parser
from khmer_lang.environment import create_global_environment
from khmer_lang.interpreter import Interpreter
from khmer_lang.errors import KhmerLangError


def run_code(source: str) -> dict:
    buffer = io.StringIO()

    def custom_stdout(text: str):
        buffer.write(text)

    try:
        lexer = Lexer(source)
        tokens = lexer.tokenize()

        parser = Parser(tokens)
        ast = parser.parse()

        global_env = create_global_environment(stdout_write=custom_stdout)
        interpreter = Interpreter(global_env=global_env, stdout_write=custom_stdout)
        result = interpreter.interpret(ast)

        return {
            "status": "success",
            "stdout": buffer.getvalue(),
            "result": result,
            "error": None
        }
    except KhmerLangError as e:
        return {
            "status": "error",
            "stdout": buffer.getvalue(),
            "result": None,
            "error": e.format_message()
        }
    except Exception as e:
        return {
            "status": "error",
            "stdout": buffer.getvalue(),
            "result": None,
            "error": f"កំហុសប្រព័ន្ធ/System Error: {str(e)}"
        }
