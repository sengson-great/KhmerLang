import 'dart:convert';
import 'package:http/http.dart' as http;
import '../engine/runner.dart';

enum ExecutionMode {
  localDart,
  pythonServer,
}

class ExecutionService {
  static String pythonServerUrl = 'http://localhost:8000/api/run';

  static Future<ExecutionResult> execute({
    required String code,
    required ExecutionMode mode,
  }) async {
    if (mode == ExecutionMode.localDart) {
      return runKhmerCode(code);
    } else {
      return _runViaPythonServer(code);
    }
  }

  static Future<ExecutionResult> _runViaPythonServer(String code) async {
    final stopwatch = Stopwatch()..start();
    try {
      final uri = Uri.parse(pythonServerUrl);
      final response = await http
          .post(
            uri,
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: jsonEncode({'code': code}),
          )
          .timeout(const Duration(seconds: 10));

      stopwatch.stop();

      if (response.statusCode == 200) {
        final Map<String, dynamic> data =
            jsonDecode(utf8.decode(response.bodyBytes));

        final status = data['status'] ?? 'success';
        final stdout = data['stdout'] ?? '';
        final error = data['error'];
        final result = data['result'];

        return ExecutionResult(
          status: status,
          stdout: stdout,
          result: result,
          error: error,
          duration: stopwatch.elapsed,
          variables: {},
        );
      } else {
        return ExecutionResult(
          status: 'error',
          stdout: '',
          error:
              'Python Server ឆ្លើយតបកូដ ${response.statusCode}: ${response.reasonPhrase}',
          duration: stopwatch.elapsed,
          variables: {},
        );
      }
    } catch (e) {
      stopwatch.stop();
      return ExecutionResult(
        status: 'error',
        stdout: '',
        error:
            'មិនអាចភ្ជាប់ទៅកាន់ Python Server ($pythonServerUrl) បានទេ: $e\n\n💡 ជំនួយ: អ្នកអាចដំណើការ server.py តាមរយៈ:\npython3 server.py 8000\nឬប្តូរទៅប្រើ "ម៉ាស៊ីន Dart ក្នុងស្រុក" ដើម្បីរ៉ាន់ភ្លាមៗដោយមិនចាំបាច់មាន Server!',
        duration: stopwatch.elapsed,
        variables: {},
      );
    }
  }
}
