import 'package:flutter_test/flutter_test.dart';
import 'package:khmer_ide/engine/runner.dart';

void main() {
  group('KhmerLang Engine Dart Implementation Tests', () {
    test('1. Hello World and Variables', () {
      const code = '''
តាំង សារ = "ជម្រាបសួរ ពិភពលោក!"
បង្ហាញ(សារ)
តាំង ឈ្មោះ = "វ៉េងឈួង"
តាំង អាយុ = ២១
បង្ហាញ("ខ្ញុំឈ្មោះ:", ឈ្មោះ)
បង្ហាញ("អាយុរបស់ខ្ញុំគឺ:", អាយុ, "ឆ្នាំ")
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ជម្រាបសួរ ពិភពលោក!'));
      expect(res.stdout, contains('ខ្ញុំឈ្មោះ: វ៉េងឈួង'));
      expect(res.stdout, contains('អាយុរបស់ខ្ញុំគឺ: ២១ ឆ្នាំ'));
    });

    test('2. Khmer Numerals & Math', () {
      const code = '''
តាំង ក = ១០
តាំង ខ = ២៥.៥
តាំង ផលបូក = ក + ខ
បង្ហាញ("ផលបូក =", ផលបូក)
តាំង គុណ = ក * ៣
បង្ហាញ("គុណ =", គុណ)
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ផលបូក = ៣៥.៥'));
      expect(res.stdout, contains('គុណ = ៣០'));
    });

    test('3. Functions and Recursion (Fibonacci)', () {
      const code = '''
អនុគមន៍ បូក(a, b) {
    ត្រឡប់ a + b
}
តាំង លទ្ធផល = បូក(១៥, ៣៥)
បង្ហាញ("១៥ + ៣៥ =", លទ្ធផល)

អនុគមន៍ ហ្វីបូណាស៊ី(n) {
    បើ (n <= ១) {
        ត្រឡប់ n
    }
    ត្រឡប់ ហ្វីបូណាស៊ី(n - ១) + ហ្វីបូណាស៊ី(n - ២)
}
បង្ហាញ("fib(7) =", ហ្វីបូណាស៊ី(៧))
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('១៥ + ៣៥ = ៥០'));
      expect(res.stdout, contains('fib(7) = ១៣'));
    });

    test('4. OOP Classes, Methods, Inheritance', () {
      const code = '''
ថ្នាក់ មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
    }
    អនុគមន៍ ណែនាំខ្លួន() {
        បង្ហាញ("ជម្រាបសួរ! ខ្ញុំឈ្មោះ", នេះ.ឈ្មោះ, "អាយុ", នេះ.អាយុ, "ឆ្នាំ")
    }
}

ថ្នាក់ សិស្ស បន្តពី មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ, សាលា) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
        នេះ.សាលា = សាលា
    }
    អនុគមន៍ បង្ហាញព័ត៌មាន() {
        បង្ហាញ("សិស្សឈ្មោះ:", នេះ.ឈ្មោះ, "រៀននៅ:", នេះ.សាលា)
    }
}

តាំង ស១ = ថ្មី សិស្ស("សុខា", ២០, "វិទ្យាល័យបាត់ដំបង")
ស១.ណែនាំខ្លួន()
ស១.បង្ហាញព័ត៌មាន()
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ជម្រាបសួរ! ខ្ញុំឈ្មោះ សុខា អាយុ ២០ ឆ្នាំ'));
      expect(res.stdout, contains('សិស្សឈ្មោះ: សុខា រៀននៅ: វិទ្យាល័យបាត់ដំបង'));
    });

    test('5. Loops and Conditions', () {
      const code = '''
តាំង ផលបូក = ០
សម្រាប់ (តាំង i = ១; i <= ៥; i = i + ១) {
    ផលបូក = ផលបូក + i
}
បង្ហាញ("ផលបូក ១ ដល់ ៥ =", ផលបូក)
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ផលបូក ១ ដល់ ៥ = ១៥'));
    });

    test('6. Arrays and Built-ins', () {
      const code = '''
តាំង បញ្ជី = [១, ២, ៣]
បន្ថែម(បញ្ជី, ៤)
បង្ហាញ("ប្រវែង:", ប្រវែង(បញ្ជី))
បង្ហាញ("ធាតុទីមួយ:", បញ្ជី[០])
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ប្រវែង: ៤'));
      expect(res.stdout, contains('ធាតុទីមួយ: ១'));
    });

    test('7. Math Built-ins', () {
      const code = '''
តាំង sq = ឬសការ៉េ(១៦)
តាំង p = ស្វ័យគុណ(២, ៤)
តាំង r = បង្គត់(៤.៧)
តាំង mx = អតិបរមា(១០, ២៥, ៧)
តាំង mn = អប្បបរមា(១០, ២៥, ៧)
បង្ហាញ(sq, p, r, mx, mn)
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('៤ ១៦ ៥ ២៥ ៧'));
    });

    test('8. String Built-ins', () {
      const code = '''
តាំង ដើម = "  សួស្តី ខ្មែរ  "
តាំង ស្អាត = សម្អាត(ដើម)
តាំង ពាក្យ = ពុះ(ស្អាត, " ")
តាំង ធំ = អក្សរធំ("hello")
បង្ហាញ(ស្អាត, ពាក្យ[០], ធំ)
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('សួស្តី ខ្មែរ'));
      expect(res.stdout, contains('សួស្តី'));
      expect(res.stdout, contains('HELLO'));
    });

    test('9. Array Operations & Sorting', () {
      const code = '''
តាំង បញ្ជី = [៥, ៣, ៨, ១]
តាំង តម្រៀបរួច = តម្រៀប(បញ្ជី)
តាំង បញ្ច្រាស = ត្រឡប់បញ្ជី(តម្រៀបរួច)
តាំង ភ្ជាប់គ្នា = ភ្ជាប់(តម្រៀបរួច, "-")
បង្ហាញ(តម្រៀបរួច, បញ្ច្រាស, ភ្ជាប់គ្នា)
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('[១, ៣, ៥, ៨]'));
      expect(res.stdout, contains('[៨, ៥, ៣, ១]'));
      expect(res.stdout, contains('១-៣-៥-៨'));
    });

    test('10. System & Input Built-ins', () {
      const code = '''
តាំង ឈ្មោះ = អាន("ឈ្មោះ?")
បង្ហាញ("ស្វាគមន៍", ឈ្មោះ)
''';
      final res = runKhmerCode(code, stdinRead: (p) => 'មករា');
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ស្វាគមន៍ មករា'));
    });

    test('11. OOP Getters and Setters', () {
      const code = '''
ថ្នាក់ គណនី {
    បង្កើត(ម្ចាស់, សមតុល្យ) {
        នេះ._ម្ចាស់ = ម្ចាស់;
        នេះ._សមតុល្យ = សមតុល្យ;
    }

    យក ម្ចាស់ {
        ត្រឡប់ នេះ._ម្ចាស់;
    }

    យក សមតុល្យ {
        ត្រឡប់ នេះ._សមតុល្យ;
    }

    ដាក់ សមតុល្យ(ប្រាក់ថ្មី) {
        បើ (ប្រាក់ថ្មី >= ០) {
            នេះ._សមតុល្យ = ប្រាក់ថ្មី;
        }
    }
}

តាំង acc = ថ្មី គណនី("សុក", ១០០);
បង្ហាញ("ម្ចាស់:", acc.ម្ចាស់);
បង្ហាញ("សមតុល្យ:", acc.សមតុល្យ);
acc.សមតុល្យ = ២៥០;
បង្ហាញ("សមតុល្យថ្មី:", acc.សមតុល្យ);
''';
      final res = runKhmerCode(code);
      expect(res.isSuccess, true, reason: res.error);
      expect(res.stdout, contains('ម្ចាស់: សុក'));
      expect(res.stdout, contains('សមតុល្យ: ១០០'));
      expect(res.stdout, contains('សមតុល្យថ្មី: ២៥០'));
    });
  });
}

