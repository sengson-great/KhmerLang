import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/code_card.dart';

class FunctionsOopSections extends StatelessComponent {
  const FunctionsOopSections({super.key});

  @override
  Component build(BuildContext context) {
    return const .fragment([
      // Section: Functions
      section(classes: 'doc-section', id: 'functions', [
        h2(classes: 'section-heading', [
          Component.text('ការបង្កើតអនុគមន៍ (Functions) '),
          a(href: '#functions', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('អ្នកអាចបង្កើតអនុគមន៍ដោយប្រើពាក្យគន្លឹះ '),
          code([Component.text('អនុគមន៍')]),
          Component.text(' និងបញ្ជូនតម្លៃត្រឡប់មកវិញដោយប្រើ '),
          code([Component.text('ត្រឡប់')]),
          Component.text(' (return)៖'),
        ]),

        CodeCard(
          title: 'functions.khmer',
          lang: 'KHMER',
          code: '# អនុគមន៍គណនាផ្ទៃក្រឡាចតុកោណកែង\nអនុគមន៍ គណនាផ្ទៃ(បណ្តោយ, ទទឹង) {\n    ត្រឡប់ បណ្តោយ * ទទឹង\n}\n\nតាំង ផ្ទៃ = គណនាផ្ទៃ(១០, ៥)\nបង្ហាញ("ផ្ទៃក្រឡាសរុបគឺ:", ផ្ទៃ, "ម៉ែត្រការ៉េ")',
        ),
      ]),

      // Section: Recursion
      section(classes: 'doc-section', id: 'recursion', [
        h2(classes: 'section-heading', [
          Component.text('Recursion (កូដ Fibonacci) '),
          a(href: '#recursion', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ខ្មែរចារ (KhmerChar) គាំទ្រការហៅអនុគមន៍ខ្លួនឯង (Recursive Functions) យ៉ាងរលូន៖'),
        ]),

        CodeCard(
          title: 'fibonacci.khmer',
          lang: 'KHMER',
          code: '# កូដរកលេខ Fibonacci តាមបែប Recursive\nអនុគមន៍ ហ្វីបូណាឈី(n) {\n    បើ (n <= ០) {\n        ត្រឡប់ ០\n    }\n    បើ (n == ១) {\n        ត្រឡប់ ១\n    }\n    ត្រឡប់ ហ្វីបូណាឈី(n - ១) + ហ្វីបូណាឈី(n - ២)\n}\n\nបង្ហាញ("--- លំដាប់ Fibonacci ពី ០ ដល់ ៧ ---")\nសម្រាប់ (តាំង i = ០; i <= ៧; i = i + ១) {\n    បង្ហាញ("F(", i, ") =", ហ្វីបូណាឈី(i))\n}',
        ),
      ]),

      // Section: OOP Classes & Methods
      section(classes: 'doc-section', id: 'classes', [
        h2(classes: 'section-heading', [
          Component.text('ថ្នាក់ & Constructor (Object-Oriented Programming) '),
          a(href: '#classes', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ខ្មែរចារ (KhmerChar) គាំទ្រការសរសេរប្រូក្រាមតាមបែប OOP ពេញលេញ។ អ្នកអាចបង្កើតគំរូថ្នាក់ដោយប្រើពាក្យគន្លឹះ '),
          code([Component.text('ថ្នាក់')]),
          Component.text(' (Class) និងបង្កើត Constructor សម្រាប់ចាប់ផ្តើមទិន្នន័យដោយប្រើ '),
          code([Component.text('បង្កើត(...)')]),
          Component.text('។ ចំណែកឯវិធីសាស្ត្រក្នុងថ្នាក់ (Methods) គឺប្រើពាក្យគន្លឹះ '),
          code([Component.text('អនុគមន៍')]),
          Component.text(' ដូចអនុគមន៍ទូទៅដែរ។'),
        ]),
        p([
          Component.text('ដើម្បីបង្កើត Instance ថ្មីនៃថ្នាក់ យើងប្រើពាក្យគន្លឹះ '),
          code([Component.text('ថ្មី')]),
          Component.text(' (New)៖'),
        ]),

        CodeCard(
          title: 'person_class.khmer',
          lang: 'KHMER',
          code: 'ថ្នាក់ មនុស្ស {\n    បង្កើត(ឈ្មោះ, អាយុ) {\n        នេះ.ឈ្មោះ = ឈ្មោះ\n        នេះ.អាយុ = អាយុ\n    }\n\n    អនុគមន៍ ណែនាំខ្លួន() {\n        បង្ហាញ("ជម្រាបសួរ! ខ្ញុំឈ្មោះ", នេះ.ឈ្មោះ, "អាយុ", នេះ.អាយុ, "ឆ្នាំ")\n    }\n}\n\nតាំង បុគ្គល១ = ថ្មី មនុស្ស("វ៉េងឈួង", ២១)\nបុគ្គល១.ណែនាំខ្លួន()',
        ),
      ]),

      // Section: OOP Inheritance
      section(classes: 'doc-section', id: 'inheritance', [
        h2(classes: 'section-heading', [
          Component.text('ការបន្តវេនថ្នាក់ (OOP Inheritance: `បន្តពី`) '),
          a(href: '#inheritance', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ការបន្តវេនពីថ្នាក់មេ (Superclass) ត្រូវបានធ្វើឡើងដោយប្រើពាក្យគន្លឹះ '),
          code([Component.text('បន្តពី')]),
          Component.text(' (extends)។ ថ្នាក់កូន (Subclass) នឹងទទួលយកលក្ខណៈសម្បត្តិ និងអនុគមន៍ពីថ្នាក់មេដោយស្វ័យប្រវត្តិ៖'),
        ]),

        CodeCard(
          title: 'inheritance.khmer',
          lang: 'KHMER',
          code: 'ថ្នាក់ សត្វ {\n    បង្កើត(ឈ្មោះ) {\n        នេះ.ឈ្មោះ = ឈ្មោះ\n    }\n\n    អនុគមន៍ ធ្វើសំឡេង() {\n        បង្ហាញ(នេះ.ឈ្មោះ, "កំពុងធ្វើសំឡេង...")\n    }\n}\n\n# ថ្នាក់ ឆ្កែ បន្តវេនពី ថ្នាក់ សត្វ\nថ្នាក់ ឆ្កែ បន្តពី សត្វ {\n    អនុគមន៍ ព្រុស() {\n        បង្ហាញ(នេះ.ឈ្មោះ, "ព្រុស: វូស! វូស!")\n    }\n}\n\nតាំង គូគី = ថ្មី ឆ្កែ("គូគី")\nគូគី.ធ្វើសំឡេង()\nគូគី.ព្រុស()',
        ),
      ]),

      // Section: OOP Getters & Setters
      section(classes: 'doc-section', id: 'getters-setters', [
        h2(classes: 'section-heading', [
          Component.text('Getter និង Setter (`យក` & `ដាក់` / `កំណត់`) '),
          a(href: '#getters-setters', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ខ្មែរចារ (KhmerChar) គាំទ្រការបង្កើត '),
          strong([Component.text('Getter')]),
          Component.text(' ដោយប្រើពាក្យគន្លឹះ '),
          code([Component.text('យក')]),
          Component.text(' (ឬ '),
          code([Component.text('get')]),
          Component.text(') និង '),
          strong([Component.text('Setter')]),
          Component.text(' ដោយប្រើពាក្យគន្លឹះ '),
          code([Component.text('ដាក់')]),
          Component.text(' ឬ '),
          code([Component.text('កំណត់')]),
          Component.text(' (ឬ '),
          code([Component.text('set')]),
          Component.text(') ដើម្បីគ្រប់គ្រង និងការពារទិន្នន័យ (Encapsulation / Computed Properties) ក្នុង Object៖'),
        ]),

        CodeCard(
          title: 'getter_setter.khmer',
          lang: 'KHMER',
          code: '''ថ្នាក់ រង្វង់ {
    បង្កើត(កាំ) {
        នេះ._កាំ = កាំ
    }

    # Getter: ចូលប្រើប្រាស់ដូច Property
    យក កាំ {
        ត្រឡប់ នេះ._កាំ
    }

    # Setter: ហៅដោយស្វ័យប្រវត្តិតាមរយៈ Assignment
    ដាក់ កាំ(តម្លៃថ្មី) {
        បើ (តម្លៃថ្មី > ០) {
            នេះ._កាំ = តម្លៃថ្មី
        } ផ្សេងទៀត {
            បង្ហាញ("កំហុស: កាំត្រូវតែធំជាង ០!")
        }
    }

    # Computed Property Getter
    យក ផ្ទៃក្រឡា {
        ត្រឡប់ ៣.១៤ * នេះ._កាំ * នេះ._កាំ
    }
}

តាំង c = ថ្មី រង្វង់(៥)
បង្ហាញ("កាំដើម:", c.កាំ)
បង្ហាញ("ផ្ទៃក្រឡា:", c.ផ្ទៃក្រឡា)

c.កាំ = ១០
បង្ហាញ("កាំថ្មី:", c.កាំ)
បង្ហាញ("ផ្ទៃក្រឡាថ្មី:", c.ផ្ទៃក្រឡា)''',
        ),
      ]),
    ]);
  }
}
