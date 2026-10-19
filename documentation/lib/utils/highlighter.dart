import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

List<Component> highlightKhmerCode(String code) {
  final lines = code.split('\n');
  final result = <Component>[];

  for (int i = 0; i < lines.length; i++) {
    final line = lines[i];
    result.addAll(_highlightLine(line));
    if (i < lines.length - 1) {
      result.add(text('\n'));
    }
  }

  return result;
}

List<Component> _highlightLine(String line) {
  if (line.trim().startsWith('#')) {
    return [span(classes: 'com', [text(line)])];
  }

  final components = <Component>[];
  final buffer = StringBuffer();

  int idx = 0;
  while (idx < line.length) {
    final char = line[idx];

    // Comment
    if (char == '#') {
      if (buffer.isNotEmpty) {
        components.addAll(_tokenizeText(buffer.toString()));
        buffer.clear();
      }
      components.add(span(classes: 'com', [text(line.substring(idx))]));
      break;
    }

    // String literal
    if (char == '"' || char == '\'') {
      if (buffer.isNotEmpty) {
        components.addAll(_tokenizeText(buffer.toString()));
        buffer.clear();
      }
      final quote = char;
      final start = idx;
      idx++;
      while (idx < line.length && line[idx] != quote) {
        if (line[idx] == '\\' && idx + 1 < line.length) {
          idx += 2;
        } else {
          idx++;
        }
      }
      if (idx < line.length) idx++; // include closing quote
      components.add(span(classes: 'str', [text(line.substring(start, idx))]));
      continue;
    }

    buffer.write(char);
    idx++;
  }

  if (buffer.isNotEmpty) {
    components.addAll(_tokenizeText(buffer.toString()));
  }

  return components;
}

List<Component> _tokenizeText(String chunk) {
  final result = <Component>[];
  final words = chunk.split(RegExp(r'(\s+|[(){}\[\],;:=+\-*/%<>!។៕៖])'));
  final matches = RegExp(r'(\s+|[(){}\[\],;:=+\-*/%<>!។៕៖])').allMatches(chunk).toList();

  int matchIdx = 0;
  for (int w = 0; w < words.length; w++) {
    final word = words[w];
    if (word.isNotEmpty) {
      result.add(_styleWord(word));
    }
    if (matchIdx < matches.length) {
      result.add(text(matches[matchIdx].group(0) ?? ''));
      matchIdx++;
    }
  }

  return result;
}

Component _styleWord(String word) {
  const keywords = {
    'តាំង', 'អថេរ', 'បើ', 'ឬបើ', 'ផ្សេងទៀត', 'ខណៈ', 'សម្រាប់',
    'អនុគមន៍', 'វិធី', 'ត្រឡប់', 'ថ្នាក់', 'បង្កើត', 'នេះ', 'ខ្លួនវា',
    'ថ្មី', 'បន្តពី', 'ពិត', 'មិនពិត', 'ទទេ', 'និង', 'ឬ', 'មិន',
  };

  const builtins = {
    'បង្ហាញ', 'ប្រវែង', 'ប្រភេទ', 'បន្ថែម', 'បញ្ចូល', 'បម្លែងលេខ', 'បញ្ឈប់',
  };

  if (keywords.contains(word)) {
    return span(classes: 'kw', [text(word)]);
  } else if (builtins.contains(word)) {
    return span(classes: 'builtin', [text(word)]);
  } else if (RegExp(r'^[០-៩0-9]+(\.[០-៩0-9]+)?$').hasMatch(word)) {
    return span(classes: 'num', [text(word)]);
  }

  return text(word);
}
