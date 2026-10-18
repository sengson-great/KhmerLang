enum TokenType {
  // Literals
  number,
  string,
  identifier,

  // Keywords
  let, // តាំង
  print, // បង្ហាញ
  ifType, // បើ
  elseIf, // ឬបើ
  elseType, // ផ្សេងទៀត
  whileType, // ខណៈ
  forType, // សម្រាប់
  function, // អនុគមន៍
  returnType, // ត្រឡប់
  trueType, // ពិត
  falseType, // មិនពិត
  nullType, // ទទេ
  and, // និង
  or, // ឬ
  not, // មិន

  // OOP Keywords
  classType, // ថ្នាក់
  method, // វិធី
  thisType, // នេះ
  self, // ខ្លួនវា
  newType, // ថ្មី
  extendsType, // បន្តពី

  // Operators
  plus, // +
  minus, // -
  star, // *
  slash, // /
  modulo, // %
  assign, // =
  eq, // ==
  neq, // !=
  lt, // <
  gt, // >
  lte, // <=
  gte, // >=

  // Delimiters & Member access
  dot, // .
  lparen, // (
  rparen, // )
  lbrace, // {
  rbrace, // }
  lbracket, // [
  rbracket, // ]
  comma, // ,
  semicolon, // ;
  colon, // :

  // Special
  eof,
}

const Map<String, TokenType> keywords = {
  'តាំង': TokenType.let,
  'បង្ហាញ': TokenType.print,
  'បើ': TokenType.ifType,
  'ឬបើ': TokenType.elseIf,
  'ផ្សេងទៀត': TokenType.elseType,
  'ខណៈ': TokenType.whileType,
  'សម្រាប់': TokenType.forType,
  'អនុគមន៍': TokenType.function,
  'ត្រឡប់': TokenType.returnType,
  'ពិត': TokenType.trueType,
  'មិនពិត': TokenType.falseType,
  'ទទេ': TokenType.nullType,
  'និង': TokenType.and,
  'ឬ': TokenType.or,
  'មិន': TokenType.not,

  // OOP
  'ថ្នាក់': TokenType.classType,
  'វិធី': TokenType.method,
  'នេះ': TokenType.thisType,
  'ខ្លួនវា': TokenType.self,
  'ថ្មី': TokenType.newType,
  'បន្តពី': TokenType.extendsType,
};

const Map<String, String> khmerDigits = {
  '០': '0',
  '១': '1',
  '២': '2',
  '៣': '3',
  '៤': '4',
  '៥': '5',
  '៦': '6',
  '៧': '7',
  '៨': '8',
  '៩': '9',
};

const Map<String, String> asciiToKhmerDigits = {
  '0': '០',
  '1': '១',
  '2': '២',
  '3': '៣',
  '4': '៤',
  '5': '៥',
  '6': '៦',
  '7': '៧',
  '8': '៨',
  '9': '៩',
};

class Token {
  final TokenType type;
  final dynamic value;
  final int line;
  final int column;

  Token(this.type, this.value, this.line, this.column);

  @override
  String toString() => 'Token($type, $value, $line:$column)';
}
