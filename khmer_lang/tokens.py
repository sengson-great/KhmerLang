from enum import Enum, auto

class TokenType(Enum):
    # Literals
    NUMBER = auto()
    STRING = auto()
    IDENTIFIER = auto()

    # Keywords
    LET = auto()          # តាំង
    PRINT = auto()        # បង្ហាញ
    IF = auto()           # បើ
    ELSE_IF = auto()      # ឬបើ
    ELSE = auto()         # ផ្សេងទៀត
    WHILE = auto()        # ខណៈ
    FOR = auto()          # សម្រាប់
    FUNCTION = auto()     # អនុគមន៍
    RETURN = auto()       # ត្រឡប់
    TRUE = auto()         # ពិត
    FALSE = auto()        # មិនពិត
    NULL = auto()         # ទទេ
    AND = auto()          # និង
    OR = auto()           # ឬ
    NOT = auto()          # មិន

    # OOP Keywords
    CLASS = auto()        # ថ្នាក់
    METHOD = auto()       # វិធី
    THIS = auto()         # នេះ
    SELF = auto()         # ខ្លួនវា
    NEW = auto()          # ថ្មី
    EXTENDS = auto()      # បន្តពី

    # Operators
    PLUS = auto()         # +
    MINUS = auto()        # -
    STAR = auto()         # *
    SLASH = auto()        # /
    MODULO = auto()       # %
    ASSIGN = auto()       # =
    EQ = auto()           # ==
    NEQ = auto()          # !=
    LT = auto()           # <
    GT = auto()           # >
    LTE = auto()          # <=
    GTE = auto()          # >=

    # Delimiters & Member access
    DOT = auto()          # .
    LPAREN = auto()       # (
    RPAREN = auto()       # )
    LBRACE = auto()       # {
    RBRACE = auto()       # }
    LBRACKET = auto()     # [
    RBRACKET = auto()     # ]
    COMMA = auto()        # ,
    SEMICOLON = auto()    # ;
    COLON = auto()        # :

    # Special
    EOF = auto()


KEYWORDS = {
    "តាំង": TokenType.LET,
    "បង្ហាញ": TokenType.PRINT,
    "បើ": TokenType.IF,
    "ឬបើ": TokenType.ELSE_IF,
    "ផ្សេងទៀត": TokenType.ELSE,
    "ខណៈ": TokenType.WHILE,
    "សម្រាប់": TokenType.FOR,
    "អនុគមន៍": TokenType.FUNCTION,
    "ត្រឡប់": TokenType.RETURN,
    "ពិត": TokenType.TRUE,
    "មិនពិត": TokenType.FALSE,
    "ទទេ": TokenType.NULL,
    "និង": TokenType.AND,
    "ឬ": TokenType.OR,
    "មិន": TokenType.NOT,

    # OOP
    "ថ្នាក់": TokenType.CLASS,
    "វិធី": TokenType.METHOD,
    "នេះ": TokenType.THIS,
    "ខ្លួនវា": TokenType.SELF,
    "ថ្មី": TokenType.NEW,
    "បន្តពី": TokenType.EXTENDS,
}

KHMER_DIGITS = {
    '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4',
    '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9'
}

class Token:
    def __init__(self, type_: TokenType, value, line: int, column: int):
        self.type = type_
        self.value = value
        self.line = line
        self.column = column

    def __repr__(self):
        return f"Token({self.type.name}, {repr(self.value)}, line={self.line}, col={self.column})"
