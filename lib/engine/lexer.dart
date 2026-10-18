import 'tokens.dart';
import 'errors.dart';

class Lexer {
  final String source;
  int position = 0;
  int line = 1;
  int column = 1;
  late final int length;

  Lexer(this.source) {
    length = source.length;
  }

  String _peek([int offset = 0]) {
    final pos = position + offset;
    if (pos >= length) {
      return '';
    }
    return source[pos];
  }

  String _advance() {
    final ch = _peek();
    position++;
    if (ch == '\n') {
      line++;
      column = 1;
    } else {
      column++;
    }
    return ch;
  }

  bool _isKhmerDigit(String ch) {
    return khmerDigits.containsKey(ch);
  }

  bool _isDigit(String ch) {
    if (ch.isEmpty) return false;
    final code = ch.codeUnitAt(0);
    return (code >= 48 && code <= 57) || _isKhmerDigit(ch);
  }

  bool _isIdentStart(String ch) {
    if (ch.isEmpty) return false;
    if (ch == '_') return true;
    final code = ch.codeUnitAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return true;
    }
    // Khmer Unicode ranges
    return (code >= 0x1780 && code <= 0x17FF) || (code >= 0x19E0 && code <= 0x19FF);
  }

  bool _isIdentPart(String ch) {
    return _isIdentStart(ch) || _isDigit(ch);
  }

  List<Token> tokenize() {
    final List<Token> tokens = [];

    while (position < length) {
      final ch = _peek();

      // Whitespace and Khmer zero-width spaces
      if (ch == ' ' ||
          ch == '\t' ||
          ch == '\r' ||
          ch == '\n' ||
          ch == '\u200b' ||
          ch == '\u00a0' ||
          ch == '\ufeff') {
        _advance();
        continue;
      }

      // Single-line Comments
      if (ch == '#' || (ch == '/' && _peek(1) == '/')) {
        while (_peek().isNotEmpty && _peek() != '\n') {
          _advance();
        }
        continue;
      }

      // Multi-line Comments
      if (ch == '/' && _peek(1) == '*') {
        _advance(); // /
        _advance(); // *
        while (_peek().isNotEmpty && !(_peek() == '*' && _peek(1) == '/')) {
          _advance();
        }
        if (_peek().isNotEmpty) {
          _advance(); // *
          _advance(); // /
        }
        continue;
      }

      final startLine = line;
      final startCol = column;

      // Numbers (Khmer or ASCII digits)
      if (_isDigit(ch)) {
        var numStr = '';
        var hasDot = false;

        while (_isDigit(_peek()) ||
            (_peek() == '.' && !hasDot && _isDigit(_peek(1)))) {
          final c = _advance();
          if (c == '.') {
            hasDot = true;
          }
          numStr += c;
        }

        // Convert Khmer digits to ASCII
        final buffer = StringBuffer();
        for (var i = 0; i < numStr.length; i++) {
          final char = numStr[i];
          buffer.write(khmerDigits[char] ?? char);
        }
        final normalized = buffer.toString();
        final val = hasDot ? double.parse(normalized) : int.parse(normalized);
        tokens.appendOrAdd(Token(TokenType.number, val, startLine, startCol));
        continue;
      }

      // Strings (support ASCII quotes and Unicode quotes “ ” ‘ ’)
      if (ch == '"' || ch == "'" || ch == '“' || ch == '”' || ch == '‘' || ch == '’') {
        final openQuote = _advance();
        final isCurly = (openQuote == '“' || openQuote == '”' || openQuote == '‘' || openQuote == '’');
        final closeQuotes = isCurly ? const ['"', "'", '“', '”', '‘', '’'] : [openQuote];

        var strVal = '';
        while (_peek().isNotEmpty && !closeQuotes.contains(_peek())) {
          final c = _advance();
          if (c == '\\') {
            final nxt = _advance();
            if (nxt == 'n') {
              strVal += '\n';
            } else if (nxt == 't') {
              strVal += '\t';
            } else if (nxt == '\\') {
              strVal += '\\';
            } else if (closeQuotes.contains(nxt)) {
              strVal += nxt;
            } else {
              strVal += nxt;
            }
          } else {
            strVal += c;
          }
        }

        if (_peek().isEmpty) {
          throw LexerError('String មិនបានបិទ / Unclosed string literal', startLine, startCol);
        }
        _advance(); // close quote
        tokens.appendOrAdd(Token(TokenType.string, strVal, startLine, startCol));
        continue;
      }

      // Multi-character Operators
      if (ch == '=' && _peek(1) == '=') {
        _advance();
        _advance();
        tokens.appendOrAdd(Token(TokenType.eq, '==', startLine, startCol));
        continue;
      }
      if (ch == '!' && _peek(1) == '=') {
        _advance();
        _advance();
        tokens.appendOrAdd(Token(TokenType.neq, '!=', startLine, startCol));
        continue;
      }
      if (ch == '<' && _peek(1) == '=') {
        _advance();
        _advance();
        tokens.appendOrAdd(Token(TokenType.lte, '<=', startLine, startCol));
        continue;
      }
      if (ch == '>' && _peek(1) == '=') {
        _advance();
        _advance();
        tokens.appendOrAdd(Token(TokenType.gte, '>=', startLine, startCol));
        continue;
      }
      if (ch == '&' && _peek(1) == '&') {
        _advance();
        _advance();
        tokens.appendOrAdd(Token(TokenType.and, '&&', startLine, startCol));
        continue;
      }
      if (ch == '|' && _peek(1) == '|') {
        _advance();
        _advance();
        tokens.appendOrAdd(Token(TokenType.or, '||', startLine, startCol));
        continue;
      }

      // Single-character Operators & Delimiters
      final singleOps = {
        '+': TokenType.plus,
        '-': TokenType.minus,
        '*': TokenType.star,
        '/': TokenType.slash,
        '%': TokenType.modulo,
        '=': TokenType.assign,
        '<': TokenType.lt,
        '>': TokenType.gt,
        '!': TokenType.not,
        '.': TokenType.dot,
        '．': TokenType.dot, // Fullwidth dot
        '(': TokenType.lparen,
        ')': TokenType.rparen,
        '{': TokenType.lbrace,
        '}': TokenType.rbrace,
        '[': TokenType.lbracket,
        ']': TokenType.rbracket,
        ',': TokenType.comma,
        ';': TokenType.semicolon,
        '៖': TokenType.colon, // Khmer Colon
        ':': TokenType.colon,
        '។': TokenType.semicolon, // Khmer Khan as statement delimiter
      };

      if (singleOps.containsKey(ch)) {
        _advance();
        tokens.appendOrAdd(Token(singleOps[ch]!, ch, startLine, startCol));
        continue;
      }

      // Identifiers and Keywords
      if (_isIdentStart(ch)) {
        var ident = '';
        while (_peek().isNotEmpty && _isIdentPart(_peek())) {
          ident += _advance();
        }

        if (keywords.containsKey(ident)) {
          tokens.appendOrAdd(Token(keywords[ident]!, ident, startLine, startCol));
        } else {
          tokens.appendOrAdd(Token(TokenType.identifier, ident, startLine, startCol));
        }
        continue;
      }

      // Unknown Character
      final badChar = _advance();
      final hexCode = badChar.codeUnitAt(0).toRadixString(16).toUpperCase().padLeft(4, '0');
      throw LexerError(
        "អក្សរ/សញ្ញាមិនស្គាល់ '$badChar' (U+$hexCode) / Unexpected character '$badChar'",
        startLine,
        startCol,
      );
    }

    tokens.appendOrAdd(Token(TokenType.eof, null, line, column));
    return tokens;
  }
}

extension on List<Token> {
  void appendOrAdd(Token token) {
    add(token);
  }
}
