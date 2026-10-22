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
  final String? diagnostic;
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
    this.diagnostic,
    this.errorLine,
    this.errorColumn,
    required this.duration,
    this.ast,
    required this.variables,
  });

  bool get isSuccess => status == 'success';
}

class CheckResult {
  final String status;
  final int tokensCount;
  final String? astNodeType;
  final String? error;
  final String? diagnostic;
  final int? errorLine;
  final int? errorColumn;

  CheckResult({
    required this.status,
    required this.tokensCount,
    this.astNodeType,
    this.error,
    this.diagnostic,
    this.errorLine,
    this.errorColumn,
  });

  bool get isSuccess => status == 'success';
}

ExecutionResult runKhmerCode(
  String source, {
  String? filepath,
  void Function(String text)? stdoutWrite,
  String Function(String prompt)? stdinRead,
}) {
  final buffer = StringBuffer();
  final stopwatch = Stopwatch()..start();

  void customStdout(String text) {
    buffer.write(text);
    if (stdoutWrite != null) {
      stdoutWrite(text);
    }
  }

  List<ASTNode>? parsedAst;
  Environment? globalEnv;

  try {
    final lexer = Lexer(source);
    final tokens = lexer.tokenize();

    final parser = Parser(tokens);
    parsedAst = parser.parse();

    globalEnv = createGlobalEnvironment(
      stdoutWrite: customStdout,
      stdinRead: stdinRead,
    );
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
      diagnostic: null,
      duration: stopwatch.elapsed,
      ast: parsedAst,
      variables: userVars,
    );
  } on KhmerLangError catch (e) {
    stopwatch.stop();
    if (filepath != null && (e.filepath == null || e.filepath!.isEmpty)) {
      e.filepath = filepath;
    }
    return ExecutionResult(
      status: 'error',
      stdout: buffer.toString(),
      result: null,
      error: e.formatMessage(),
      diagnostic: e.compilerDiagnostic(),
      errorLine: e.line,
      errorColumn: e.column,
      duration: stopwatch.elapsed,
      ast: parsedAst,
      variables: {},
    );
  } catch (e) {
    stopwatch.stop();
    final fp = (filepath != null && filepath.isNotEmpty) ? filepath : '<source>';
    return ExecutionResult(
      status: 'error',
      stdout: buffer.toString(),
      result: null,
      error: 'កំហុសប្រព័ន្ធ/System Error: $e',
      diagnostic: '$fp:1:1: error: $e',
      errorLine: 1,
      errorColumn: 1,
      duration: stopwatch.elapsed,
      ast: parsedAst,
      variables: {},
    );
  }
}

CheckResult checkKhmerCode(String source, {String? filepath}) {
  try {
    final lexer = Lexer(source);
    final tokens = lexer.tokenize();

    final parser = Parser(tokens);
    final ast = parser.parse();

    return CheckResult(
      status: 'success',
      tokensCount: tokens.length,
      astNodeType: ast.isNotEmpty ? ast.first.runtimeType.toString() : 'Empty',
      error: null,
      diagnostic: null,
    );
  } on KhmerLangError catch (e) {
    if (filepath != null && (e.filepath == null || e.filepath!.isEmpty)) {
      e.filepath = filepath;
    }
    return CheckResult(
      status: 'error',
      tokensCount: 0,
      astNodeType: null,
      error: e.formatMessage(),
      diagnostic: e.compilerDiagnostic(),
      errorLine: e.line,
      errorColumn: e.column,
    );
  } catch (e) {
    final fp = (filepath != null && filepath.isNotEmpty) ? filepath : '<source>';
    return CheckResult(
      status: 'error',
      tokensCount: 0,
      astNodeType: null,
      error: 'កំហុសប្រព័ន្ធ/System Error: $e',
      diagnostic: '$fp:1:1: error: $e',
      errorLine: 1,
      errorColumn: 1,
    );
  }
}
