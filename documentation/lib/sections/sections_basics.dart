import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/code_card.dart';

class BasicsSections extends StatelessComponent {
  const BasicsSections({super.key});

  @override
  Component build(BuildContext context) {
    return .fragment([
      // Section: Variables and Data Types
      section(classes: 'doc-section', id: 'variables', [
        h2(classes: 'section-heading', [
          text('អថេរ និងប្រភេទតម្លៃ (Variables & Data Types) '),
          a(href: '#variables', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('នៅក្នុងភាសាខ្មែរ យើងប្រើពាក្យគន្លឹះ '),
          code([text('តាំង')]),
          text(' (Let) ដើម្បីប្រកាសអថេរ។ អថេរក្នុង KhmerLang គឺ dynamic-typed មានន័យថាអ្នកអាចផ្ទុកទិន្នន័យជា លេខ, អក្សរ (String), Boolean, ឬ Null បានដោយសេរី។'),
        ]),
        ul([
          li([
            strong([text('លេខ (Numbers): ')]),
            text('គាំទ្រទាំងលេខអារ៉ាប់ ('),
            code([text('10')]),
            text(', '),
            code([text('3.14')]),
            text(') និងលេខខ្មែរ ('),
            code([text('១០')]),
            text(', '),
            code([text('៣.១៤')]),
            text(')។'),
          ]),
          li([
            strong([text('អក្សរ (Strings): ')]),
            text('សរសេរនៅចន្លោះសញ្ញាសម្រង់ '),
            code([text('"..."')]),
            text(' ឬ '),
            code([text('\'...\'')]),
            text('។'),
          ]),
          li([
            strong([text('ប៊ូលីន (Booleans): ')]),
            text('ប្រើពាក្យគន្លឹះ '),
            code([text('ពិត')]),
            text(' (True) និង '),
            code([text('មិនពិត')]),
            text(' (False)។'),
          ]),
          li([
            strong([text('ទទេ (Null): ')]),
            text('ប្រើពាក្យគន្លឹះ '),
            code([text('ទទេ')]),
            text(' សម្រាប់តម្លៃដែលគ្មានទិន្នន័យ។'),
          ]),
        ]),

        const CodeCard(
          title: 'variables.khmer',
          lang: 'KHMER',
          code: '# ប្រកាសអថេរផ្សេងៗ\nតាំង ឈ្មោះ = "វ៉េងឈួង"\nតាំង អាយុ = ២១\nតាំង ជាសិស្ស = ពិត\nតាំង ការងារ = ទទេ\n\nបង្ហាញ("ឈ្មោះ:", ឈ្មោះ)\nបង្ហាញ("អាយុ:", អាយុ)\nបង្ហាញ("ស្ថានភាពជានិស្សិត:", ជាសិស្ស)\nបង្ហាញ("ការងារបច្ចុប្បន្ន:", ការងារ)',
        ),
      ]),

      // Section: Numerals & Operators
      section(classes: 'doc-section', id: 'numerals', [
        h2(classes: 'section-heading', [
          text('លេខខ្មែរ & ប្រមាណវិធី (Khmer Numerals & Math) '),
          a(href: '#numerals', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('ចំណុចអស្ចារ្យបំផុតរបស់ KhmerLang គឺការគាំទ្រលេខខ្មែរ '),
          strong([text('០, ១, ២, ៣, ៤, ៥, ៦, ៧, ៨, ៩')]),
          text(' ជាលេខពិតប្រាកដក្នុងកម្រិត Lexer និង Parser។ អ្នកអាចយកលេខខ្មែរមកបូក ដក គុណ ចែក ឬប្រៀបធៀបបានដោយរលូន!'),
        ]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([text('ប្រមាណវិធី (Operator)')]),
                th([text('អត្ថន័យ (Description)')]),
                th([text('ឧទាហរណ៍ (Example)')]),
                th([text('លទ្ធផល (Result)')]),
              ]),
            ]),
            tbody([
              tr([
                td([code([text('+')])]),
                td([text('បូកលេខ ឬភ្ជាប់អក្សរ')]),
                td([code([text('១០ + ៥')])]),
                td([code([text('១៥')])]),
              ]),
              tr([
                td([code([text('-')])]),
                td([text('ដកលេខ')]),
                td([code([text('២០ - ៧')])]),
                td([code([text('១៣')])]),
              ]),
              tr([
                td([code([text('*')])]),
                td([text('គុណលេខ')]),
                td([code([text('៦ * ៤')])]),
                td([code([text('២៤')])]),
              ]),
              tr([
                td([code([text('/')])]),
                td([text('ចែកលេខ')]),
                td([code([text('៥០ / ២')])]),
                td([code([text('២៥')])]),
              ]),
              tr([
                td([code([text('%')])]),
                td([text('សំណល់នៃការចែក (Modulo)')]),
                td([code([text('១០ % ៣')])]),
                td([code([text('១')])]),
              ]),
              tr([
                td([code([text('==')]), text(', '), code([text('!=')])]),
                td([text('ស្មើគ្នា, មិនស្មើគ្នា')]),
                td([code([text('៥ == ៥')])]),
                td([code([text('ពិត')])]),
              ]),
              tr([
                td([code([text('និង')]), text(', '), code([text('ឬ')]), text(', '), code([text('មិន')])]),
                td([text('តក្កវិជ្ជា AND, OR, NOT')]),
                td([code([text('(៥ > ២) និង (៣ < ៤)')])]),
                td([code([text('ពិត')])]),
              ]),
            ]),
          ]),
        ]),

        const CodeCard(
          title: 'khmer_math.khmer',
          lang: 'KHMER',
          code: '# ប្រមាណវិធីជាមួយលេខខ្មែរ\nតាំង ក = ១៥\nតាំង ខ = ៥\n\nបង្ហាញ("ផលបូក:", ក + ខ)\nបង្ហាញ("ផលដក:", ក - ខ)\nបង្ហាញ("ផលគុណ:", ក * ខ)\nបង្ហាញ("ផលចែក:", ក / ខ)\nបង្ហាញ("តើ ក ធំជាង ខ ឬទេ?", ក > ខ)',
        ),
      ]),

      // Section: Punctuations
      section(classes: 'doc-section', id: 'punctuations', [
        h2(classes: 'section-heading', [
          text('សញ្ញាវណ្ណយុត្តិ & បញ្ចប់បន្ទាត់ (Punctuations) '),
          a(href: '#punctuations', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('KhmerLang បត់បែនតាមរចនាប័ទ្មខ្មែរ ដោយអនុញ្ញាតឱ្យប្រើសញ្ញាវណ្ណយុត្តិខ្មែរសម្រាប់បញ្ចប់ប្រយោគ ឬកំណត់លក្ខខណ្ឌ៖'),
        ]),
        ul([
          li([
            code([text('។')]),
            text(' (ខណ្ឌ) ឬ '),
            code([text(';')]),
            text(' (Semicolon)៖ ប្រើសម្រាប់បញ្ចប់ប្រយោគ (Statement Terminator)។ ក៏អាចរំលងបានដែរប្រសិនបើចុះបន្ទាត់ថ្មី។'),
          ]),
          li([
            code([text('៕')]),
            text(' (បរិយោសាន)៖ សញ្ញាបញ្ចប់កថាខណ្ឌ ឬបញ្ចប់កម្មវិធី។'),
          ]),
          li([
            code([text('៖')]),
            text(' (គូសពីរចុច)៖ ប្រើសម្រាប់កំណត់ប្លុកកូដ ឬវិធីសាស្ត្រ។'),
          ]),
        ]),

        const CodeCard(
          title: 'punctuations.khmer',
          lang: 'KHMER',
          code: '# ការប្រើសញ្ញាខណ្ឌខ្មែរ (។)\nតាំង ពិន្ទុ = ៩៥។\nតាំង និទ្ទេស = "A"។\n\nបង្ហាញ("ទទួលបានពិន្ទុ:", ពិន្ទុ)។\nបង្ហាញ("និទ្ទេស:", និទ្ទេស)។',
        ),
      ]),
    ]);
  }
}
