import 'dart:convert';
import 'dart:io';
import '../engine/environment.dart';
import '../engine/errors.dart';
import '../engine/interpreter.dart';
import '../engine/lexer.dart';
import '../engine/parser.dart';

void runRepl({String promptStyle = 'ascii', String version = '1.0.0'}) {
  final promptStr = promptStyle == 'ascii' ? 'khmer> ' : 'ខ្មែរ> ';

  stdout.writeln('==================================================');
  stdout.writeln('  ខ្មែរចារ (KhmerChar) v$version REPL');
  stdout.writeln("  វាយ 'ចាកចេញ' ឬ 'exit' ដើម្បីចាកចេញ / Type 'exit' to quit");
  stdout.writeln('  គន្លឹះ: បើអក្សរខ្មែរមិនស្អាតលើ Terminal សូមរ៉ាន់: khmer terminal');
  stdout.writeln('==================================================');

  final globalEnv = createGlobalEnvironment(
    stdinRead: (prompt) {
      if (prompt.isNotEmpty) stdout.write(prompt);
      return stdin.readLineSync(encoding: utf8) ?? '';
    },
  );
  final interpreter = Interpreter(globalEnv: globalEnv);

  while (true) {
    stdout.write(promptStr);
    final line = stdin.readLineSync(encoding: utf8);
    if (line == null) {
      stdout.writeln('\nលាហើយ! / Goodbye!');
      break;
    }

    final trimmed = line.trim();
    if (trimmed == 'ចាកចេញ' || trimmed == 'exit' || trimmed == 'quit') {
      stdout.writeln('លាហើយ! / Goodbye!');
      break;
    }
    if (trimmed.isEmpty) {
      continue;
    }

    try {
      final lexer = Lexer(trimmed);
      final tokens = lexer.tokenize();
      final parser = Parser(tokens);
      final ast = parser.parse();
      final result = interpreter.interpret(ast);

      if (result != null) {
        stdout.writeln('--> ${formatKhmerValue(result)}');
      }
    } on KhmerLangError catch (e) {
      stderr.writeln(e.formatMessage());
    } catch (e) {
      stderr.writeln('កំហុស/Error: $e');
    }
  }
}
