import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/code_card.dart';

class GettingStartedSections extends StatelessComponent {
  const GettingStartedSections({super.key});

  @override
  Component build(BuildContext context) {
    return const .fragment([
      // Hero Header
      div(classes: 'hero-banner', [
        div(classes: 'hero-tag', [
          span([Component.text('✨ ភាសាប្រូក្រាមីងខ្មែរដំបូងគេបង្អស់គាំទ្រ OOP ពេញលេញ')]),
        ]),
        h1(classes: 'doc-title', [
          Component.text('ឯកសារណែនាំផ្លូវការ — ភាសាខ្មែរ (KhmerLang)'),
        ]),
        p(classes: 'hero-lead', [
          strong([Component.text('KhmerLang (ភាសាខ្មែរ)')]),
          Component.text(' គឺជាភាសាប្រូក្រាមីងកម្រិតខ្ពស់ដែលត្រូវបានរចនាឡើងជាមួយវាក្យសព្ទ និងពាក្យគន្លឹះជាភាសាខ្មែរពិតប្រាកដ។ វាផ្ដល់នូវភាពងាយស្រួលក្នុងការសិក្សា សរសេរកូដតាមបែប Object-Oriented Programming (OOP) និងគាំទ្រលេខខ្មែរ (០-៩) ដោយផ្ទាល់។'),
        ]),
        div(classes: 'hero-buttons', [
          a(
            href: '#hello-world',
            classes: 'btn-primary-compact',
            [Component.text('🚀 ចាប់ផ្តើមរៀនឥឡូវនេះ')],
          ),
          a(
            href: '#playground',
            classes: 'btn-secondary',
            [Component.text('🎮 សាកល្បងកូដលើ Web Browser')],
          ),
        ]),
      ]),

      // Section: Introduction
      section(classes: 'doc-section', id: 'intro', [
        h2(classes: 'section-heading', [
          Component.text('សេចក្តីផ្តើម (Introduction) '),
          a(href: '#intro', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ភាសាខ្មែរ (KhmerLang) ត្រូវបានបង្កើតឡើងដើម្បីកាត់បន្ថយរបាំងភាសាក្នុងវិស័យវិទ្យាសាស្ត្រកុំព្យូទ័រនៅកម្ពុជា។ សិស្ស និស្សិត និងអ្នករៀនដំបូងអាចយល់ច្បាស់អំពីតក្កវិជ្ជានៃកូដ (Logic) តាមរយៈការប្រើពាក្យខ្មែរធម្មជាតិ ដូចជា '),
          code([Component.text('តាំង')]), Component.text(', '),
          code([Component.text('បង្ហាញ')]), Component.text(', '),
          code([Component.text('បើ')]), Component.text(', '),
          code([Component.text('ខណៈ')]), Component.text(', '),
          code([Component.text('ថ្នាក់')]), Component.text(' និង '),
          code([Component.text('អនុគមន៍')]), Component.text('។'),
        ]),
        div(classes: 'callout callout-info', [
          div(classes: 'callout-icon', [Component.text('💡')]),
          div(classes: 'callout-content', [
            strong([Component.text('ចំណុចពិសេស៖ ')]),
            Component.text('រាល់កូដឧទាហរណ៍ទាំងអស់ក្នុងឯកសារនេះ អ្នកអាចចុចប៊ូតុង '),
            strong([Component.text('▷ រ៉ាន់កូដ (Run)')]),
            Component.text(' ដើម្បីដំណើរការកូដ និងទស្សនាលទ្ធផលជាក់ស្ដែងលើ Browser បានភ្លាមៗដោយមិនបាច់ដំឡើងអ្វីទាំងអស់!'),
          ]),
        ]),
      ]),

      // Section: Installation & Setup
      section(classes: 'doc-section', id: 'install', [
        h2(classes: 'section-heading', [
          Component.text('ការដំឡើង & ការចាប់ផ្តើម (Installation & Setup) '),
          a(href: '#install', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('ការចាប់ផ្តើមសរសេរកូដជាមួយ '),
          strong([Component.text('KhmerLang (ភាសាខ្មែរ)')]),
          Component.text(' មានភាពងាយស្រួល និងរហ័ស។ អ្នកប្រើប្រាស់អាចជ្រើសរើសការដំឡើងតាមរយៈ '),
          strong([Component.text('Command Line Tool (CLI)')]),
          Component.text(' សម្រាប់ដំណើរការលើម៉ាស៊ីនផ្ទាល់ ឬប្រើប្រាស់កម្មវិធី '),
          strong([Component.text('Khmer IDE')]),
          Component.text(' ដោយមិនចាំបាច់ដំឡើងអ្វីទាំងអស់។'),
        ]),

        h3(classes: 'sub-heading', [Component.text('១. តម្រូវការប្រព័ន្ធ (Prerequisites)')]),
        p([Component.text('មុនពេលចាប់ផ្តើមដំឡើង សូមប្រាកដថាម៉ាស៊ីនរបស់អ្នកមានលក្ខខណ្ឌដូចខាងក្រោម៖')]),
        ul([
          li([strong([Component.text('ប្រព័ន្ធប្រតិបត្តិការ៖ ')]), Component.text('គាំទ្រ macOS, Linux, និង Windows (WSL / PowerShell)')]),
          li([strong([Component.text('Dart SDK (3.0+)៖ ')]), Component.text('សម្រាប់ដំណើរការ Engine និង Native Compiler របស់ភាសា')]),
          li([strong([Component.text('Git៖ ')]), Component.text('សម្រាប់ទាញយកប្រភពកូដ ឬ Releases')]),
        ]),

        h3(classes: 'sub-heading', [Component.text('២. ការដំឡើង CLI សម្រាប់អ្នកប្រើប្រាស់ទូទៅ (Universal One-Line Install)')]),
        p([
          Component.text('អ្នកប្រើប្រាស់គ្រប់រូបអាចដំឡើង '),
          code([Component.text('khmer')]),
          Component.text(' CLI លើម៉ាស៊ីនរបស់ខ្លួនដោយផ្ទាល់តាមរយៈពាក្យបញ្ជាតែមួយបន្ទាត់៖'),
        ]),

        CodeCard(
          title: 'macOS / Linux (Terminal)',
          lang: 'BASH',
          code: '# ដំឡើងស្វ័យប្រវត្តលើ macOS និង Linux (រួមទាំង PATH, AOT Native Binary & VS Code Extension)\ncurl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash',
          canRun: false,
        ),

        CodeCard(
          title: 'Windows (PowerShell)',
          lang: 'POWERSHELL',
          code: '# ដំឡើងលើ Windows តាមរយៈ PowerShell\nirm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex',
          canRun: false,
        ),

        CodeCard(
          title: 'Dart Toolchain / Native Compilation',
          lang: 'DART',
          code: '# Compile ទៅជា Native AOT Binary ដោយផ្ទាល់\ndart compile exe bin/khmer.dart -o bin/khmer_bin\n\n# ឬដំណើរការកូដផ្ទាល់\ndart run bin/khmer.dart main.khmer',
          canRun: false,
        ),

        h3(classes: 'sub-heading', [Component.text('៣. របៀបបង្កើត និងដំណើរការឯកសារកូដរបស់អ្នក')]),
        p([
          Component.text('ឯកសារកូដភាសាខ្មែរត្រូវប្រើកន្ទុយ '),
          code([Component.text('.khmer')]),
          Component.text('។ អ្នកអាចបង្កើតឯកសារថ្មីដោយប្រើ Text Editor ណាមួយដែលអ្នកពេញចិត្ត (ដូចជា VS Code, Cursor, ឬ Nano)៖'),
        ]),

        CodeCard(
          title: 'កម្មវិធីរបស់ខ្ញុំ (my_app.khmer)',
          lang: 'KHMER',
          code: 'តាំង ឈ្មោះ = "អ្នកប្រើប្រាស់"\nបង្ហាញ("សូមស្វាគមន៍មកកាន់ពិភពសរសេរកូដជាភាសាខ្មែរ!")\nបង្ហាញ("សួស្តី", ឈ្មោះ)',
        ),

        p([Component.text('បន្ទាប់មកដំណើរការឯកសាររបស់អ្នកនៅក្នុង Terminal៖')]),

        CodeCard(
          title: 'Run Your Script',
          lang: 'BASH',
          code: 'khmer my_app.khmer',
          canRun: false,
        ),

        h3(classes: 'sub-heading', [Component.text('៤. ការប្រើប្រាស់ Interactive REPL')]),
        p([
          Component.text('ប្រសិនបើអ្នកចង់សាកល្បងសរសេរកូដ ឬគណនាបន្ទាត់នីមួយៗភ្លាមៗ អ្នកគ្រាន់តែវាយពាក្យបញ្ជា '),
          code([Component.text('khmer')]),
          Component.text(' ដោយមិនបាច់បញ្ជាក់ឈ្មោះឯកសារនោះទេ ដើម្បីបើក Interactive REPL Shell៖'),
        ]),

        CodeCard(
          title: 'Interactive Console',
          lang: 'BASH',
          code: '\$ khmer\nភាសាខ្មែរ (KhmerLang) v1.0.0 REPL\nវាយ \'ចាកចេញ\' ឬចុច Ctrl+D ដើម្បីចាកចេញ។\n\n>>> តាំង ពិន្ទុ = ៩៥;\n>>> បង្ហាញ("ពិន្ទុសរុប:", ពិន្ទុ);\nពិន្ទុសរុប: ៩៥\n>>> តាំង ទ្វេដង = ពិន្ទុ * ២;\n>>> បង្ហាញ(ទ្វេដង);\n១៩០',
          canRun: false,
        ),

        h3(classes: 'sub-heading', [Component.text('៥. ការប្រើប្រាស់ជាមួយគ្រប់ Text Editor ទាំងអស់ (VS Code, Vim, Sublime, Nano)')]),
        p([
          Component.text('KhmerLang CLI ផ្ដល់ឧបករណ៍ជំនួយស្រាប់សម្រាប់ភ្ជាប់ទៅកាន់ Text Editor ណាមួយដែលអ្នកពេញចិត្ត៖'),
        ]),

        CodeCard(
          title: 'Editor Integration Commands',
          lang: 'BASH',
          code: '# ដំឡើង Syntax Highlighting សម្រាប់ VS Code / Cursor ដោយស្វ័យប្រវត្ត\nkhmer editor vscode\n\n# ឬបង្កើត Config សម្រាប់ Vim / Neovim, Sublime Text, ឬ GNU Nano\nkhmer editor vim\nkhmer editor sublime\nkhmer editor nano\n\n# មុខងារ Live-Reload: តាមដាន និងរ៉ាន់កូដស្វ័យប្រវត្តិពេលអ្នកចុច Save ក្នុង Editor ណាមួយ\nkhmer watch my_app.khmer\n\n# ពិនិត្យកំហុសវេយ្យាករណ៍ដោយមិនបាច់រ៉ាន់កូដ (Linter)\nkhmer check my_app.khmer',
          canRun: false,
        ),

        h3(classes: 'sub-heading', [Component.text('៦. ជម្រើសសរសេរកូដតាម GUI & Web IDE')]),
        p([Component.text('ក្រៅពីការប្រើប្រាស់ Terminal CLI អ្នកក៏អាចជ្រើសរើសបរិស្ថានអភិវឌ្ឍន៍ដែលងាយស្រួលបំផុតសម្រាប់អ្នក៖')]),
        ul([
          li([
            strong([Component.text('Web Playground (សាកល្បងភ្លាមៗតាម Web Browser)៖ ')]),
            Component.text('អ្នកមិនចាំបាច់ដំឡើងអ្វីទាំងអស់ក្នុងម៉ាស៊ីនឡើយ! គ្រាន់តែរមូរទៅកាន់ផ្នែក '),
            a(href: '#playground', [Component.text('🎮 ស្ថានីយសាកល្បងកូដផ្ទាល់')]),
            Component.text(' នៅខាងក្រោមនៃទំព័រនេះ ដើម្បីសរសេរ និងរ៉ាន់កូដខ្មែរលើ Browser របស់អ្នកបានភ្លាមៗ។'),
          ]),
          li([
            strong([Component.text('Khmer IDE (កម្មវិធី Desktop សម្រាប់ macOS / Windows)៖ ')]),
            Component.text('កម្មវិធី IDE ដើមដែលបង្កើតឡើងជាមួយ Flutter ផ្ដល់នូវ Virtual Khmer Keypad សម្រាប់វាយពាក្យគន្លឹះខ្មែររហ័ស, Syntax Highlighting, Tabs គ្រប់គ្រងឯកសារច្រើន, AST Visualizer, និង Terminal ក្នុងស្រុក។'),
          ]),
        ]),
      ]),

      // Section: Hello World
      section(classes: 'doc-section', id: 'hello-world', [
        h2(classes: 'section-heading', [
          Component.text('កម្មវិធីដំបូង (First Program: សួស្តីពិភពលោក) '),
          a(href: '#hello-world', classes: 'heading-anchor', [Component.text('#')]),
        ]),
        p([
          Component.text('កម្មវិធីប្រពៃណីដំបូងគេបង្អស់ក្នុងការរៀនសរសេរកូដ គឺការបង្ហាញពាក្យ "សួស្តីពិភពលោក" (Hello World) ទៅលើអេក្រង់ ដោយប្រើពាក្យគន្លឹះ '),
          code([Component.text('បង្ហាញ(...)')]),
          Component.text('៖'),
        ]),

        CodeCard(
          title: 'hello_world.khmer',
          lang: 'KHMER',
          code: '# កម្មវិធីដំបូងរបស់ខ្ញុំក្នុងភាសាខ្មែរ\nបង្ហាញ("សួស្តីពិភពលោក!")\nបង្ហាញ("សូមស្វាគមន៍មកកាន់ KhmerLang v1.0")',
        ),
      ]),
    ]);
  }
}
