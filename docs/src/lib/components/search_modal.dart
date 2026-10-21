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
    final rawQ = _query.trim().toLowerCase();
    if (rawQ.isEmpty) return searchIndex;

    // Normalize query: support multi-word, space-separated, and unspaced Khmer queries
    final cleanQ = rawQ.replaceAll(RegExp(r'\s+'), ' ');
    final noSpacesQ = rawQ.replaceAll(' ', '');
    final tokens = cleanQ.split(' ').where((w) => w.isNotEmpty).toList();

    final scored = <(SearchItem, int)>[];

    for (final item in searchIndex) {
      final titleKmNorm = item.titleKm.toLowerCase();
      final titleKmNoSpace = titleKmNorm.replaceAll(' ', '');
      final titleEnNorm = item.titleEn.toLowerCase();
      final categoryNorm = item.category.toLowerCase();
      final keywordsNorm = item.keywords.toLowerCase();
      final keywordsNoSpace = keywordsNorm.replaceAll(' ', '');
      final descNorm = item.description.toLowerCase();

      final fullHaystack = '$titleKmNorm $titleEnNorm $categoryNorm $keywordsNorm $descNorm';
      final fullHaystackNoSpace = '$titleKmNoSpace $keywordsNoSpace';

      int score = 0;

      // 1. Exact phrase match (Highest priority)
      if (titleKmNorm.contains(cleanQ) || titleEnNorm.contains(cleanQ)) {
        score += 100;
      } else if (titleKmNoSpace.contains(noSpacesQ)) {
        score += 90;
      } else if (fullHaystack.contains(cleanQ)) {
        score += 70;
      } else if (fullHaystackNoSpace.contains(noSpacesQ)) {
        score += 60;
      }

      // 2. Multi-token / related words matching
      int matchedTokens = 0;
      for (final token in tokens) {
        if (token.isEmpty) continue;
        if (titleKmNorm.contains(token) || titleEnNorm.contains(token)) {
          matchedTokens += 3;
        } else if (keywordsNorm.contains(token) || descNorm.contains(token)) {
          matchedTokens += 2;
        } else if (titleKmNoSpace.contains(token) || keywordsNoSpace.contains(token)) {
          matchedTokens += 1;
        }
      }

      if (tokens.isNotEmpty && matchedTokens > 0) {
        score += matchedTokens * 15;
        // High bonus if all searched words are found across the topic
        final allMatched = tokens.every((t) =>
            fullHaystack.contains(t) || fullHaystackNoSpace.contains(t));
        if (allMatched) {
          score += 50;
        }
      }

      if (score > 0) {
        scored.add((item, score));
      }
    }

    scored.sort((first, second) => second.$2.compareTo(first.$2));
    return scored.map((e) => e.$1).toList();
  }

  @override
  Component build(BuildContext context) {
    if (!component.isOpen) {
      return const div(styles: Styles(display: Display.none), []);
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
              const svg(
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
                [const Component.text('ESC')],
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
                  [Component.text('រកមិនឃើញលទ្ធផលសម្រាប់ "$_query" ឡើយ។')],
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
                        span([Component.text(item.titleKm)]),
                        span(classes: 'sidebar-badge', [Component.text(item.category)]),
                      ]),
                      div(classes: 'search-result-desc', [
                        Component.text(item.description.isNotEmpty
                            ? '${item.titleEn} — ${item.description}'
                            : item.titleEn),
                      ]),
                    ],
                  ),
            ]),

            const div(classes: 'search-modal-footer', [
              span([Component.text('ចុចដើម្បីរុករកដោយផ្ទាល់ទៅកាន់ប្រធានបទ')]),
              span([Component.text('ស្វែងរកក្នុង ខ្មែរចារ (KhmerChar)')]),
            ]),
          ],
        ),
      ],
    );
  }
}
