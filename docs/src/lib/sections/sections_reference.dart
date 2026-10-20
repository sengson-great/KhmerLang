import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/playground.dart';

class ReferenceSections extends StatelessComponent {
  const ReferenceSections({super.key});

  @override
  Component build(BuildContext context) {
    return const .fragment([
      // Section: Builtins
      section(classes: 'doc-section', id: 'builtins', [
        h2(classes: 'section-heading', [
          Component.text('អនុគមន៍ស្ដង់ដារ (Built-in Functions) '),
          a(href: '#builtins', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([Component.text('KhmerLang ផ្ដល់នូវអនុគមន៍ស្ដង់ដារដែលភ្ជាប់មកស្រាប់ជាមួយភាសា៖')]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([Component.text('អនុគមន៍ (Builtin)')]),
                th([Component.text('ការប្រើប្រាស់ (Usage)')]),
                th([Component.text('ការពន្យល់ (Explanation)')]),
              ]),
            ]),
            tbody([
              tr([
                td([code([Component.text('បង្ហាញ(...)')])]),
                td([code([Component.text('បង្ហាញ("តម្លៃ:", x)')])]),
                td([Component.text('បង្ហាញអត្ថបទ ឬតម្លៃអថេរនៅលើស្ថានីយ (Standard Output)')]),
              ]),
              tr([
                td([code([Component.text('ប្រវែង(...)')])]),
                td([code([Component.text('ប្រវែង("កម្ពុជា")')])]),
                td([Component.text('គណនាប្រវែងតួអក្សរ ឬចំនួនធាតុក្នុង Array')]),
              ]),
              tr([
                td([code([Component.text('ប្រភេទ(...)')])]),
                td([code([Component.text('ប្រភេទ(១២៣)')])]),
                td([Component.text('កំណត់ប្រភេទតម្លៃ (string, number, boolean, null, class, etc.)')]),
              ]),
              tr([
                td([code([Component.text('បន្ថែម(...)')])]),
                td([code([Component.text('បន្ថែម(បញ្ជី, ធាតុថ្មី)')])]),
                td([Component.text('បន្ថែមធាតុថ្មីទៅចុងបញ្ចប់នៃបញ្ជី Array')]),
              ]),
            ]),
          ]),
        ]),
      ]),

      // Section: Tools & IDEs
      section(classes: 'doc-section', id: 'ides', [
        h2(classes: 'section-heading', [
          Component.text('ឧបករណ៍អភិវឌ្ឍន៍ (Tools & IDEs) '),
          a(href: '#ides', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ដើម្បីសម្រួលដល់ការសរសេរកូដ ប្រព័ន្ធអេកូឡូស៊ី KhmerLang រួមមានឧបករណ៍ទំនើបៗជាច្រើន៖'),
        ]),

        ul([
          li([
            strong([Component.text('KhmerLang Flutter IDE (Cross-Platform)៖ ')]),
            Component.text('កម្មវិធីសរសេរកូដបង្កើតឡើងដោយ Flutter មានម៉ាស៊ីន Dart Engine ក្នុងស្រុក គាំទ្រការសរសេរលើ macOS, Windows, Linux និង Web ដោយផ្ទាល់ ជាមួយ Virtual Khmer Keyboard, Tabs, AST Inspector និង Output Console។'),
          ]),
          li([
            strong([Component.text('Programiz-Style Web IDE៖ ')]),
            Component.text('កម្មវិធីសរសេរកូដរចនាប័ទ្ម Programiz ដំណើរការលើ Web Browser ជាមួយ Python Backend Server។'),
          ]),
          li([
            strong([Component.text('Command Line Interface (CLI) & REPL៖ ')]),
            Component.text('ឧបករណ៍បញ្ជាផ្ទាល់តាមរយៈ Terminal សម្រាប់រ៉ាន់ឯកសារ '),
            code([Component.text('.khmer')]),
            Component.text('។'),
          ]),
        ]),
      ]),

      // Section: Cheat Sheet
      section(classes: 'doc-section', id: 'cheat-sheet', [
        h2(classes: 'section-heading', [
          Component.text('តារាងសង្ខេបពាក្យគន្លឹះ (Khmer Syntax Cheat Sheet) '),
          a(href: '#cheat-sheet', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('តារាងយោងសម្រាប់ពាក្យគន្លឹះទាំងអស់នៅក្នុងភាសាខ្មែរ (KhmerLang)៖'),
        ]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([Component.text('ពាក្យគន្លឹះ (Keyword)')]),
                th([Component.text('សមមូលអង់គ្លេស (Equivalent)')]),
                th([Component.text('អត្ថន័យ និងការប្រើប្រាស់')]),
                th([Component.text('ឧទាហរណ៍កូដ')]),
              ]),
            ]),
            tbody([
              tr([
                td([code([Component.text('តាំង')])]),
                td([code([Component.text('let / var')])]),
                td([Component.text('ប្រកាសអថេរថ្មី')]),
                td([code([Component.text('តាំង x = ១០;')])]),
              ]),
              tr([
                td([code([Component.text('បង្ហាញ')])]),
                td([code([Component.text('print / echo')])]),
                td([Component.text('បង្ហាញលទ្ធផលលើអេក្រង់')]),
                td([code([Component.text('បង្ហាញ("សួស្តី");')])]),
              ]),
              tr([
                td([code([Component.text('បើ')])]),
                td([code([Component.text('if')])]),
                td([Component.text('លក្ខខណ្ឌផ្ទៀងផ្ទាត់ដំបូង')]),
                td([code([Component.text('បើ (x > ០) { ... }')])]),
              ]),
              tr([
                td([code([Component.text('ឬបើ')])]),
                td([code([Component.text('else if / elif')])]),
                td([Component.text('លក្ខខណ្ឌបន្ទាប់')]),
                td([code([Component.text('ឬបើ (x == ០) { ... }')])]),
              ]),
              tr([
                td([code([Component.text('ផ្សេងទៀត')])]),
                td([code([Component.text('else')])]),
                td([Component.text('លក្ខខណ្ឌក្រៅពីនេះ')]),
                td([code([Component.text('ផ្សេងទៀត { ... }')])]),
              ]),
              tr([
                td([code([Component.text('ខណៈ')])]),
                td([code([Component.text('while')])]),
                td([Component.text('រង្វិលជុំផ្ទៀងផ្ទាត់លក្ខខណ្ឌ')]),
                td([code([Component.text('ខណៈ (x > ០) { ... }')])]),
              ]),
              tr([
                td([code([Component.text('សម្រាប់')])]),
                td([code([Component.text('for')])]),
                td([Component.text('រង្វិលជុំមានចំនួនជុំកំណត់')]),
                td([code([Component.text('សម្រាប់ (តាំង i=០; i<៥; i=i+១)')])]),
              ]),
              tr([
                td([code([Component.text('អនុគមន៍')]), Component.text(' / '), code([Component.text('វិធី')])]),
                td([code([Component.text('function / def')])]),
                td([Component.text('ប្រកាសអនុគមន៍ ឬវិធីសាស្ត្រ')]),
                td([code([Component.text('អនុគមន៍ បូក(ក, ខ) { ... }')])]),
              ]),
              tr([
                td([code([Component.text('ត្រឡប់')])]),
                td([code([Component.text('return')])]),
                td([Component.text('បញ្ជូនតម្លៃត្រឡប់ពីអនុគមន៍')]),
                td([code([Component.text('ត្រឡប់ ក + ខ')])]),
              ]),
              tr([
                td([code([Component.text('ថ្នាក់')])]),
                td([code([Component.text('class')])]),
                td([Component.text('ប្រកាសថ្នាក់ OOP')]),
                td([code([Component.text('ថ្នាក់ សិស្ស { ... }')])]),
              ]),
              tr([
                td([code([Component.text('បង្កើត')])]),
                td([code([Component.text('constructor / __init__')])]),
                td([Component.text('វិធីសាស្ត្រចាប់ផ្ដើមបង្កើតវត្ថុ')]),
                td([code([Component.text('បង្កើត(ឈ្មោះ) { នេះ.ឈ្មោះ = ឈ្មោះ }')])]),
              ]),
              tr([
                td([code([Component.text('នេះ')]), Component.text(' / '), code([Component.text('ខ្លួនវា')])]),
                td([code([Component.text('this / self')])]),
                td([Component.text('យោងទៅលើ Object បច្ចុប្បន្ន')]),
                td([code([Component.text('នេះ.ឈ្មោះ = "វ៉េងឈួង"')])]),
              ]),
              tr([
                td([code([Component.text('ថ្មី')])]),
                td([code([Component.text('new')])]),
                td([Component.text('បង្កើត Instance ថ្មីនៃថ្នាក់')]),
                td([code([Component.text('តាំង p = ថ្មី សិស្ស("តារា")')])]),
              ]),
              tr([
                td([code([Component.text('បន្តពី')])]),
                td([code([Component.text('extends')])]),
                td([Component.text('បន្តវេនពីថ្នាក់មេ (Inheritance)')]),
                td([code([Component.text('ថ្នាក់ ឆ្មា បន្តពី សត្វ')])]),
              ]),
              tr([
                td([code([Component.text('ពិត')])]),
                td([code([Component.text('true')])]),
                td([Component.text('តម្លៃប៊ូលីនពិត')]),
                td([code([Component.text('តាំង ត្រូវ = ពិត')])]),
              ]),
              tr([
                td([code([Component.text('មិនពិត')])]),
                td([code([Component.text('false')])]),
                td([Component.text('តម្លៃប៊ូលីនមិនពិត')]),
                td([code([Component.text('តាំង ខុស = មិនពិត')])]),
              ]),
              tr([
                td([code([Component.text('ទទេ')])]),
                td([code([Component.text('null / none')])]),
                td([Component.text('តម្លៃទទេគ្មានទិន្នន័យ')]),
                td([code([Component.text('តាំង ទិន្នន័យ = ទទេ')])]),
              ]),
            ]),
          ]),
        ]),
      ]),

      // Section: Live Interactive Playground
      section(classes: 'doc-section', id: 'playground', [
        h2(classes: 'section-heading', [
          Component.text('🎮 ស្ថានីយសាកល្បងកូដផ្ទាល់ (Live Interactive Playground) '),
          a(href: '#playground', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('សរសេរ និងរ៉ាន់កូដ KhmerLang ដោយផ្ទាល់ក្នុង Browser របស់អ្នក! ជ្រើសរើសកូដគំរូ ឬសរសេរកូដផ្ទាល់ខ្លួនរបស់អ្នក រួចចុច '),
          strong([Component.text(' "▷ ដំណើការកូដ (Run)" ')]),
          Component.text('៖'),
        ]),

        Playground(),
      ]),
    ]);
  }
}
