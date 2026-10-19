library;

import 'package:jaspr/dom.dart';
import 'package:jaspr/server.dart';

import 'app.dart';
import 'main.server.options.dart';

void main() {
  Jaspr.initializeApp(
    options: defaultServerOptions,
  );

  runApp(Document(
    lang: 'km',
    base: null,
    title: 'ភាសាខ្មែរ (KhmerLang) — ឯកសារណែនាំផ្លូវការ | Official Documentation',
    meta: {
      'description': 'ឯកសារណែនាំផ្លូវការនៃភាសាប្រូក្រាមីងខ្មែរ (KhmerLang) — ភាសាប្រូក្រាមីងកម្រិតខ្ពស់គាំទ្រ OOP, លេខខ្មែរ ០-៩ និងមាន Web & Flutter IDE។',
      'keywords': 'KhmerLang, ភាសាខ្មែរ, Khmer Programming Language, Coding in Khmer, OOP in Khmer, Dart, Compiler',
      'viewport': 'width=device-width, initial-scale=1.0',
      'author': 'KhmerLang Team',
      'robots': 'index, follow',
      'og:title': 'ភាសាខ្មែរ (KhmerLang) — ឯកសារណែនាំផ្លូវការ',
      'og:description': 'រៀនសរសេរកូដជាភាសាខ្មែរដោយផ្ទាល់ ជាមួយវេយ្យាករណ៍ច្បាស់លាស់ គាំទ្រ OOP និងរ៉ាន់កូដលើ Web Browser ភ្លាមៗ!',
      'og:type': 'website',
      'og:url': 'https://sengson-great.github.io/KhmerLang/',
      'twitter:card': 'summary_large_image',
      'twitter:title': 'ភាសាខ្មែរ (KhmerLang) — ឯកសារណែនាំផ្លូវការ',
      'twitter:description': 'រៀនសរសេរកូដជាភាសាខ្មែរដោយផ្ទាល់ ជាមួយវេយ្យាករណ៍ច្បាស់លាស់ គាំទ្រ OOP និងរ៉ាន់កូដលើ Web Browser ភ្លាមៗ!',
    },
    head: [
      link(rel: 'canonical', href: 'https://sengson-great.github.io/KhmerLang/'),
      link(rel: 'icon', type: 'image/png', href: 'favicon.png'),
      link(rel: 'preconnect', href: 'https://fonts.googleapis.com'),
      link(rel: 'preconnect', href: 'https://fonts.gstatic.com', attributes: {'crossorigin': ''}),
      link(rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Kantumruy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'),
      link(rel: 'stylesheet', href: 'style.css'),
      script(
        attributes: {'type': 'application/ld+json'},
        content: r'''{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "KhmerLang",
      "alternateName": "ភាសាខ្មែរ",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "macOS, Linux, Windows, Web",
      "description": "ភាសាប្រូក្រាមីងកម្រិតខ្ពស់គាំទ្រ OOP, លេខខ្មែរ ០-៩ និងមាន Web & Flutter IDE",
      "url": "https://sengson-great.github.io/KhmerLang/",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "TechArticle",
      "headline": "ភាសាខ្មែរ (KhmerLang) — ឯកសារណែនាំផ្លូវការ",
      "description": "ឯកសារណែនាំផ្លូវការនៃភាសាប្រូក្រាមីងខ្មែរ (KhmerLang)",
      "url": "https://sengson-great.github.io/KhmerLang/",
      "inLanguage": ["km", "en"],
      "about": {
        "@type": "ComputerLanguage",
        "name": "KhmerLang"
      }
    }
  ]
}''',
      ),
    ],
    body: const App(),
  ));
}
