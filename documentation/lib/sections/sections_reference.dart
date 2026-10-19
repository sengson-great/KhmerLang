import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/playground.dart';

class ReferenceSections extends StatelessComponent {
  const ReferenceSections({super.key});

  @override
  Component build(BuildContext context) {
    return .fragment([
      // Section: Builtins
      section(classes: 'doc-section', id: 'builtins', [
        h2(classes: 'section-heading', [
          text('អនុគមន៍ស្ដង់ដារ (Built-in Functions) '),
          a(href: '#builtins', classes: 'heading-anchor', [text('#')]),
        ]),
        p([text('KhmerLang ផ្ដល់នូវអនុគមន៍ស្ដង់ដារដែលភ្ជាប់មកស្រាប់ជាមួយភាសា៖')]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([text('អនុគមន៍ (Builtin)')]),
                th([text('ការប្រើប្រាស់ (Usage)')]),
                th([text('ការពន្យល់ (Explanation)')]),
              ]),
            ]),
            tbody([
              tr([
                td([code([text('បង្ហាញ(...)')])]),
                td([code([text('បង្ហាញ("តម្លៃ:", x)')])]),
                td([text('បង្ហាញអត្ថបទ ឬតម្លៃអថេរនៅលើស្ថានីយ (Standard Output)')]),
              ]),
              tr([
                td([code([text('ប្រវែង(...)')])]),
                td([code([text('ប្រវែង("កម្ពុជា")')])]),
                td([text('គណនាប្រវែងតួអក្សរ ឬចំនួនធាតុក្នុង Array')]),
              ]),
              tr([
                td([code([text('ប្រភេទ(...)')])]),
                td([code([text('ប្រភេទ(១២៣)')])]),
                td([text('កំណត់ប្រភេទតម្លៃ (string, number, boolean, null, class, etc.)')]),
              ]),
              tr([
                td([code([text('បន្ថែម(...)')])]),
                td([code([text('បន្ថែម(បញ្ជី, ធាតុថ្មី)')])]),
                td([text('បន្ថែមធាតុថ្មីទៅចុងបញ្ចប់នៃបញ្ជី Array')]),
              ]),
            ]),
          ]),
        ]),
      ]),

      // Section: Tools & IDEs
      section(classes: 'doc-section', id: 'ides', [
        h2(classes: 'section-heading', [
          text('ឧបករណ៍អភិវឌ្ឍន៍ (Tools & IDEs) '),
          a(href: '#ides', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('ដើម្បីសម្រួលដល់ការសរសេរកូដ ប្រព័ន្ធអេកូឡូស៊ី KhmerLang រួមមានឧបករណ៍ទំនើបៗជាច្រើន៖'),
        ]),

        ul([
          li([
            strong([text('KhmerLang Flutter IDE (Cross-Platform)៖ ')]),
            text('កម្មវិធីសរសេរកូដបង្កើតឡើងដោយ Flutter មានម៉ាស៊ីន Dart Engine ក្នុងស្រុក គាំទ្រការសរសេរលើ macOS, Windows, Linux និង Web ដោយផ្ទាល់ ជាមួយ Virtual Khmer Keyboard, Tabs, AST Inspector និង Output Console។'),
          ]),
          li([
            strong([text('Programiz-Style Web IDE៖ ')]),
            text('កម្មវិធីសរសេរកូដរចនាប័ទ្ម Programiz ដំណើរការលើ Web Browser ជាមួយ Python Backend Server។'),
          ]),
          li([
            strong([text('Command Line Interface (CLI) & REPL៖ ')]),
            text('ឧបករណ៍បញ្ជាផ្ទាល់តាមរយៈ Terminal សម្រាប់រ៉ាន់ឯកសារ '),
            code([text('.khmer')]),
            text('។'),
          ]),
        ]),
      ]),

      // Section: Cheat Sheet
      section(classes: 'doc-section', id: 'cheat-sheet', [
        h2(classes: 'section-heading', [
          text('តារាងសង្ខេបពាក្យគន្លឹះ (Khmer Syntax Cheat Sheet) '),
          a(href: '#cheat-sheet', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('តារាងយោងសម្រាប់ពាក្យគន្លឹះទាំងអស់នៅក្នុងភាសាខ្មែរ (KhmerLang)៖'),
        ]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([text('ពាក្យគន្លឹះ (Keyword)')]),
                th([text('សមមូលអង់គ្លេស (Equivalent)')]),
                th([text('អត្ថន័យ និងការប្រើប្រាស់')]),
                th([text('ឧទាហរណ៍កូដ')]),
              ]),
            ]),
            tbody([
              tr([
                td([code([text('តាំង')])]),
                td([code([text('let / var')])]),
                td([text('ប្រកាសអថេរថ្មី')]),
                td([code([text('តាំង x = ១០;')])]),
              ]),
              tr([
                td([code([text('បង្ហាញ')])]),
                td([code([text('print / echo')])]),
                td([text('បង្ហាញលទ្ធផលលើអេក្រង់')]),
                td([code([text('បង្ហាញ("សួស្តី");')])]),
              ]),
              tr([
                td([code([text('បើ')])]),
                td([code([text('if')])]),
                td([text('លក្ខខណ្ឌផ្ទៀងផ្ទាត់ដំបូង')]),
                td([code([text('បើ (x > ០) { ... }')])]),
              ]),
              tr([
                td([code([text('ឬបើ')])]),
                td([code([text('else if / elif')])]),
                td([text('លក្ខខណ្ឌបន្ទាប់')]),
                td([code([text('ឬបើ (x == ០) { ... }')])]),
              ]),
              tr([
                td([code([text('ផ្សេងទៀត')])]),
                td([code([text('else')])]),
                td([text('លក្ខខណ្ឌក្រៅពីនេះ')]),
                td([code([text('ផ្សេងទៀត { ... }')])]),
              ]),
              tr([
                td([code([text('ខណៈ')])]),
                td([code([text('while')])]),
                td([text('រង្វិលជុំផ្ទៀងផ្ទាត់លក្ខខណ្ឌ')]),
                td([code([text('ខណៈ (x > ០) { ... }')])]),
              ]),
              tr([
                td([code([text('សម្រាប់')])]),
                td([code([text('for')])]),
                td([text('រង្វិលជុំមានចំនួនជុំកំណត់')]),
                td([code([text('សម្រាប់ (តាំង i=០; i<៥; i=i+១)')])]),
              ]),
              tr([
                td([code([text('អនុគមន៍')]), text(' / '), code([text('វិធី')])]),
                td([code([text('function / def')])]),
                td([text('ប្រកាសអនុគមន៍ ឬវិធីសាស្ត្រ')]),
                td([code([text('អនុគមន៍ បូក(ក, ខ) { ... }')])]),
              ]),
              tr([
                td([code([text('ត្រឡប់')])]),
                td([code([text('return')])]),
                td([text('បញ្ជូនតម្លៃត្រឡប់ពីអនុគមន៍')]),
                td([code([text('ត្រឡប់ ក + ខ')])]),
              ]),
              tr([
                td([code([text('ថ្នាក់')])]),
                td([code([text('class')])]),
                td([text('ប្រកាសថ្នាក់ OOP')]),
                td([code([text('ថ្នាក់ សិស្ស { ... }')])]),
              ]),
              tr([
                td([code([text('បង្កើត')])]),
                td([code([text('constructor / __init__')])]),
                td([text('វិធីសាស្ត្រចាប់ផ្ដើមបង្កើតវត្ថុ')]),
                td([code([text('បង្កើត(ឈ្មោះ) { នេះ.ឈ្មោះ = ឈ្មោះ }')])]),
              ]),
              tr([
                td([code([text('នេះ')]), text(' / '), code([text('ខ្លួនវា')])]),
                td([code([text('this / self')])]),
                td([text('យោងទៅលើ Object បច្ចុប្បន្ន')]),
                td([code([text('នេះ.ឈ្មោះ = "វ៉េងឈួង"')])]),
              ]),
              tr([
                td([code([text('ថ្មី')])]),
                td([code([text('new')])]),
                td([text('បង្កើត Instance ថ្មីនៃថ្នាក់')]),
                td([code([text('តាំង p = ថ្មី សិស្ស("តារា")')])]),
              ]),
              tr([
                td([code([text('បន្តពី')])]),
                td([code([text('extends')])]),
                td([text('បន្តវេនពីថ្នាក់មេ (Inheritance)')]),
                td([code([text('ថ្នាក់ ឆ្មា បន្តពី សត្វ')])]),
              ]),
              tr([
                td([code([text('ពិត')])]),
                td([code([text('true')])]),
                td([text('តម្លៃប៊ូលីនពិត')]),
                td([code([text('តាំង ត្រូវ = ពិត')])]),
              ]),
              tr([
                td([code([text('មិនពិត')])]),
                td([code([text('false')])]),
                td([text('តម្លៃប៊ូលីនមិនពិត')]),
                td([code([text('តាំង ខុស = មិនពិត')])]),
              ]),
              tr([
                td([code([text('ទទេ')])]),
                td([code([text('null / none')])]),
                td([text('តម្លៃទទេគ្មានទិន្នន័យ')]),
                td([code([text('តាំង ទិន្នន័យ = ទទេ')])]),
              ]),
            ]),
          ]),
        ]),
      ]),

      // Section: Live Interactive Playground
      section(classes: 'doc-section', id: 'playground', [
        h2(classes: 'section-heading', [
          text('🎮 ស្ថានីយសាកល្បងកូដផ្ទាល់ (Live Interactive Playground) '),
          a(href: '#playground', classes: 'heading-anchor', [text('#')]),
        ]),
        p([
          text('សរសេរ និងរ៉ាន់កូដ KhmerLang ដោយផ្ទាល់ក្នុង Browser របស់អ្នក! ជ្រើសរើសកូដគំរូ ឬសរសេរកូដផ្ទាល់ខ្លួនរបស់អ្នក រួចចុច '),
          strong([text(' "▷ ដំណើការកូដ (Run)" ')]),
          text('៖'),
        ]),

        const Playground(),
      ]),
    ]);
  }
}
