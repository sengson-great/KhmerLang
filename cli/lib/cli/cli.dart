import 'dart:convert';
import 'dart:io';

import '../engine/errors.dart';
import '../engine/lexer.dart';
import '../engine/parser.dart';
import '../engine/runner.dart';
import 'editor_configs.dart';
import 'repl.dart';
import 'terminal_diagnostics.dart';

const String khmerLangVersion = '1.0.0';

Future<void> runCli(List<String> args) async {
  // Check for piped input from stdin when no args or arg is "-"
  if (!stdin.hasTerminal && (args.isEmpty || args[0] == '-')) {
    final stdinCode = await stdin.transform(utf8.decoder).join();
    executeSource(stdinCode, filepath: '<stdin>');
    return;
  }

  if (args.isEmpty) {
    runRepl(version: khmerLangVersion);
    return;
  }

  final cmd = args[0];

  // Flags
  if (cmd == '-h' || cmd == '--help' || cmd == 'help') {
    printHelp();
    return;
  }

  if (cmd == '-v' || cmd == '--version' || cmd == 'version') {
    stdout.writeln('KhmerLang (ភាសាខ្មែរ) version $khmerLangVersion [Dart Native]');
    return;
  }

  // Evaluate inline code: khmer -e "code" or khmer eval "code"
  if (cmd == '-e' || cmd == '--eval' || cmd == 'eval') {
    if (args.length < 2) {
      stderr.writeln('កំហុស/Error: សូមបញ្ជាក់កូដដែលត្រូវរ៉ាន់ / Missing code string for eval.');
      stderr.writeln("ឧទាហរណ៍/Example: khmer -e 'បង្ហាញ(\"សួស្តី\");'");
      exit(1);
    }
    executeSource(args[1], filepath: '<eval>');
    return;
  }

  // Check / Lint syntax without running: khmer check <file>
  if (cmd == 'check' || cmd == 'lint') {
    if (args.length < 2) {
      stderr.writeln('កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file to check.');
      exit(1);
    }
    runCheck(args[1]);
    return;
  }

  // Watch mode: khmer watch <file>
  if (cmd == 'watch') {
    if (args.length < 2) {
      stderr.writeln('កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file to watch.');
      exit(1);
    }
    await runWatch(args[1]);
    return;
  }

  // Inspect tokens: khmer tokens <file>
  if (cmd == 'tokens') {
    if (args.length < 2) {
      stderr.writeln('កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file.');
      exit(1);
    }
    runTokens(args[1]);
    return;
  }

  // Inspect AST: khmer ast <file>
  if (cmd == 'ast') {
    if (args.length < 2) {
      stderr.writeln('កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file.');
      exit(1);
    }
    runAst(args[1]);
    return;
  }

  // Initialize new project: khmer init [name]
  if (cmd == 'init') {
    final projectName = args.length > 1 ? args[1] : '.';
    runInit(projectName);
    return;
  }

  // Editor integrations: khmer editor [vscode|vim|sublime|nano|list]
  if (cmd == 'editor') {
    final sub = args.length > 1 ? args[1] : 'list';
    handleEditorCmd(sub, args.skip(2).toList());
    return;
  }

  // Terminal font & rendering diagnostics: khmer terminal [--fix]
  if (cmd == 'terminal' || cmd == 'term' || cmd == 'doctor') {
    handleTerminalCmd(args.skip(1).toList());
    return;
  }

  // Run REPL explicitly: khmer repl
  if (cmd == 'repl') {
    runRepl(version: khmerLangVersion);
    return;
  }

  // Explicit run: khmer run <file>
  if (cmd == 'run') {
    if (args.length < 2) {
      stderr.writeln('កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file to run.');
      exit(1);
    }
    runFile(args[1]);
    return;
  }

  // Reading from stdin via "-": khmer -
  if (cmd == '-') {
    final stdinCode = await stdin.transform(utf8.decoder).join();
    executeSource(stdinCode, filepath: '<stdin>');
    return;
  }

  // Default fallback: treat first argument as filename to run
  runFile(cmd);
}

void executeSource(String source, {String filepath = '<source>'}) {
  final res = runKhmerCode(source, filepath: filepath);
  if (res.stdout.isNotEmpty) {
    stdout.write(res.stdout);
  }
  if (!res.isSuccess) {
    if (res.diagnostic != null) {
      stderr.writeln(res.diagnostic);
    }
    if (res.error != null) {
      stderr.writeln(res.error);
    }
    exit(1);
  }
}

void runFile(String filepath) {
  final file = File(filepath);
  if (!file.existsSync()) {
    stderr.writeln('កំហុស/Error: មិនរកឃើញឯកសារ/File not found: $filepath');
    exit(1);
  }

  String code;
  try {
    code = file.readAsStringSync(encoding: utf8);
  } catch (e) {
    stderr.writeln('កំហុស/Error: មិនអាចអានឯកសារ/Cannot read file: $e');
    exit(1);
  }

  executeSource(code, filepath: filepath);
}

void runCheck(String filepath) {
  final file = File(filepath);
  if (!file.existsSync()) {
    stderr.writeln('$filepath:1:1: error: File not found');
    exit(1);
  }

  String code;
  try {
    code = file.readAsStringSync(encoding: utf8);
  } catch (e) {
    stderr.writeln('$filepath:1:1: error: Cannot read file: $e');
    exit(1);
  }

  final res = checkKhmerCode(code, filepath: filepath);
  if (res.isSuccess) {
    stdout.writeln('✓ វេយ្យាករណ៍ត្រឹមត្រូវ (Syntax OK): $filepath (${res.tokensCount} tokens)');
    exit(0);
  } else {
    if (res.diagnostic != null) {
      stderr.writeln(res.diagnostic);
    }
    if (res.error != null) {
      stderr.writeln(res.error);
    }
    exit(1);
  }
}

Future<void> runWatch(String filepath) async {
  final file = File(filepath);
  if (!file.existsSync()) {
    stderr.writeln('កំហុស/Error: មិនរកឃើញឯកសារ/File not found: $filepath');
    exit(1);
  }

  stdout.writeln('👀 កំពុងតាមដាន (Watching): $filepath');
  stdout.writeln('ចុច Ctrl+C ដើម្បីបញ្ឈប់ (Press Ctrl+C to stop)...');
  stdout.writeln('=' * 50);

  DateTime lastMtime = DateTime.fromMillisecondsSinceEpoch(0);

  // Initial run
  void triggerRun() {
    stdout.write('\x1B[2J\x1B[H');
    final timeStr = DateTime.now().toIso8601String().substring(11, 19);
    stdout.writeln('[$timeStr] ដំណើរការកូដ/Running: $filepath');
    stdout.writeln('-' * 50);

    try {
      final code = file.readAsStringSync(encoding: utf8);
      final res = runKhmerCode(code, filepath: filepath);
      if (res.stdout.isNotEmpty) {
        stdout.write(res.stdout);
      }
      if (!res.isSuccess) {
        if (res.diagnostic != null) {
          stderr.writeln(res.diagnostic);
        }
        if (res.error != null) {
          stderr.writeln(res.error);
        }
      }
    } catch (e) {
      stderr.writeln('កំហុស/Error: $e');
    }
    stdout.writeln('-' * 50);
  }

  try {
    lastMtime = file.lastModifiedSync();
    triggerRun();

    while (true) {
      await Future.delayed(const Duration(milliseconds: 500));
      if (!file.existsSync()) continue;
      final mtime = file.lastModifiedSync();
      if (mtime.isAfter(lastMtime)) {
        lastMtime = mtime;
        triggerRun();
      }
    }
  } on ProcessException {
    stdout.writeln('\nបានបញ្ឈប់ការតាមដាន / Stopped watching.');
  }
}

void runTokens(String filepath) {
  final file = File(filepath);
  if (!file.existsSync()) {
    stderr.writeln('កំហុស/Error: មិនរកឃើញឯកសារ: $filepath');
    exit(1);
  }

  final code = file.readAsStringSync(encoding: utf8);
  try {
    final lexer = Lexer(code);
    final tokens = lexer.tokenize();
    stdout.writeln('--- Tokens for $filepath (${tokens.length} total) ---');
    for (var i = 0; i < tokens.length; i++) {
      final tok = tokens[i];
      final idxStr = i.toString().padLeft(3, '0');
      final lineStr = tok.line.toString().padLeft(3, '0');
      final colStr = tok.column.toString().padLeft(2, '0');
      final typeStr = tok.type.name.padRight(15, ' ');
      final valStr = tok.value is String ? '"${tok.value}"' : tok.value.toString();
      stdout.writeln('$idxStr | L$lineStr:C$colStr | $typeStr | $valStr');
    }
  } on KhmerLangError catch (e) {
    stderr.writeln(e.compilerDiagnostic());
    exit(1);
  }
}

void runAst(String filepath) {
  final file = File(filepath);
  if (!file.existsSync()) {
    stderr.writeln('កំហុស/Error: មិនរកឃើញឯកសារ: $filepath');
    exit(1);
  }

  final code = file.readAsStringSync(encoding: utf8);
  try {
    final lexer = Lexer(code);
    final tokens = lexer.tokenize();
    final parser = Parser(tokens);
    final ast = parser.parse();
    stdout.writeln('--- AST for $filepath ---');
    for (final node in ast) {
      stdout.writeln(node);
    }
  } on KhmerLangError catch (e) {
    stderr.writeln(e.compilerDiagnostic());
    exit(1);
  }
}

void runInit(String projectPath) {
  final targetDir = Directory(projectPath).absolute;
  targetDir.createSync(recursive: true);

  final mainKhmerFile = File('${targetDir.path}/main.khmer');
  if (!mainKhmerFile.existsSync()) {
    const sampleCode = '''# កម្មវិធី KhmerLang ដំបូងរបស់ខ្ញុំ
តាំង អ្នកប្រើប្រាស់ = "អ្នកអភិវឌ្ឍន៍ខ្មែរ"
បង្ហាញ("ជម្រាបសួរ", អ្នកប្រើប្រាស់)
បង្ហាញ("សូមស្វាគមន៍មកកាន់ពិភពសរសេរកូដជាភាសាខ្មែរ!")

# ឧទាហរណ៍គណនាលេខ
តាំង ក = ១៥
តាំង ខ = ៥
បង្ហាញ("ផលបូក ក + ខ =", ក + ខ)
''';
    mainKhmerFile.writeAsStringSync(sampleCode, encoding: utf8);
  }

  // Setup VS Code tasks in project
  final vscodeDir = Directory('${targetDir.path}/.vscode');
  vscodeDir.createSync(recursive: true);
  final tasksFile = File('${vscodeDir.path}/tasks.json');
  if (!tasksFile.existsSync()) {
    const encoder = JsonEncoder.withIndent('  ');
    tasksFile.writeAsStringSync(encoder.convert(getVsCodeTasks()));
  }

  stdout.writeln('✓ បានបង្កើតគម្រោង KhmerLang ជោគជ័យក្នុង: ${targetDir.path}');
  stdout.writeln('  ├── main.khmer            (ឯកសារកូដគំរូដំបូង)');
  stdout.writeln('  └── .vscode/tasks.json    (ការកំណត់ Run Task សម្រាប់ VS Code / Cursor)');
  stdout.writeln('\nរបៀបដំណើរការ:');
  if (projectPath != '.') {
    stdout.writeln('  cd $projectPath');
  }
  stdout.writeln('  khmer main.khmer');
}

void handleEditorCmd(String subcommand, List<String> extraArgs) {
  if (subcommand == 'list' || subcommand == 'help' || subcommand == '--help') {
    stdout.writeln('''
ឧបករណ៍កំណត់កម្មវិធីសរសេរកូដ / KhmerLang Editor Configurations:
  khmer editor vscode        : ដំឡើង extension ទៅក្នុង VS Code / Cursor
  khmer editor vim           : បង្ហាញ ឬបង្កើត config សម្រាប់ Vim / Neovim
  khmer editor sublime       : បង្ហាញ ឬបង្កើត config សម្រាប់ Sublime Text
  khmer editor nano          : បង្ហាញ ឬបង្កើត config សម្រាប់ GNU Nano
  khmer editor export [dir]  : Export រាល់ editor configs ទាំងអស់ទៅក្នុង Folder
''');
    return;
  }

  if (subcommand == 'vscode' || subcommand == 'cursor') {
    final target = extraArgs.isNotEmpty ? extraArgs[0] : null;
    try {
      final installedPath = installVsCodeExtension(target);
      stdout.writeln('✓ បានដំឡើង KhmerLang extension សម្រាប់ VS Code/Cursor ជោគជ័យ!');
      stdout.writeln('  ទីតាំង/Location: $installedPath');
      stdout.writeln('  សូម Restart ឬ Reload VS Code ដើម្បីដំណើរការ Syntax Highlighting ពេញលេញ។');
    } catch (e) {
      stderr.writeln('កំហុស/Error: $e');
      exit(1);
    }
    return;
  }

  if (subcommand == 'vim' || subcommand == 'neovim') {
    final home = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '';
    final vimDir = Directory('$home/.vim');
    final syntaxDir = Directory('${vimDir.path}/syntax');
    final ftdetectDir = Directory('${vimDir.path}/ftdetect');
    syntaxDir.createSync(recursive: true);
    ftdetectDir.createSync(recursive: true);

    File('${syntaxDir.path}/khmer.vim').writeAsStringSync(getVimSyntax(), encoding: utf8);
    File('${ftdetectDir.path}/khmer.vim').writeAsStringSync('au BufRead,BufNewFile *.khmer,*.km set filetype=khmer\n', encoding: utf8);

    stdout.writeln('✓ បានដំឡើង Vim syntax & ftdetect ក្នុង ${vimDir.path}');
    stdout.writeln('  ├── syntax/khmer.vim');
    stdout.writeln('  └── ftdetect/khmer.vim');
    return;
  }

  if (subcommand == 'sublime') {
    final outDir = extraArgs.isNotEmpty ? extraArgs[0] : '.';
    Directory(outDir).createSync(recursive: true);
    File('$outDir/Khmer.sublime-syntax').writeAsStringSync(getSublimeSyntax(), encoding: utf8);
    const encoder = JsonEncoder.withIndent('  ');
    File('$outDir/Khmer.sublime-build').writeAsStringSync(encoder.convert(getSublimeBuild()), encoding: utf8);

    stdout.writeln('✓ បានបង្កើត Sublime Text syntax and build system ក្នុង $outDir');
    stdout.writeln('  ├── Khmer.sublime-syntax');
    stdout.writeln('  └── Khmer.sublime-build');
    return;
  }

  if (subcommand == 'nano') {
    final nanoConf = getNanoSyntax();
    final home = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '';
    final nanorcFile = File('$home/.nanorc');
    const includeLine = 'include ~/.nano/khmer.nanorc\n';
    final nanoDir = Directory('$home/.nano');
    nanoDir.createSync(recursive: true);
    final khmerNanoFile = File('${nanoDir.path}/khmer.nanorc');

    khmerNanoFile.writeAsStringSync(nanoConf, encoding: utf8);

    bool alreadyIncluded = false;
    if (nanorcFile.existsSync()) {
      final content = nanorcFile.readAsStringSync(encoding: utf8);
      if (content.contains('khmer.nanorc')) {
        alreadyIncluded = true;
      }
    }

    if (!alreadyIncluded) {
      nanorcFile.writeAsStringSync('\n# KhmerLang Syntax\n$includeLine', mode: FileMode.append, encoding: utf8);
    }

    stdout.writeln('✓ បានដំឡើង Nano syntax highlighting ក្នុង ${khmerNanoFile.path} និង update ${nanorcFile.path}');
    return;
  }

  if (subcommand == 'export') {
    final outDir = extraArgs.isNotEmpty ? extraArgs[0] : 'editors';
    final dir = Directory(outDir);
    dir.createSync(recursive: true);

    // VS Code
    installVsCodeExtension('$outDir/vscode/khmerlang');
    // Vim
    final vimDir = Directory('$outDir/vim');
    vimDir.createSync(recursive: true);
    File('${vimDir.path}/khmer.vim').writeAsStringSync(getVimSyntax(), encoding: utf8);
    // Sublime
    final sublimeDir = Directory('$outDir/sublime');
    sublimeDir.createSync(recursive: true);
    File('${sublimeDir.path}/Khmer.sublime-syntax').writeAsStringSync(getSublimeSyntax(), encoding: utf8);
    const encoder = JsonEncoder.withIndent('  ');
    File('${sublimeDir.path}/Khmer.sublime-build').writeAsStringSync(encoder.convert(getSublimeBuild()), encoding: utf8);
    // Nano
    File('$outDir/khmer.nanorc').writeAsStringSync(getNanoSyntax(), encoding: utf8);

    stdout.writeln("✓ បាន Export Editor Configs ទាំងអស់ទៅក្នុង '$outDir/' ជោគជ័យ!");
    return;
  }

  stderr.writeln("កំហុស/Error: មិនស្គាល់ពាក្យបញ្ជា editor '$subcommand'. វាយ 'khmer editor list' ដើម្បីមើលបញ្ជី។");
}

void printHelp() {
  stdout.writeln('''KhmerLang (ភាសាខ្មែរ) CLI v$khmerLangVersion [Dart Native Engine]

ការប្រើប្រាស់ទូទៅ / Usage:
  khmer <file.khmer>            : ដំណើរការឯកសារកូដ / Run script file
  khmer run <file.khmer>        : ដំណើរការឯកសារកូដ / Run script file
  khmer -e "<code>"             : ដំណើរការកូដ string ផ្ទាល់ / Run inline code string
  cat file.khmer | khmer -      : ដំណើរការកូដពី Standard Input (Pipe)

ឧបករណ៍អភិវឌ្ឍន៍ & Text Editors / Developer & Editor Tools:
  khmer check <file.khmer>      : ពិនិត្យវេយ្យាករណ៍ដោយមិនរ៉ាន់ (Syntax check / lint)
  khmer watch <file.khmer>      : តាមដាន និងរ៉ាន់កូដស្វ័យប្រវត្តពេល Save (Live-reload)
  khmer init [project_name]     : បង្កើត Project ថ្មីជាមួយ setup សម្រាប់ VS Code / Cursor
  khmer editor vscode           : ដំឡើង Syntax Highlighting ទៅកាន់ VS Code / Cursor
  khmer editor vim              : ដំឡើង Syntax Highlighting ទៅកាន់ Vim / Neovim
  khmer editor sublime          : បង្កើត Syntax & Build System សម្រាប់ Sublime Text
  khmer editor nano             : ដំឡើង Syntax Highlighting ទៅកាន់ GNU Nano
  khmer editor export [dir]     : Export Editor Configs ទាំងអស់

ការកំណត់ Terminal & Font / Terminal & Font Tools:
  khmer terminal                : ពិនិត្យ Font និងការកំណត់ Terminal សម្រាប់ភាសាខ្មែរ
  khmer terminal --reset        : លុបការកំណត់ Font override និងស្តារការកំណត់ដើមក្នុង VS Code

ការត្រួតពិនិត្យ / Diagnostics:
  khmer tokens <file.khmer>     : បង្ហាញតារាង Tokens (Token stream)
  khmer ast <file.khmer>        : បង្ហាញមែកធាង AST (Syntax Tree)
  khmer repl                    : បើក Interactive Shell
  khmer --version               : បង្ហាញជំនាន់
  khmer --help                  : បង្ហាញជំនួយនេះ
''');
}
