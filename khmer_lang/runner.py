import io
from khmer_lang.lexer import Lexer
from khmer_lang.parser import Parser
from khmer_lang.environment import create_global_environment
from khmer_lang.interpreter import Interpreter
from khmer_lang.errors import KhmerLangError


def run_code(source: str, filepath: str = None) -> dict:
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
            "error": None,
            "diagnostic": None
        }
    except KhmerLangError as e:
        if filepath and not e.filepath:
            e.filepath = filepath
        return {
            "status": "error",
            "stdout": buffer.getvalue(),
            "result": None,
            "error": e.format_message(),
            "diagnostic": e.compiler_diagnostic(),
            "line": e.line,
            "column": e.column
        }
    except Exception as e:
        fp = filepath or "<source>"
        return {
            "status": "error",
            "stdout": buffer.getvalue(),
            "result": None,
            "error": f"កំហុសប្រព័ន្ធ/System Error: {str(e)}",
            "diagnostic": f"{fp}:1:1: error: {str(e)}",
            "line": 1,
            "column": 1
        }


def check_code(source: str, filepath: str = None) -> dict:
    """Parses and checks syntax without executing."""
    try:
        lexer = Lexer(source)
        tokens = lexer.tokenize()

        parser = Parser(tokens)
        ast = parser.parse()

        return {
            "status": "success",
            "tokens_count": len(tokens),
            "ast_node_type": ast.__class__.__name__,
            "error": None,
            "diagnostic": None
        }
    except KhmerLangError as e:
        if filepath and not e.filepath:
            e.filepath = filepath
        return {
            "status": "error",
            "tokens_count": 0,
            "ast_node_type": None,
            "error": e.format_message(),
            "diagnostic": e.compiler_diagnostic(),
            "line": e.line,
            "column": e.column
        }
    except Exception as e:
        fp = filepath or "<source>"
        return {
            "status": "error",
            "tokens_count": 0,
            "ast_node_type": None,
            "error": f"កំហុសប្រព័ន្ធ/System Error: {str(e)}",
            "diagnostic": f"{fp}:1:1: error: {str(e)}",
            "line": 1,
            "column": 1
        }
