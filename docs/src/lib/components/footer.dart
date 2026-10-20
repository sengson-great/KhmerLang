import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Footer extends StatelessComponent {
  const Footer({super.key});

  @override
  Component build(BuildContext context) {
    return footer(classes: 'docs-footer', [
      const p([
        Component.text('ភាសាខ្មែរ (KhmerLang) — រក្សាសិទ្ធិគ្រប់យ៉ាង © 2026 ដោយ Veng Chhuong និងសហគមន៍អ្នកអភិវឌ្ឍន៍កម្ពុជា'),
      ]),
      p(
        styles: Styles(
          margin: Margin.only(top: 0.4.rem),
          fontSize: 0.85.rem,
          color: const Color('#94a3b8'),
        ),
        [
          const Component.text('បង្កើតឡើងដោយមោទនភាពសម្រាប់អ្នកអភិវឌ្ឍន៍ខ្មែរទាំងអស់គ្នា | '),
          const a(
            href: 'https://github.com/sengson-great/KhmerLang',
            attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
            styles: Styles(
              color: Color('#38bdf8'),
              textDecoration: TextDecoration(line: TextDecorationLine.none),
            ),
            [Component.text('GitHub Repository')],
          ),
          const Component.text(' | '),
          const a(
            href: 'https://github.com/sengson-great/KhmerLang/releases',
            attributes: {'target': '_blank', 'rel': 'noopener noreferrer'},
            styles: Styles(
              color: Color('#38bdf8'),
              textDecoration: TextDecoration(line: TextDecorationLine.none),
            ),
            [Component.text('Releases & Binaries')],
          ),
        ],
      ),
    ]);
  }
}
