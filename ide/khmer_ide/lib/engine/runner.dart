import 'ast_nodes.dart';
import 'environment.dart';
import 'errors.dart';
import 'interpreter.dart';
import 'lexer.dart';
import 'parser.dart';

class ExecutionResult {
  final String status;
  final String stdout;
  final dynamic result;
  final String? error;
  final int? errorLine;
  final int? errorColumn;
  final Duration duration;
  final List<ASTNode>? ast;
  final Map<String, dynamic> variables;

  ExecutionResult({
    required this.status,
    required this.stdout,
    this.result,
    this.error,
    this.errorLine,
    this.errorColumn,
    required this.duration,
    this.ast,
    required this.variables,
  });

  bool get isSuccess => status == 'success';
}

ExecutionResult runKhmerCode(String source) {
  final buffer = StringBuffer();
  final stopwatch = Stopwatch()..start();

  void customStdout(String text) {
    buffer.write(text);
  }

  List<ASTNode>? parsedAst;
  Environment? globalEnv;

  try {
    final lexer = Lexer(source);
    final tokens = lexer.tokenize();

    final parser = Parser(tokens);
    parsedAst = parser.parse();

    globalEnv = createGlobalEnvironment(stdoutWrite: customStdout);
    final interpreter = Interpreter(
      globalEnv: globalEnv,
      stdoutWrite: customStdout,
    );

    final res = interpreter.interpret(parsedAst);
    stopwatch.stop();

    // Extract user variables (filter out internal builtin functions)
    final userVars = <String, dynamic>{};
    for (final entry in globalEnv.values.entries) {
      if (entry.value is! BuiltinFunction) {
        userVars[entry.key] = entry.value;
      }
    }

    return ExecutionResult(
      status: 'success',
      stdout: buffer.toString(),
      result: res,
      error: null,
      duration: stopwatch.elapsed,
      ast: parsedAst,
      variables: userVars,
    );
  } on KhmerLangError catch (e) {
    stopwatch.stop();
    return ExecutionResult(
      status: 'error',
      stdout: buffer.toString(),
      result: null,
      error: e.formatMessage(),
      errorLine: e.line,
      errorColumn: e.column,
      duration: stopwatch.elapsed,
      ast: parsedAst,
      variables: {},
    );
  } catch (e) {
    stopwatch.stop();
    return ExecutionResult(
      status: 'error',
      stdout: buffer.toString(),
      result: null,
      error: 'កំហុសប្រព័ន្ធ/System Error: $e',
      duration: stopwatch.elapsed,
      ast: parsedAst,
      variables: {},
    );
  }
}
