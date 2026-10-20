class KhmerLangError implements Exception {
  final String message;
  final int? line;
  final int? column;
  String? filepath;

  KhmerLangError(this.message, [this.line, this.column, this.filepath]);

  String formatMessage({bool compilerFormat = false}) {
    if (compilerFormat) {
      return compilerDiagnostic();
    }
    String pos = '';
    if (line != null) {
      pos += ' [បន្ទាត់/Line $line';
      if (column != null) {
        pos += ', ជួរ/Col $column';
      }
      pos += ']';
    }
    final fpPrefix = (filepath != null && filepath!.isNotEmpty) ? '$filepath: ' : '';
    return '$fpPrefixកំហុស/Error$pos: $message';
  }

  String compilerDiagnostic() {
    final fp = (filepath != null && filepath!.isNotEmpty) ? filepath : '<source>';
    final ln = line ?? 1;
    final col = column ?? 1;
    return '$fp:$ln:$col: error: $message';
  }

  @override
  String toString() => formatMessage();
}

class LexerError extends KhmerLangError {
  LexerError(super.message, [super.line, super.column, super.filepath]);
}

class ParserError extends KhmerLangError {
  ParserError(super.message, [super.line, super.column, super.filepath]);
}

class RuntimeError extends KhmerLangError {
  RuntimeError(super.message, [super.line, super.column, super.filepath]);
}

class ReturnException implements Exception {
  final dynamic value;
  ReturnException(this.value);
}
