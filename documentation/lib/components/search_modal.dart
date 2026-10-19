import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../models/search_data.dart';

class SearchModal extends StatefulComponent {
  final bool isOpen;
  final VoidCallback onClose;
  final ValueChanged<String> onSelectSection;

  const SearchModal({
    required this.isOpen,
    required this.onClose,
    required this.onSelectSection,
    super.key,
  });

  @override
  State<SearchModal> createState() => _SearchModalState();
}

class _SearchModalState extends State<SearchModal> {
  String _query = '';

  List<SearchItem> get _filteredItems {
    final q = _query.trim().toLowerCase();
    if (q.isEmpty) return searchIndex;
    return searchIndex.where((item) {
      return item.titleKm.toLowerCase().contains(q) ||
          item.titleEn.toLowerCase().contains(q) ||
          item.category.toLowerCase().contains(q) ||
          item.keywords.toLowerCase().contains(q);
    }).toList();
  }

  @override
  Component build(BuildContext context) {
    if (!component.isOpen) {
      return div(styles: Styles(display: Display.none), []);
    }

    final results = _filteredItems;

    return div(
      classes: 'search-modal-backdrop visible',
      id: 'search-modal-backdrop',
      events: {
        'click': (dynamic e) {
          if (e.target == e.currentTarget) {
            component.onClose();
          }
        },
      },
      [
        div(
          classes: 'search-modal-card',
          id: 'search-modal-card',
          attributes: {
            'role': 'dialog',
            'aria-modal': 'true',
            'aria-label': 'ស្វែងរកក្នុងឯកសារ',
          },
          [
            div(classes: 'search-input-header', [
              svg(
                attributes: {
                  'width': '20',
                  'height': '20',
                  'viewBox': '0 0 24 24',
                  'fill': 'none',
                  'stroke': 'currentColor',
                  'stroke-width': '2',
                },
                [
                  circle([], attributes: {'cx': '11', 'cy': '11', 'r': '8'}),
                  path([], attributes: {'d': 'm21 21-4.3-4.3'}),
                ],
              ),
              input(
                type: InputType.text,
                id: 'search-modal-input',
                classes: 'search-modal-input',
                value: _query,
                attributes: {
                  'placeholder': 'វាយពាក្យគន្លឹះ ឬប្រធានបទដែលចង់ស្វែងរក...',
                  'autocomplete': 'off',
                  'autofocus': 'true',
                },
                events: {
                  'input': (dynamic e) {
                    setState(() {
                      _query = '${e.target?.value ?? ""}';
                    });
                  },
                  'keydown': (dynamic e) {
                    if (e.key == 'Escape') {
                      component.onClose();
                    }
                  },
                },
              ),
              button(
                classes: 'search-kbd-esc-btn',
                events: {'click': (e) => component.onClose()},
                [text('ESC')],
              ),
            ]),

            ul(classes: 'search-results-list', id: 'search-results-list', [
              if (results.isEmpty)
                li(
                  styles: Styles(
                    padding: Padding.all(1.5.rem),
                    textAlign: TextAlign.center,
                    color: const Color('#94a3b8'),
                  ),
                  [text('រកមិនឃើញលទ្ធផលសម្រាប់ "$_query" ឡើយ។')],
                )
              else
                for (final item in results)
                  li(
                    classes: 'search-result-item',
                    events: {
                      'click': (e) {
                        component.onSelectSection(item.id);
                        component.onClose();
                      },
                    },
                    [
                      div(classes: 'search-result-title', [
                        span([text(item.titleKm)]),
                        span(classes: 'sidebar-badge', [text(item.category)]),
                      ]),
                      div(classes: 'search-result-desc', [
                        text(item.titleEn),
                      ]),
                    ],
                  ),
            ]),

            div(classes: 'search-modal-footer', [
              span([text('ចុចដើម្បីរុករកដោយផ្ទាល់ទៅកាន់ប្រធានបទ')]),
              span([text('KhmerLang Docs Search')]),
            ]),
          ],
        ),
      ],
    );
  }
}
