import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/code_card.dart';

class BasicsSections extends StatelessComponent {
  const BasicsSections({super.key});

  @override
  Component build(BuildContext context) {
    return const .fragment([
      // Section: Variables and Data Types
      section(classes: 'doc-section', id: 'variables', [
        h2(classes: 'section-heading', [
          Component.text('អថេរ និងប្រភេទតម្លៃ (Variables & Data Types) '),
          a(href: '#variables', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('នៅក្នុងភាសាខ្មែរ យើងប្រើពាក្យគន្លឹះ '),
          code([Component.text('តាំង')]),
          Component.text(' (Let) ដើម្បីប្រកាសអថេរ។ អថេរក្នុង ខ្មែរចារ (KhmerChar) គឺ dynamic-typed មានន័យថាអ្នកអាចផ្ទុកទិន្នន័យជា លេខ, អក្សរ (String), Boolean, ឬ Null បានដោយសេរី។'),
        ]),
        ul([
          li([
            strong([Component.text('លេខ (Numbers): ')]),
            Component.text('គាំទ្រទាំងលេខអារ៉ាប់ ('),
            code([Component.text('10')]),
            Component.text(', '),
            code([Component.text('3.14')]),
            Component.text(') និងលេខខ្មែរ ('),
            code([Component.text('១០')]),
            Component.text(', '),
            code([Component.text('៣.១៤')]),
            Component.text(')។'),
          ]),
          li([
            strong([Component.text('អក្សរ (Strings): ')]),
            Component.text('សរសេរនៅចន្លោះសញ្ញាសម្រង់ '),
            code([Component.text('"..."')]),
            Component.text(' ឬ '),
            code([Component.text('\'...\'')]),
            Component.text('។'),
          ]),
          li([
            strong([Component.text('ប៊ូលីន (Booleans): ')]),
            Component.text('ប្រើពាក្យគន្លឹះ '),
            code([Component.text('ពិត')]),
            Component.text(' (True) និង '),
            code([Component.text('មិនពិត')]),
            Component.text(' (False)។'),
          ]),
          li([
            strong([Component.text('ទទេ (Null): ')]),
            Component.text('ប្រើពាក្យគន្លឹះ '),
            code([Component.text('ទទេ')]),
            Component.text(' សម្រាប់តម្លៃដែលគ្មានទិន្នន័យ។'),
          ]),
        ]),

        CodeCard(
          title: 'variables.khmer',
          lang: 'KHMER',
          code: '# ប្រកាសអថេរផ្សេងៗ\nតាំង ឈ្មោះ = "វ៉េងឈួង"\nតាំង អាយុ = ២១\nតាំង ជាសិស្ស = ពិត\nតាំង ការងារ = ទទេ\n\nបង្ហាញ("ឈ្មោះ:", ឈ្មោះ)\nបង្ហាញ("អាយុ:", អាយុ)\nបង្ហាញ("ស្ថានភាពជានិស្សិត:", ជាសិស្ស)\nបង្ហាញ("ការងារបច្ចុប្បន្ន:", ការងារ)',
        ),
      ]),

      // Section: Numerals & Operators
      section(classes: 'doc-section', id: 'numerals', [
        h2(classes: 'section-heading', [
          Component.text('លេខខ្មែរ & ប្រមាណវិធី (Khmer Numerals & Math) '),
          a(href: '#numerals', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ចំណុចអស្ចារ្យបំផុតរបស់ ខ្មែរចារ (KhmerChar) គឺការគាំទ្រលេខខ្មែរ '),
          strong([Component.text('០, ១, ២, ៣, ៤, ៥, ៦, ៧, ៨, ៩')]),
          Component.text(' ជាលេខពិតប្រាកដក្នុងកម្រិត Lexer និង Parser។ អ្នកអាចយកលេខខ្មែរមកបូក ដក គុណ ចែក ឬប្រៀបធៀបបានដោយរលូន!'),
        ]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([Component.text('ប្រមាណវិធី (Operator)')]),
                th([Component.text('អត្ថន័យ (Description)')]),
                th([Component.text('ឧទាហរណ៍ (Example)')]),
                th([Component.text('លទ្ធផល (Result)')]),
              ]),
            ]),
            tbody([
              tr([
                td([code([Component.text('+')])]),
                td([Component.text('បូកលេខ ឬភ្ជាប់អក្សរ')]),
                td([code([Component.text('១០ + ៥')])]),
                td([code([Component.text('១៥')])]),
              ]),
              tr([
                td([code([Component.text('-')])]),
                td([Component.text('ដកលេខ')]),
                td([code([Component.text('២០ - ៧')])]),
                td([code([Component.text('១៣')])]),
              ]),
              tr([
                td([code([Component.text('*')])]),
                td([Component.text('គុណលេខ')]),
                td([code([Component.text('៦ * ៤')])]),
                td([code([Component.text('២៤')])]),
              ]),
              tr([
                td([code([Component.text('/')])]),
                td([Component.text('ចែកលេខ')]),
                td([code([Component.text('៥០ / ២')])]),
                td([code([Component.text('២៥')])]),
              ]),
              tr([
                td([code([Component.text('%')])]),
                td([Component.text('សំណល់នៃការចែក (Modulo)')]),
                td([code([Component.text('១០ % ៣')])]),
                td([code([Component.text('១')])]),
              ]),
              tr([
                td([code([Component.text('==')]), Component.text(', '), code([Component.text('!=')])]),
                td([Component.text('ស្មើគ្នា, មិនស្មើគ្នា')]),
                td([code([Component.text('៥ == ៥')])]),
                td([code([Component.text('ពិត')])]),
              ]),
              tr([
                td([code([Component.text('និង')]), Component.text(', '), code([Component.text('ឬ')]), Component.text(', '), code([Component.text('មិន')])]),
                td([Component.text('តក្កវិជ្ជា AND, OR, NOT')]),
                td([code([Component.text('(៥ > ២) និង (៣ < ៤)')])]),
                td([code([Component.text('ពិត')])]),
              ]),
            ]),
          ]),
        ]),

        CodeCard(
          title: 'khmer_math.khmer',
          lang: 'KHMER',
          code: '# ប្រមាណវិធីជាមួយលេខខ្មែរ\nតាំង ក = ១៥\nតាំង ខ = ៥\n\nបង្ហាញ("ផលបូក:", ក + ខ)\nបង្ហាញ("ផលដក:", ក - ខ)\nបង្ហាញ("ផលគុណ:", ក * ខ)\nបង្ហាញ("ផលចែក:", ក / ខ)\nបង្ហាញ("តើ ក ធំជាង ខ ឬទេ?", ក > ខ)',
        ),
      ]),

      // Section: Punctuations
      section(classes: 'doc-section', id: 'punctuations', [
        h2(classes: 'section-heading', [
          Component.text('សញ្ញាវណ្ណយុត្តិ & បញ្ចប់បន្ទាត់ (Punctuations) '),
          a(href: '#punctuations', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ខ្មែរចារ (KhmerChar) បត់បែនតាមរចនាប័ទ្មខ្មែរ ដោយអនុញ្ញាតឱ្យប្រើសញ្ញាវណ្ណយុត្តិខ្មែរសម្រាប់បញ្ចប់ប្រយោគ ឬកំណត់លក្ខខណ្ឌ៖'),
        ]),
        ul([
          li([
            code([Component.text('។')]),
            Component.text(' (ខណ្ឌ) ឬ '),
            code([Component.text(';')]),
            Component.text(' (Semicolon)៖ ប្រើសម្រាប់បញ្ចប់ប្រយោគ (Statement Terminator)។ ក៏អាចរំលងបានដែរប្រសិនបើចុះបន្ទាត់ថ្មី។'),
          ]),
          li([
            code([Component.text('៕')]),
            Component.text(' (បរិយោសាន)៖ សញ្ញាបញ្ចប់កថាខណ្ឌ ឬបញ្ចប់កម្មវិធី។'),
          ]),
          li([
            code([Component.text('៖')]),
            Component.text(' (គូសពីរចុច)៖ ប្រើសម្រាប់កំណត់ប្លុកកូដ ឬវិធីសាស្ត្រ។'),
          ]),
        ]),

        CodeCard(
          title: 'punctuations.khmer',
          lang: 'KHMER',
          code: '# ការប្រើសញ្ញាខណ្ឌខ្មែរ (។)\nតាំង ពិន្ទុ = ៩៥។\nតាំង និទ្ទេស = "A"។\n\nបង្ហាញ("ទទួលបានពិន្ទុ:", ពិន្ទុ)។\nបង្ហាញ("និទ្ទេស:", និទ្ទេស)។',
        ),
      ]),
    ]);
  }
}
