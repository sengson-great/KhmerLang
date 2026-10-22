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

    test('runKhmerCode executes OOP class methods using អនុគមន៍', () {
      const code = '''
ថ្នាក់ សត្វ {
    អនុគមន៍ យំ() {
        បង្ហាញ("មែវ!");
    }
}
តាំង ឆ្មា = ថ្មី សត្វ();
ឆ្មា.យំ();
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue);
      expect(res.stdout, contains('មែវ!'));
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
      expect(res.stdout, contains('ខ្មែរចារ (KhmerChar) version 1.0.0 [Dart Native]'));
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

  group('Built-in Functions Tests', () {
    test('Math built-ins: abs, sqrt, pow, round, max, min, random', () {
      const code = '''
តាំង a = ដាច់ខាត(-១០);
តាំង b = ឬសការ៉េ(២៥);
តាំង c = ស្វ័យគុណ(២, ៣);
តាំង d = បង្គត់(៤.៧);
តាំង e = បង្គត់ចុះ(៤.៩);
តាំង f = បង្គត់ឡើង(៤.១);
តាំង g = អតិបរមា(១០, ២០, ៥);
តាំង h = អប្បបរមា(១០, ២០, ៥);
បង្ហាញ(a, b, c, d, e, f, g, h);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout.trim(), equals('១០ ៥ ៨ ៥ ៤ ៥ ២០ ៥'));
    });

    test('Type conversion built-ins: toNum, toStr, toBool', () {
      const code = '''
តាំង num1 = ជាលេខ("១២៣");
តាំង str1 = ជាអក្សរ(num1);
តាំង b1 = ជាតក្ក(១);
តាំង b2 = ជាតក្ក(០);
បង្ហាញ(num1, str1, b1, b2);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout.trim(), equals('១២៣ ១២៣ ពិត មិនពិត'));
    });

    test('String built-ins: split, substr, replace, trim, upper, lower', () {
      const code = '''
តាំង s = "  ខ្មែរ ចារ  ";
តាំង trimmed = សម្អាត(s);
តាំង parts = ពុះ(trimmed, " ");
តាំង rep = ជំនួស(trimmed, "ចារ", "ភាសា");
តាំង sub = កាត់(rep, ០, ៤);
តាំង up = អក្សរធំ("hello");
តាំង low = អក្សរតូច("WORLD");
បង្ហាញ(trimmed, parts, rep, sub, up, low);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout, contains('ខ្មែរ ចារ'));
      expect(res.stdout, contains('ខ្មែរ ភាសា'));
      expect(res.stdout, contains('HELLO'));
      expect(res.stdout, contains('world'));
    });

    test('Array built-ins: insert, pop, remove, join, sort, reverse, indexOf, contains', () {
      const code = '''
តាំង arr = [៣, ១, ២];
តាំង sorted = តម្រៀប(arr);
តាំង reversed = ត្រឡប់បញ្ជី(sorted);
តាំង joined = ភ្ជាប់(sorted, "-");
តាំង hasTwo = មាន(arr, ២);
តាំង idx = ស្វែងរក(sorted, ៣);
បង្ហាញ(sorted, reversed, joined, hasTwo, idx);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout, contains('[១, ២, ៣]'));
      expect(res.stdout, contains('[៣, ២, ១]'));
      expect(res.stdout, contains('១-២-៣'));
      expect(res.stdout, contains('ពិត'));
      expect(res.stdout, contains('២'));
    });

    test('System built-ins: now and input with mock stdinRead', () {
      const code = '''
តាំង t = ពេលនេះ();
តាំង user = អាន("ឈ្មោះ: ");
បង្ហាញ("សួស្តី", user);
''';
      final res = runKhmerCode(
        code,
        stdinRead: (prompt) => 'សុខា',
      );
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout, contains('សួស្តី សុខា'));
    });
  });

  group('OOP Getter and Setter Tests', () {
    test('Getter and Setter with យក and ដាក់', () {
      const code = '''
ថ្នាក់ រង្វង់ {
    បង្កើត(កាំ) {
        នេះ._កាំ = កាំ;
    }

    យក កាំ {
        ត្រឡប់ នេះ._កាំ;
    }

    ដាក់ កាំ(តម្លៃ) {
        បើ (តម្លៃ > ០) {
            នេះ._កាំ = តម្លៃ;
        }
    }

    យក ផ្ទៃក្រឡា {
        ត្រឡប់ ៣ * នេះ._កាំ * នេះ._កាំ;
    }
}

តាំង c = ថ្មី រង្វង់(៥);
បង្ហាញ("កាំដើម:", c.កាំ);
បង្ហាញ("ផ្ទៃក្រឡាដើម:", c.ផ្ទៃក្រឡា);
c.កាំ = ១០;
បង្ហាញ("កាំថ្មី:", c.កាំ);
បង្ហាញ("ផ្ទៃក្រឡាថ្មី:", c.ផ្ទៃក្រឡា);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout, contains('កាំដើម: ៥'));
      expect(res.stdout, contains('ផ្ទៃក្រឡាដើម: ៧៥'));
      expect(res.stdout, contains('កាំថ្មី: ១០'));
      expect(res.stdout, contains('ផ្ទៃក្រឡាថ្មី: ៣០០'));
    });

    test('Getter and Setter with កំណត់, get, and set', () {
      const code = '''
ថ្នាក់ បុគ្គលិក {
    បង្កើត(ឈ្មោះ) {
        នេះ._ឈ្មោះ = ឈ្មោះ;
    }

    get ឈ្មោះ {
        ត្រឡប់ នេះ._ឈ្មោះ;
    }

    set ឈ្មោះ(តម្លៃ) {
        នេះ._ឈ្មោះ = តម្លៃ;
    }

    យក អត្តសញ្ញាណ() {
        ត្រឡប់ "ID-" + នេះ._ឈ្មោះ;
    }

    កំណត់ អត្តសញ្ញាណ(id) {
        នេះ._ឈ្មោះ = id;
    }
}

តាំង b = ថ្មី បុគ្គលិក("តារា");
បង្ហាញ(b.ឈ្មោះ);
បង្ហាញ(b.អត្តសញ្ញាណ);
b.ឈ្មោះ = "សុផល";
បង្ហាញ(b.ឈ្មោះ);
b.អត្តសញ្ញាណ = "ពិសិដ្ឋ";
បង្ហាញ(b.អត្តសញ្ញាណ);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout, contains('តារា'));
      expect(res.stdout, contains('ID-តារា'));
      expect(res.stdout, contains('សុផល'));
      expect(res.stdout, contains('ID-ពិសិដ្ឋ'));
    });

    test('Inheritance with Getters and Setters', () {
      const code = '''
ថ្នាក់ រូបរាង {
    បង្កើត(ឈ្មោះ) {
        នេះ._ឈ្មោះ = ឈ្មោះ;
    }

    យក ឈ្មោះ {
        ត្រឡប់ នេះ._ឈ្មោះ;
    }

    ដាក់ ឈ្មោះ(តម្លៃ) {
        នេះ._ឈ្មោះ = តម្លៃ;
    }
}

ថ្នាក់ ការ៉េ បន្តពី រូបរាង {
    បង្កើត(ប្រវែងជ្រុង) {
        នេះ._ឈ្មោះ = "ការ៉េ";
        នេះ._ជ្រុង = ប្រវែងជ្រុង;
    }

    យក ផ្ទៃក្រឡា {
        ត្រឡប់ នេះ._ជ្រុង * នេះ._ជ្រុង;
    }
}

តាំង k = ថ្មី ការ៉េ(៤);
បង្ហាញ(k.ឈ្មោះ);
k.ឈ្មោះ = "ការ៉េធំ";
បង្ហាញ(k.ឈ្មោះ);
បង្ហាញ(k.ផ្ទៃក្រឡា);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, isTrue, reason: res.error);
      expect(res.stdout, contains('ការ៉េ'));
      expect(res.stdout, contains('ការ៉េធំ'));
      expect(res.stdout, contains('១៦'));
    });
  });
}


