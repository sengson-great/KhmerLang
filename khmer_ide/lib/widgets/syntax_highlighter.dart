import 'package:flutter/material.dart';
import '../theme/syntax_theme.dart';

class KhmerCodeEditingController extends TextEditingController {
  SyntaxTheme syntaxTheme;

  KhmerCodeEditingController({
    super.text,
    required this.syntaxTheme,
  });

  static const String _delimiterChars = r'\s\(\)\{\}\[\]\.,;៖។=+\-*/%<>!":';

  static final RegExp _pattern = RegExp(
    // 1. Comments: #, //, /* ... */
    r'(?<comment>#[^\n]*|//[^\n]*|/\*[\s\S]*?\*/)'
    // 2. Strings: "", '', “”, ‘’
    r'|(?<string>"[^"\\]*(?:\\.[^"\\]*)*"|'
    r"'[^'\\]*(?:\\.[^'\\]*)*'|"
    r'“[^”\\]*(?:\\.[^”\\]*)*”|'
    r'‘[^’\\]*(?:\\.[^’\\]*)*’)'
    // 3. Khmer & ASCII Numbers
    r'|(?<number>[០-៩]+(?:\.[០-៩]+)?|[0-9]+(?:\.[0-9]+)?)'
    // 4. OOP Keywords
    r'|(?<=^|[' '$_delimiterChars' r'])(?<oop>ថ្នាក់|វិធី|បង្កើត|នេះ|ខ្លួនវា|ថ្មី|បន្តពី)(?=$|[' '$_delimiterChars' r'])'
    // 5. Standard Keywords
    r'|(?<=^|[' '$_delimiterChars' r'])(?<keyword>តាំង|បង្ហាញ|បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|អនុគមន៍|ត្រឡប់|ពិត|មិនពិត|ទទេ|និង|ឬ|មិន)(?=$|[' '$_delimiterChars' r'])'
    // 6. Operators & Delimiters
    r'|(?<operator>==|!=|<=|>=|&&|\|\||[+\-*/%=<>!។៖;,.(){}\[\]])',
  );

  @override
  TextSpan buildTextSpan({
    required BuildContext context,
    TextStyle? style,
    required bool withComposing,
  }) {
    final List<InlineSpan> children = [];
    final textContent = text;

    int lastIndex = 0;

    for (final match in _pattern.allMatches(textContent)) {
      if (match.start > lastIndex) {
        children.add(TextSpan(
          text: textContent.substring(lastIndex, match.start),
          style: syntaxTheme.baseStyle,
        ));
      }

      final matchedText = match.group(0)!;

      if (match.namedGroup('comment') != null) {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.commentStyle,
        ));
      } else if (match.namedGroup('string') != null) {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.stringStyle,
        ));
      } else if (match.namedGroup('number') != null) {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.numberStyle,
        ));
      } else if (match.namedGroup('oop') != null) {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.oopStyle,
        ));
      } else if (match.namedGroup('keyword') != null) {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.keywordStyle,
        ));
      } else if (match.namedGroup('operator') != null) {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.operatorStyle,
        ));
      } else {
        children.add(TextSpan(
          text: matchedText,
          style: syntaxTheme.baseStyle,
        ));
      }

      lastIndex = match.end;
    }

    if (lastIndex < textContent.length) {
      children.add(TextSpan(
        text: textContent.substring(lastIndex),
        style: syntaxTheme.baseStyle,
      ));
    }

    return TextSpan(
      style: syntaxTheme.baseStyle,
      children: children,
    );
  }
}
