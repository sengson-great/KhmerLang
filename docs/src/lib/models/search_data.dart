class SearchItem {
  final String id;
  final String titleKm;
  final String titleEn;
  final String category;
  final String keywords;

  const SearchItem({
    required this.id,
    required this.titleKm,
    required this.titleEn,
    required this.category,
    required this.keywords,
  });
}

const List<SearchItem> searchIndex = [
  SearchItem(
    id: 'intro',
    titleKm: 'សេចក្តីផ្តើម (Overview)',
    titleEn: 'Introduction & Vision',
    category: '🚀 ចាប់ផ្ដើមដំបូង',
    keywords: 'intro overview vision cambodia ភាសាខ្មែរ ចាប់ផ្តើម គោលបំណង',
  ),
  SearchItem(
    id: 'install',
    titleKm: 'ការដំឡើង & ការចាប់ផ្តើម (Setup)',
    titleEn: 'Installation & Toolchain',
    category: '🚀 ចាប់ផ្ដើមដំបូង',
    keywords: 'install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check',
  ),
  SearchItem(
    id: 'hello-world',
    titleKm: 'កម្មវិធីដំបូង (Hello World)',
    titleEn: 'First Program',
    category: '🚀 ចាប់ផ្ដើមដំបូង',
    keywords: 'hello world សួស្តីពិភពលោក បង្ហាញ print first program',
  ),
  SearchItem(
    id: 'variables',
    titleKm: 'អថេរ & ប្រភេទតម្លៃ (Variables)',
    titleEn: 'Variables & Data Types',
    category: '💡 មូលដ្ឋានគ្រឹះ',
    keywords: 'variables data types តាំង អថេរ let string number boolean ពិត មិនពិត ទទេ null dynamic',
  ),
  SearchItem(
    id: 'numerals',
    titleKm: 'លេខខ្មែរ & ប្រមាណវិធី (Math)',
    titleEn: 'Khmer Numerals & Math Operators',
    category: '💡 មូលដ្ឋានគ្រឹះ',
    keywords: 'numerals math ០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ លេខខ្មែរ បូក ដក គុណ ចែក modulo និង ឬ មិន',
  ),
  SearchItem(
    id: 'punctuations',
    titleKm: 'សញ្ញាវណ្ណយុត្តិ (Punctuations)',
    titleEn: 'Khmer Punctuations',
    category: '💡 មូលដ្ឋានគ្រឹះ',
    keywords: 'punctuations ខណ្ឌ បរិយោសាន គូសពីរចុច semicolon statement terminator',
  ),
  SearchItem(
    id: 'conditionals',
    titleKm: 'លក្ខខណ្ឌ បើ / ឬបើ / ផ្សេងទៀត',
    titleEn: 'Conditionals (If / Else If / Else)',
    category: '🔀 លំហូរការងារ',
    keywords: 'conditionals if else elif បើ ឬបើ ផ្សេងទៀត logic លក្ខខណ្ឌ',
  ),
  SearchItem(
    id: 'while-loop',
    titleKm: 'រង្វិលជុំ ខណៈ (While Loop)',
    titleEn: 'While Loops',
    category: '🔀 លំហូរការងារ',
    keywords: 'while loop ខណៈ រង្វិលជុំ iteration repeat',
  ),
  SearchItem(
    id: 'for-loop',
    titleKm: 'រង្វិលជុំ សម្រាប់ (For Loop)',
    titleEn: 'For Loops',
    category: '🔀 លំហូរការងារ',
    keywords: 'for loop សម្រាប់ រង្វិលជុំ count step range',
  ),
  SearchItem(
    id: 'functions',
    titleKm: 'ការបង្កើតអនុគមន៍ (Functions)',
    titleEn: 'Function Declaration',
    category: '⚡ អនុគមន៍',
    keywords: 'function អនុគមន៍ ត្រឡប់ return parameters arguments methods វិធី',
  ),
  SearchItem(
    id: 'recursion',
    titleKm: 'Recursion (កូដ Fibonacci)',
    titleEn: 'Recursive Functions & Fibonacci',
    category: '⚡ អនុគមន៍',
    keywords: 'recursion recursive fibonacci ហ្វីបូណាឈី call self អនុគមន៍ខ្លួនឯង',
  ),
  SearchItem(
    id: 'classes',
    titleKm: 'ថ្នាក់ & Constructor (OOP)',
    titleEn: 'Classes & Objects',
    category: '🏛️ សរសេរកូដតាមវត្ថុ',
    keywords: 'class oop ថ្នាក់ បង្កើត constructor នេះ this ថ្មី new object instance',
  ),
  SearchItem(
    id: 'inheritance',
    titleKm: 'ការបន្តវេនថ្នាក់ (`បន្តពី`)',
    titleEn: 'Inheritance & Subclasses',
    category: '🏛️ សរសេរកូដតាមវត្ថុ',
    keywords: 'inheritance extends បន្តពី subclass superclass oop បន្តវេន',
  ),
  SearchItem(
    id: 'builtins',
    titleKm: 'អនុគមន៍ស្ដង់ដារ (Builtins)',
    titleEn: 'Standard Built-in Functions',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'builtins standard functions បង្ហាញ ប្រវែង ប្រភេទ បន្ថែម length print type push',
  ),
  SearchItem(
    id: 'ides',
    titleKm: 'ឧបករណ៍ & IDEs (Flutter / Web)',
    titleEn: 'Developer Tools & IDEs',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'ides tools flutter ide web ide vscode editor extension cli terminal',
  ),
  SearchItem(
    id: 'cheat-sheet',
    titleKm: 'តារាងពាក្យគន្លឹះ (Cheat Sheet)',
    titleEn: 'Syntax Cheat Sheet Table',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'cheat sheet table syntax keywords តារាង ពាក្យគន្លឹះ summary reference',
  ),
  SearchItem(
    id: 'playground',
    titleKm: '🎮 ស្ថានីយសាកល្បងកូដផ្ទាល់',
    titleEn: 'Live Interactive Web Playground',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'playground runner editor live code online ide សាកល្បង ស្ថានីយ run web',
  ),
];
