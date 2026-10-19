import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/code_card.dart';

class ControlFlowSections extends StatelessComponent {
  const ControlFlowSections({super.key});

  @override
  Component build(BuildContext context) {
    return .fragment([
      // Section: Conditionals
      section(classes: 'doc-section', id: 'conditionals', [
        h2(classes: 'section-heading', [
          text('លក្ខខណ្ឌ បើ...ឬបើ...ផ្សេងទៀត (Conditionals) '),
          a(href: '#conditionals', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('ការសម្រេចចិត្តក្នុងកូដត្រូវបានគ្រប់គ្រងដោយពាក្យគន្លឹះ '),
          code([text('បើ')]),
          text(' (if), '),
          code([text('ឬបើ')]),
          text(' (else if), និង '),
          code([text('ផ្សេងទៀត')]),
          text(' (else)៖'),
        ]),

        const CodeCard(
          title: 'conditions.khmer',
          lang: 'KHMER',
          code: 'តាំង ពិន្ទុ = ៨២\n\nបើ (ពិន្ទុ >= ៩០) {\n    បង្ហាញ("និទ្ទេស A — ល្អប្រសើរណាស់!")\n} ឬបើ (ពិន្ទុ >= ៨០) {\n    បង្ហាញ("និទ្ទេស B — ល្អណាស់!")\n} ឬបើ (ពិន្ទុ >= ៧០) {\n    បង្ហាញ("និទ្ទេស C — ល្អបង្គួរ!")\n} ផ្សេងទៀត {\n    បង្ហាញ("ត្រូវខិតខំប្រឹងប្រែងបន្ថែមទៀត!")\n}',
        ),
      ]),

      // Section: Loops
      section(classes: 'doc-section', id: 'while-loop', [
        h2(classes: 'section-heading', [
          text('រង្វិលជុំ ខណៈ (While Loops) '),
          a(href: '#while-loop', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('រង្វិលជុំ '),
          code([text('ខណៈ')]),
          text(' (while loop) ដំណើរការកូដសារឡើងវិញដរាបណាលក្ខខណ្ឌនៅតែមានតម្លៃ '),
          code([text('ពិត')]),
          text('៖'),
        ]),

        const CodeCard(
          title: 'while_loop.khmer',
          lang: 'KHMER',
          code: '# រាប់ថយក្រោយពី ៥ ដល់ ១\nតាំង ចំនួន = ៥\n\nខណៈ (ចំនួន > ០) {\n    បង្ហាញ("រាប់ថយក្រោយ:", ចំនួន)\n    ចំនួន = ចំនួន - ១\n}\n\nបង្ហាញ("🚀 បាញ់បង្ហោះជោគជ័យ!")',
        ),
      ]),

      // Section: For Loops
      section(classes: 'doc-section', id: 'for-loop', [
        h2(classes: 'section-heading', [
          text('រង្វិលជុំ សម្រាប់ (For Loops) '),
          a(href: '#for-loop', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('រង្វិលជុំ '),
          code([text('សម្រាប់')]),
          text(' (for loop) ប្រើសម្រាប់ការរាប់ចំនួនជុំដែលមានកំណត់ច្បាស់លាស់៖'),
        ]),

        const CodeCard(
          title: 'for_loop.khmer',
          lang: 'KHMER',
          code: '# មេគុណ ៥\nបង្ហាញ("--- តារាងមេគុណ ៥ ---")\n\nសម្រាប់ (តាំង i = ១; i <= ៥; i = i + ១) {\n    បង្ហាញ("៥ x", i, "=", ៥ * i)\n}',
        ),
      ]),
    ]);
  }
}
