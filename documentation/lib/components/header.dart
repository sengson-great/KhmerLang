import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'html_helpers.dart';

class Header extends StatelessComponent {
  final VoidCallback onToggleMobileMenu;
  final VoidCallback onOpenSearch;
  final VoidCallback onToggleTheme;
  final bool isDarkMode;

  const Header({
    required this.onToggleMobileMenu,
    required this.onOpenSearch,
    required this.onToggleTheme,
    required this.isDarkMode,
    super.key,
  });

  @override
  Component build(BuildContext context) {
    return header(classes: 'docs-header', id: 'docs-header', [
      div(classes: 'brand-wrapper', [
        button(
          classes: 'header-action-btn mobile-menu-toggle',
          id: 'mobile-toggle-btn',
          attributes: {'aria-label': 'បើកម៉ឺនុយ'},
          events: {'click': (e) => onToggleMobileMenu()},
          [
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
                path([], attributes: {'d': 'M4 6h16M4 12h16M4 18h16'}),
              ],
            ),
          ],
        ),
        a(
          href: '#intro',
          classes: 'brand-link',
          [
            div(classes: 'brand-logo-badge', [text('ក')]),
            div(classes: 'brand-text', [
              div(classes: 'brand-title', [
                text('ភាសាខ្មែរ '),
                span(classes: 'brand-version-badge', [text('v1.0.0')]),
              ]),
              div(classes: 'brand-subtitle', [
                text('Khmer Programming Language'),
              ]),
            ]),
          ],
        ),
      ]),

      div(classes: 'header-center-search', [
        button(
          classes: 'search-trigger-btn',
          id: 'search-trigger-btn',
          attributes: {'aria-label': 'ស្វែងរកឯកសារ (Search Docs)'},
          events: {'click': (e) => onOpenSearch()},
          [
            div(classes: 'search-trigger-content', [
              svg(
                attributes: {
                  'width': '16',
                  'height': '16',
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
              span([text('ស្វែងរកឯកសារ (Search docs)...')]),
            ]),
            div(classes: 'search-kbd-shortcut', [
              kbd('⌘'),
              kbd('K'),
            ]),
          ],
        ),
      ]),

      div(classes: 'header-actions', [
        a(
          href: '#playground',
          classes: 'btn-primary-compact',
          id: 'nav-btn-playground',
          [
            svg(
              attributes: {
                'width': '15',
                'height': '15',
                'viewBox': '0 0 24 24',
                'fill': 'currentColor',
              },
              [
                polygon([], attributes: {'points': '5 3 19 12 5 21 5 3'}),
              ],
            ),
            span([text('សាកល្បងកូដ')]),
          ],
        ),

        button(
          classes: 'header-action-btn',
          id: 'theme-toggle-btn',
          attributes: {
            'aria-label': 'ប្តូរ Dark/Light Mode',
            'title': 'ប្តូរ Dark/Light Theme',
          },
          events: {'click': (e) => onToggleTheme()},
          [
            if (isDarkMode)
              svg(
                id: 'theme-icon-moon',
                attributes: {
                  'width': '18',
                  'height': '18',
                  'viewBox': '0 0 24 24',
                  'fill': 'none',
                  'stroke': 'currentColor',
                  'stroke-width': '2',
                },
                [
                  path([], attributes: {'d': 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'}),
                ],
              )
            else
              svg(
                id: 'theme-icon-sun',
                attributes: {
                  'width': '18',
                  'height': '18',
                  'viewBox': '0 0 24 24',
                  'fill': 'none',
                  'stroke': 'currentColor',
                  'stroke-width': '2',
                },
                [
                  circle([], attributes: {'cx': '12', 'cy': '12', 'r': '4'}),
                  path([], attributes: {'d': 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41'}),
                ],
              ),
          ],
        ),

        a(
          href: 'https://github.com/sengson-great/KhmerLang',
          classes: 'header-action-btn',
          attributes: {
            'target': '_blank',
            'rel': 'noopener noreferrer',
            'aria-label': 'GitHub Repository',
            'title': 'GitHub',
          },
          [
            svg(
              attributes: {
                'width': '19',
                'height': '19',
                'viewBox': '0 0 24 24',
                'fill': 'currentColor',
              },
              [
                path([], attributes: {
                  'd': 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                }),
              ],
            ),
          ],
        ),
      ]),
    ]);
  }
}
