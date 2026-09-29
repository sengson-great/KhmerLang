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
    វិធី ណែនាំខ្លួន() {
        បង្ហាញ("ជម្រាបសួរ! ខ្ញុំឈ្មោះ", នេះ.ឈ្មោះ, "អាយុ", នេះ.អាយុ, "ឆ្នាំ")
    }
}

ថ្នាក់ សិស្ស បន្តពី មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ, សាលា) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
        នេះ.សាលា = សាលា
    }
    វិធី បង្ហាញព័ត៌មាន() {
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
  });
}
