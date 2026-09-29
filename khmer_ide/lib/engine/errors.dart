class KhmerLangError implements Exception {
  final String message;
  final int? line;
  final int? column;

  KhmerLangError(this.message, [this.line, this.column]);

  String formatMessage() {
    String pos = '';
    if (line != null) {
      pos += ' [បន្ទាត់/Line $line';
      if (column != null) {
        pos += ', ជួរ/Col $column';
      }
      pos += ']';
    }
    return 'កំហុស/Error$pos: $message';
  }

  @override
  String toString() => formatMessage();
}

class LexerError extends KhmerLangError {
  LexerError(super.message, [super.line, super.column]);
}

class ParserError extends KhmerLangError {
  ParserError(super.message, [super.line, super.column]);
}

class RuntimeError extends KhmerLangError {
  RuntimeError(super.message, [super.line, super.column]);
}

class ReturnException implements Exception {
  final dynamic value;
  ReturnException(this.value);
}
