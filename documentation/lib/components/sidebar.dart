import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Sidebar extends StatelessComponent {
  final bool isMobileOpen;
  final String activeSectionId;
  final ValueChanged<String> onSelectSection;

  const Sidebar({
    required this.isMobileOpen,
    required this.activeSectionId,
    required this.onSelectSection,
    super.key,
  });

  @override
  Component build(BuildContext context) {
    final classes = 'docs-sidebar${isMobileOpen ? ' mobile-open' : ''}';

    return nav(
      classes: classes,
      id: 'docs-sidebar',
      attributes: {'aria-label': 'ឯកសារណែនាំ'},
      [
        _buildNavGroup(
          title: '🚀 ចាប់ផ្ដើមដំបូង (Getting Started)',
          items: [
            _NavItem('intro', 'សេចក្តីផ្តើម (Overview)'),
            _NavItem('install', 'ការដំឡើង & ការចាប់ផ្តើម (Setup)'),
            _NavItem('hello-world', 'កម្មវិធីដំបូង (Hello World)'),
          ],
        ),

        _buildNavGroup(
          title: '💡 មូលដ្ឋានគ្រឹះ (Language Basics)',
          items: [
            _NavItem('variables', 'អថេរ & ប្រភេទតម្លៃ (Variables)'),
            _NavItem('numerals', 'លេខខ្មែរ & ប្រមាណវិធី (Math)'),
            _NavItem('punctuations', 'សញ្ញាវណ្ណយុត្តិ (Punctuations)'),
          ],
        ),

        _buildNavGroup(
          title: '🔀 លំហូរការងារ (Control Flow)',
          items: [
            _NavItem('conditionals', 'លក្ខខណ្ឌ បើ / ឬបើ / ផ្សេងទៀត'),
            _NavItem('while-loop', 'រង្វិលជុំ ខណៈ (While Loop)'),
            _NavItem('for-loop', 'រង្វិលជុំ សម្រាប់ (For Loop)'),
          ],
        ),

        _buildNavGroup(
          title: '⚡ អនុគមន៍ (Functions)',
          items: [
            _NavItem('functions', 'ការបង្កើតអនុគមន៍ (Declaration)'),
            _NavItem('recursion', 'Recursion (កូដ Fibonacci)'),
          ],
        ),

        _buildNavGroup(
          title: '🏛️ សរសេរកូដតាមវត្ថុ (OOP)',
          items: [
            _NavItem('classes', 'ថ្នាក់ & Constructor (`បង្កើត`)'),
            _NavItem('inheritance', 'ការបន្តវេន (`បន្តពី`)'),
          ],
        ),

        _buildNavGroup(
          title: '🛠️ ឧបករណ៍ & ឯកសារយោង',
          items: [
            _NavItem('builtins', 'អនុគមន៍ស្ដង់ដារ (Builtins)'),
            _NavItem('ides', 'Flutter & Web IDEs'),
            _NavItem('cheat-sheet', 'តារាងពាក្យគន្លឹះ (Cheat Sheet)'),
            _NavItem(
              'playground',
              '🎮 ស្ថានីយសាកល្បងកូដ',
              isHighlight: true,
              badge: 'ផ្ទាល់',
            ),
          ],
        ),
      ],
    );
  }

  Component _buildNavGroup({
    required String title,
    required List<_NavItem> items,
  }) {
    return div(classes: 'sidebar-nav-group', [
      div(classes: 'sidebar-nav-title', [text(title)]),
      ul(classes: 'sidebar-nav-list', [
        for (final item in items)
          li([
            a(
              href: '#${item.id}',
              classes: 'sidebar-nav-link${activeSectionId == item.id ? ' active' : ''}',
              events: {'click': (e) => onSelectSection(item.id)},
              [
                if (item.isHighlight)
                  span(
                    styles: Styles(
                      color: const Color('#38bdf8'),
                      fontWeight: FontWeight.bold,
                    ),
                    [text(item.title)],
                  )
                else
                  text(item.title),
                if (item.badge != null)
                  span(classes: 'sidebar-badge badge-new', [text(item.badge!)]),
              ],
            ),
          ]),
      ]),
    ]);
  }
}

class _NavItem {
  final String id;
  final String title;
  final bool isHighlight;
  final String? badge;

  const _NavItem(
    this.id,
    this.title, {
    this.isHighlight = false,
    this.badge,
  });
}
