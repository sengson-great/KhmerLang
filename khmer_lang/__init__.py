"""
KhmerLang (ភាសាខ្មែរ) - A programming language with Khmer syntax.
"""

__version__ = "1.0.0"

from khmer_lang.runner import run_code
from khmer_lang.lexer import Lexer
from khmer_lang.parser import Parser
from khmer_lang.interpreter import Interpreter
from khmer_lang.errors import KhmerLangError

__all__ = ["run_code", "Lexer", "Parser", "Interpreter", "KhmerLangError", "__version__"]
