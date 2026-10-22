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
        p([Component.text('ខ្មែរចារ (KhmerChar) ផ្ដល់នូវអនុគមន៍ស្ដង់ដារដែលភ្ជាប់មកស្រាប់ជាមួយភាសា៖')]),

        div(classes: 'table-responsive', [
          table(classes: 'doc-table', [
            thead([
              tr([
                th([Component.text('អនុគមន៍ (Builtin)')]),
                th([Component.text('ឈ្មោះអង់គ្លេស (Alias)')]),
                th([Component.text('ការប្រើប្រាស់ (Usage)')]),
                th([Component.text('ការពន្យល់ (Explanation)')]),
              ]),
            ]),
            tbody([
              // Core & I/O
              tr([
                td([code([Component.text('បង្ហាញ(...)')])]),
                td([code([Component.text('print(...)')])]),
                td([code([Component.text('បង្ហាញ("តម្លៃ:", x)')])]),
                td([Component.text('បង្ហាញអត្ថបទ ឬតម្លៃអថេរនៅលើស្ថានីយ (Standard Output)')]),
              ]),
              tr([
                td([code([Component.text('ប្រវែង(...)')])]),
                td([code([Component.text('len(...)')])]),
                td([code([Component.text('ប្រវែង("កម្ពុជា")')])]),
                td([Component.text('គណនាប្រវែងតួអក្សរ ឬចំនួនធាតុក្នុង Array/Map')]),
              ]),
              tr([
                td([code([Component.text('ប្រភេទ(...)')])]),
                td([code([Component.text('type(...)')])]),
                td([code([Component.text('ប្រភេទ(១២៣)')])]),
                td([Component.text('កំណត់ប្រភេទតម្លៃ (លេខ, អក្សរ, តក្កវិទ្យា, បញ្ជី, វត្ថុ, ថ្នាក់, etc.)')]),
              ]),
              // Math
              tr([
                td([code([Component.text('ដាច់ខាត(...)')])]),
                td([code([Component.text('abs(...)')])]),
                td([code([Component.text('ដាច់ខាត(-១០)')])]),
                td([Component.text('តម្លៃដាច់ខាតនៃលេខ (Absolute value)')]),
              ]),
              tr([
                td([code([Component.text('ឬសការ៉េ(...)')])]),
                td([code([Component.text('sqrt(...)')])]),
                td([code([Component.text('ឬសការ៉េ(២៥)')])]),
                td([Component.text('រកឬសការ៉េនៃលេខ (Square root)')]),
              ]),
              tr([
                td([code([Component.text('ស្វ័យគុណ(...)')])]),
                td([code([Component.text('pow(...)')])]),
                td([code([Component.text('ស្វ័យគុណ(២, ៣)')])]),
                td([Component.text('គណនាស្វ័យគុណ (២^៣ = ៨)')]),
              ]),
              tr([
                td([code([Component.text('បង្គត់(...)')])]),
                td([code([Component.text('round(...)')])]),
                td([code([Component.text('បង្គត់(៤.៧)')])]),
                td([Component.text('បង្គត់រកចំនួនគត់ជិតបំផុត (Round to nearest integer)')]),
              ]),
              tr([
                td([code([Component.text('បង្គត់ចុះ(...)')])]),
                td([code([Component.text('floor(...)')])]),
                td([code([Component.text('បង្គត់ចុះ(៤.៩)')])]),
                td([Component.text('បង្គត់ទម្លាក់ចុះក្រោម (Floor)')]),
              ]),
              tr([
                td([code([Component.text('បង្គត់ឡើង(...)')])]),
                td([code([Component.text('ceil(...)')])]),
                td([code([Component.text('បង្គត់ឡើង(៤.១)')])]),
                td([Component.text('បង្គត់រុញឡើងលើ (Ceiling)')]),
              ]),
              tr([
                td([code([Component.text('អតិបរមា(...)')])]),
                td([code([Component.text('max(...)')])]),
                td([code([Component.text('អតិបរមា(១០, ២០, ៥)')])]),
                td([Component.text('រកតម្លៃធំបំផុត អាចប្រើជាមួយអាគុយម៉ង់ ឬបញ្ជី')]),
              ]),
              tr([
                td([code([Component.text('អប្បបរមា(...)')])]),
                td([code([Component.text('min(...)')])]),
                td([code([Component.text('អប្បបរមា(១០, ២០, ៥)')])]),
                td([Component.text('រកតម្លៃតូចបំផុត អាចប្រើជាមួយអាគុយម៉ង់ ឬបញ្ជី')]),
              ]),
              tr([
                td([code([Component.text('ចៃដន្យ(...)')])]),
                td([code([Component.text('random(...)')])]),
                td([code([Component.text('ចៃដន្យ(១, ១០)')])]),
                td([Component.text('បង្កើតលេខចៃដន្យ (Random number between min and max)')]),
              ]),
              // Type Conversions
              tr([
                td([code([Component.text('ជាលេខ(...)')])]),
                td([code([Component.text('toNum / toInt')])]),
                td([code([Component.text('ជាលេខ("១២៣")')])]),
                td([Component.text('បម្លែងទៅជាលេខ គាំទ្រទាំងលេខខ្មែរ និងអារ៉ាប់')]),
              ]),
              tr([
                td([code([Component.text('ជាអក្សរ(...)')])]),
                td([code([Component.text('toStr(...)')])]),
                td([code([Component.text('ជាអក្សរ(៧៨៩)')])]),
                td([Component.text('បម្លែងតម្លៃទៅជាអត្ថបទ String')]),
              ]),
              tr([
                td([code([Component.text('ជាតក្ក(...)')])]),
                td([code([Component.text('toBool(...)')])]),
                td([code([Component.text('ជាតក្ក(១)')])]),
                td([Component.text('បម្លែងតម្លៃទៅជាតក្កវិទ្យា Boolean (ពិត / មិនពិត)')]),
              ]),
              // Strings
              tr([
                td([code([Component.text('ពុះ(...)')])]),
                td([code([Component.text('split(...)')])]),
                td([code([Component.text('ពុះ("ក ខ គ", " ")')])]),
                td([Component.text('បំបែកអត្ថបទទៅជាបញ្ជី Array')]),
              ]),
              tr([
                td([code([Component.text('កាត់(...)')])]),
                td([code([Component.text('substr(...)')])]),
                td([code([Component.text('កាត់("សួស្តី", ០, ៤)')])]),
                td([Component.text('កាត់យកផ្នែកនៃអត្ថបទតាមសន្ទស្សន៍ចាប់ផ្តើម និងបញ្ចប់')]),
              ]),
              tr([
                td([code([Component.text('ជំនួស(...)')])]),
                td([code([Component.text('replace(...)')])]),
                td([code([Component.text('ជំនួស(str, "ចាស់", "ថ្មី")')])]),
                td([Component.text('ជំនួសពាក្យចាស់ដោយពាក្យថ្មីក្នុងអត្ថបទ')]),
              ]),
              tr([
                td([code([Component.text('សម្អាត(...)')])]),
                td([code([Component.text('trim(...)')])]),
                td([code([Component.text('សម្អាត("  អត្ថបទ  ")')])]),
                td([Component.text('លុបចន្លោះទទេ (Whitespace) ខាងដើម និងខាងចុង')]),
              ]),
              tr([
                td([code([Component.text('អក្សរធំ(...)')])]),
                td([code([Component.text('upper(...)')])]),
                td([code([Component.text('អក្សរធំ("hello")')])]),
                td([Component.text('បម្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ')]),
              ]),
              tr([
                td([code([Component.text('អក្សរតូច(...)')])]),
                td([code([Component.text('lower(...)')])]),
                td([code([Component.text('អក្សរតូច("HELLO")')])]),
                td([Component.text('បម្លែងអក្សរទាំងអស់ទៅជាអក្សរតូច')]),
              ]),
              // Arrays
              tr([
                td([code([Component.text('បន្ថែម(...)')])]),
                td([code([Component.text('append(...)')])]),
                td([code([Component.text('បន្ថែម(បញ្ជី, ធាតុ)')])]),
                td([Component.text('បន្ថែមធាតុថ្មីទៅចុងបញ្ចប់នៃបញ្ជី Array')]),
              ]),
              tr([
                td([code([Component.text('បញ្ចូល(...)')])]),
                td([code([Component.text('insert(...)')])]),
                td([code([Component.text('បញ្ចូល(បញ្ជី, ០, ធាតុ)')])]),
                td([Component.text('បញ្ចូលធាតុនៅទីតាំងកំណត់ក្នុងបញ្ជី')]),
              ]),
              tr([
                td([code([Component.text('ដកចេញ(...)')])]),
                td([code([Component.text('pop(...)')])]),
                td([code([Component.text('ដកចេញ(បញ្ជី, [ទីតាំង])')])]),
                td([Component.text('ដកធាតុចុងក្រោយ ឬតាមទីតាំងដែលបានបញ្ជាក់')]),
              ]),
              tr([
                td([code([Component.text('លុប(...)')])]),
                td([code([Component.text('remove(...)')])]),
                td([code([Component.text('លុប(បញ្ជី, ធាតុ)')])]),
                td([Component.text('លុបធាតុដែលមានតម្លៃត្រូវគ្នាចេញពីបញ្ជី')]),
              ]),
              tr([
                td([code([Component.text('ភ្ជាប់(...)')])]),
                td([code([Component.text('join(...)')])]),
                td([code([Component.text('ភ្ជាប់(បញ្ជី, "-")')])]),
                td([Component.text('ភ្ជាប់ធាតុទាំងអស់ក្នុងបញ្ជីជាអត្ថបទ String តែមួយ')]),
              ]),
              tr([
                td([code([Component.text('តម្រៀប(...)')])]),
                td([code([Component.text('sort(...)')])]),
                td([code([Component.text('តម្រៀប(បញ្ជី)')])]),
                td([Component.text('តម្រៀបធាតុក្នុងបញ្ជីតាមលំដាប់លេខ ឬអក្ខរក្រម')]),
              ]),
              tr([
                td([code([Component.text('ត្រឡប់បញ្ជី(...)')])]),
                td([code([Component.text('reverse(...)')])]),
                td([code([Component.text('ត្រឡប់បញ្ជី(បញ្ជី)')])]),
                td([Component.text('ត្រឡប់បញ្ជី ឬអក្សរពីក្រោយមកមុខ (Reverse)')]),
              ]),
              tr([
                td([code([Component.text('ស្វែងរក(...)')])]),
                td([code([Component.text('indexOf(...)')])]),
                td([code([Component.text('ស្វែងរក(បញ្ជី, ធាតុ)')])]),
                td([Component.text('រកសន្ទស្សន៍ (Index) នៃធាតុ ឬអក្សរ (ផ្ដល់ -១ បើគ្មាន)')]),
              ]),
              tr([
                td([code([Component.text('មាន(...)')])]),
                td([code([Component.text('contains(...)')])]),
                td([code([Component.text('មាន(បញ្ជី, ធាតុ)')])]),
                td([Component.text('ពិនិត្យវត្តមានធាតុក្នុងបញ្ជី អត្ថបទ ឬវត្ថុ (ពិត / មិនពិត)')]),
              ]),
              // System & Time
              tr([
                td([code([Component.text('ពេលនេះ()')])]),
                td([code([Component.text('now()')])]),
                td([code([Component.text('ពេលនេះ()')])]),
                td([Component.text('ផ្ដល់ពេលវេលាបច្ចុប្បន្នគិតជា Milliseconds ចាប់ពី Epoch')]),
              ]),
              tr([
                td([code([Component.text('អាន(...)')])]),
                td([code([Component.text('input(...)')])]),
                td([code([Component.text('អាន("បញ្ចូលឈ្មោះ: ")')])]),
                td([Component.text('ទទួលការវាយបញ្ចូលពីអ្នកប្រើប្រាស់ (Standard Input)')]),
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
          Component.text('ដើម្បីសម្រួលដល់ការសរសេរកូដ ប្រព័ន្ធអេកូឡូស៊ី ខ្មែរចារ (KhmerChar) រួមមានឧបករណ៍ទំនើបៗជាច្រើន៖'),
        ]),

        ul([
          li([
            strong([Component.text('ខ្មែរចារ Khmer IDE (Cross-Platform)៖ ')]),
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
          Component.text('តារាងយោងសម្រាប់ពាក្យគន្លឹះទាំងអស់នៅក្នុង ខ្មែរចារ (KhmerChar)៖'),
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
                td([code([Component.text('អនុគមន៍')])]),
                td([code([Component.text('function / method')])]),
                td([Component.text('ប្រកាសអនុគមន៍ទូទៅ ឬវិធីសាស្ត្រក្នុងថ្នាក់')]),
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
                td([code([Component.text('យក')])]),
                td([code([Component.text('get')])]),
                td([Component.text('ប្រកាស Getter សម្រាប់ទាញយកតម្លៃគុណលក្ខណៈ')]),
                td([code([Component.text('យក ឈ្មោះពេញ { ... }')])]),
              ]),
              tr([
                td([code([Component.text('ដាក់')]), Component.text(' / '), code([Component.text('កំណត់')])]),
                td([code([Component.text('set')])]),
                td([Component.text('ប្រកាស Setter សម្រាប់កំណត់តម្លៃគុណលក្ខណៈ')]),
                td([code([Component.text('ដាក់ អាយុ(ត) { នេះ._អាយុ = ត; }')])]),
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
          Component.text('សរសេរ និងរ៉ាន់កូដ ខ្មែរចារ (KhmerChar) ដោយផ្ទាល់ក្នុង Browser របស់អ្នក! ជ្រើសរើសកូដគំរូ ឬសរសេរកូដផ្ទាល់ខ្លួនរបស់អ្នក រួចចុច '),
          strong([Component.text(' "▷ ដំណើការកូដ (Run)" ')]),
          Component.text('៖'),
        ]),

        Playground(),
      ]),
    ]);
  }
}
