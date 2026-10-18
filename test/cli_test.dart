import 'dart:convert';
import 'dart:io';
import 'package:test/test.dart';
import 'package:khmer_lang/khmer_lang.dart';

void main() {
  group('KhmerLang Dart Engine & Runner Tests', () {
    test('runKhmerCode executes valid script and outputs stdout', () {
      final res = runKhmerCode('បង្ហាញ("ជោគជ័យ");', filepath: 'my_script.khmer');
      expect(res.isSuccess, isTrue);
      expect(res.stdout, contains('ជោគជ័យ'));
      expect(res.error, isNull);
    });

    test('checkKhmerCode validates syntax without executing', () {
      final res = checkKhmerCode('តាំង x = ១០; បង្ហាញ(x);', filepath: 'test.khmer');
      expect(res.isSuccess, isTrue);
      expect(res.tokensCount, greaterThan(0));
      expect(res.error, isNull);
    });

    test('checkKhmerCode returns compiler diagnostic on invalid syntax', () {
      final res = checkKhmerCode('តាំង x = ;', filepath: 'bad.khmer');
      expect(res.isSuccess, isFalse);
      expect(res.diagnostic, isNotNull);
      expect(res.diagnostic, startsWith('bad.khmer:'));
    });
  });

  group('KhmerLang Editor Integrations Tests', () {
    test('VS Code TextMate grammar and language config', () {
      final tm = getVsCodeTmLanguage();
      expect(tm['name'], equals('KhmerLang'));
      expect(tm['scopeName'], equals('source.khmer'));

      final conf = getVsCodeLanguageConfiguration();
      expect(conf['comments']['lineComment'], equals('#'));
    });

    test('VS Code extension installer creates required files', () {
      final tempDir = Directory.systemTemp.createTempSync('khmer_ext_test');
      try {
        final target = '${tempDir.path}/khmerlang-ext';
        final installed = installVsCodeExtension(target);
        expect(File('$installed/package.json').existsSync(), isTrue);
        expect(File('$installed/syntaxes/khmer.tmLanguage.json').existsSync(), isTrue);
        expect(File('$installed/language-configuration.json').existsSync(), isTrue);
      } finally {
        tempDir.deleteSync(recursive: true);
      }
    });

    test('Vim, Sublime, and Nano syntax configs contain Khmer keywords', () {
      final vimSyn = getVimSyntax();
      expect(vimSyn, contains('syn keyword khmerKeyword'));
      expect(vimSyn, contains('តាំង'));

      final sublimeSyn = getSublimeSyntax();
      expect(sublimeSyn, contains('scope: source.khmer'));

      final nanoSyn = getNanoSyntax();
      expect(nanoSyn, contains('syntax "khmer"'));
    });

    test('restoreVsCodeSettings removes font overrides', () {
      final tempDir = Directory.systemTemp.createTempSync('khmer_settings_test');
      try {
        final settingsFile = File('${tempDir.path}/settings.json');
        settingsFile.writeAsStringSync(jsonEncode({
          "terminal.integrated.fontFamily": "fake",
          "editor.fontFamily": "fake",
          "other": true,
        }));

        final removed = restoreVsCodeSettings(settingsFile.path);
        expect(removed.length, equals(2));

        final updated = jsonDecode(settingsFile.readAsStringSync()) as Map<String, dynamic>;
        expect(updated.containsKey('terminal.integrated.fontFamily'), isFalse);
        expect(updated.containsKey('editor.fontFamily'), isFalse);
        expect(updated['other'], isTrue);
      } finally {
        tempDir.deleteSync(recursive: true);
      }
    });

    test('detectKhmerFonts returns a list of installed font names', () {
      final fonts = detectKhmerFonts();
      expect(fonts, isA<List<String>>());
    });
  });

  group('CLI Executable Process Tests', () {
    test('khmer --version outputs Dart Native info', () async {
      final res = await Process.run('bin/khmer', ['--version']);
      expect(res.exitCode, equals(0));
      expect(res.stdout, contains('KhmerLang (ភាសាខ្មែរ) version 1.0.0 [Dart Native]'));
    });

    test('khmer -e runs inline expression', () async {
      final res = await Process.run('bin/khmer', ['-e', 'តាំង a = ៥; បង្ហាញ(a * ២);']);
      expect(res.exitCode, equals(0));
      expect(res.stdout, contains('១០'));
    });

    test('khmer examples/hello.khmer runs file', () async {
      final res = await Process.run('bin/khmer', ['examples/hello.khmer']);
      expect(res.exitCode, equals(0));
      expect(res.stdout, contains('ជម្រាបសួរ ពិភពលោក!'));
    });
  });
}
