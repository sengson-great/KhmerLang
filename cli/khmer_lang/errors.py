class KhmerLangError(Exception):
    def __init__(self, message: str, line: int = None, column: int = None, filepath: str = None):
        self.message = message
        self.line = line
        self.column = column
        self.filepath = filepath
        super().__init__(self.format_message())

    def format_message(self, compiler_format: bool = False) -> str:
        if compiler_format:
            return self.compiler_diagnostic()
        pos = ""
        if self.line is not None:
            pos += f" [បន្ទាត់/Line {self.line}"
            if self.column is not None:
                pos += f", ជួរ/Col {self.column}"
            pos += "]"
        fp_prefix = f"{self.filepath}: " if self.filepath else ""
        return f"{fp_prefix}កំហុស/Error{pos}: {self.message}"

    def compiler_diagnostic(self) -> str:
        fp = self.filepath or "<source>"
        ln = self.line if self.line is not None else 1
        col = self.column if self.column is not None else 1
        return f"{fp}:{ln}:{col}: error: {self.message}"


class LexerError(KhmerLangError):
    pass


class ParserError(KhmerLangError):
    pass


class RuntimeError(KhmerLangError):
    pass


class ReturnException(Exception):
    def __init__(self, value):
        self.value = value
