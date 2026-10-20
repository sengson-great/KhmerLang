import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class TableOfContents extends StatelessComponent {
  final String activeSectionId;
  final ValueChanged<String> onSelectSection;

  const TableOfContents({
    required this.activeSectionId,
    required this.onSelectSection,
    super.key,
  });

  @override
  Component build(BuildContext context) {
    const items = [
      _TocItem('intro', 'សេចក្តីផ្តើម'),
      _TocItem('install', 'ការដំឡើង & ការចាប់ផ្តើម'),
      _TocItem('hello-world', 'កម្មវិធីដំបូង'),
      _TocItem('variables', 'អថេរ & ប្រភេទតម្លៃ'),
      _TocItem('numerals', 'លេខខ្មែរ & ប្រមាណវិធី'),
      _TocItem('punctuations', 'សញ្ញាវណ្ណយុត្តិ'),
      _TocItem('conditionals', 'លក្ខខណ្ឌ បើ/ឬបើ/ផ្សេងទៀត'),
      _TocItem('while-loop', 'រង្វិលជុំ ខណៈ'),
      _TocItem('for-loop', 'រង្វិលជុំ សម្រាប់'),
      _TocItem('functions', 'ការបង្កើតអនុគមន៍'),
      _TocItem('recursion', 'Recursion (Fibonacci)'),
      _TocItem('classes', 'ថ្នាក់ & Constructor'),
      _TocItem('inheritance', 'ការបន្តវេន (`បន្តពី`)'),
      _TocItem('builtins', 'អនុគមន៍ស្ដង់ដារ'),
      _TocItem('ides', 'ឧបករណ៍ & IDEs'),
      _TocItem('cheat-sheet', 'តារាងពាក្យគន្លឹះ'),
      _TocItem('playground', '🎮 ស្ថានីយសាកល្បងកូដ'),
    ];

    return aside(
      classes: 'docs-toc',
      id: 'docs-toc',
      attributes: {'aria-label': 'មាតិកាទំព័រនេះ'},
      [
        const div(classes: 'toc-title', [Component.text('មាតិកាទំព័រនេះ')]),
        ul(classes: 'toc-list', id: 'toc-list', [
          for (final item in items)
            li([
              a(
                href: '#${item.id}',
                classes: 'toc-link${activeSectionId == item.id ? ' active' : ''}',
                events: {'click': (e) => onSelectSection(item.id)},
                [Component.text(item.label)],
              ),
            ]),
        ]),
      ],
    );
  }
}

class _TocItem {
  final String id;
  final String label;
  const _TocItem(this.id, this.label);
}
