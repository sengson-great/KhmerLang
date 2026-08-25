class KhmerLangError(Exception):
    def __init__(self, message: str, line: int = None, column: int = None):
        self.message = message
        self.line = line
        self.column = column
        super().__init__(self.format_message())

    def format_message(self) -> str:
        pos = ""
        if self.line is not None:
            pos += f" [បន្ទាត់/Line {self.line}"
            if self.column is not None:
                pos += f", ជួរ/Col {self.column}"
            pos += "]"
        return f"កំហុស/Error{pos}: {self.message}"


class LexerError(KhmerLangError):
    pass


class ParserError(KhmerLangError):
    pass


class RuntimeError(KhmerLangError):
    pass


class ReturnException(Exception):
    def __init__(self, value):
        self.value = value
