class SearchItem {
  final String id;
  final String titleKm;
  final String titleEn;
  final String category;
  final String keywords;
  final String description;

  const SearchItem({
    required this.id,
    required this.titleKm,
    required this.titleEn,
    required this.category,
    required this.keywords,
    this.description = '',
  });
}

const List<SearchItem> searchIndex = [
  SearchItem(
    id: 'intro',
    titleKm: 'សេចក្តីផ្តើម (Overview)',
    titleEn: 'Introduction & Vision',
    category: '🚀 ចាប់ផ្ដើមដំបូង',
    keywords: 'intro overview vision cambodia ភាសាខ្មែរ ចាប់ផ្តើម គោលបំណង ប្រវត្តិ សេចក្តីផ្តើម គំនិត ចក្ខុវិស័យ ហេតុអ្វី why features លក្ខណៈពិសេស khmerlang ខ្មែរចារ khmerchar',
    description: 'សេចក្តីផ្តើម និងចក្ខុវិស័យនៃភាសា ខ្មែរចារ (KhmerChar)',
  ),
  SearchItem(
    id: 'install',
    titleKm: 'ការដំឡើង & ការចាប់ផ្តើម (Setup)',
    titleEn: 'Installation & Toolchain',
    category: '🚀 ចាប់ផ្ដើមដំបូង',
    keywords: 'install setup cli bash curl powershell terminal dart sdk native compiler vscode vim nano watch check ដំឡើង ឧបករណ៍ រ៉ាន់ បញ្ជា កុំព្យូទ័រ universal installer one line download ទាញយក ខ្មែរចារ khmerchar',
    description: 'របៀបដំឡើង និងប្រើប្រាស់ ខ្មែរចារ (KhmerChar) CLI លើ macOS, Linux, Windows',
  ),
  SearchItem(
    id: 'hello-world',
    titleKm: 'កម្មវិធីដំបូង (Hello World)',
    titleEn: 'First Program',
    category: '🚀 ចាប់ផ្ដើមដំបូង',
    keywords: 'hello world សួស្តីពិភពលោក បង្ហាញ print first program កម្មវិធីដំបូង កូដដំបូង សួស្តី world script run output ចេញលទ្ធផល',
    description: 'សរសេរកម្មវិធីដំបូងគេបង្អស់ជាមួយពាក្យបញ្ជា បង្ហាញ()',
  ),
  SearchItem(
    id: 'variables',
    titleKm: 'អថេរ & ប្រភេទតម្លៃ (Variables)',
    titleEn: 'Variables & Data Types',
    category: '💡 មូលដ្ឋានគ្រឹះ',
    keywords: 'variables data types តាំង អថេរ let var const string number boolean ពិត មិនពិត ទទេ null dynamic ប្រភេទតម្លៃ ខ្សែអក្សរ លេខ ប៊ូលីន true false assignment តម្លៃ',
    description: 'ការប្រកាសអថេរដោយប្រើពាក្យគន្លឹះ តាំង និងប្រភេទតម្លៃនានា',
  ),
  SearchItem(
    id: 'numerals',
    titleKm: 'លេខខ្មែរ & ប្រមាណវិធី (Math)',
    titleEn: 'Khmer Numerals & Math Operators',
    category: '💡 មូលដ្ឋានគ្រឹះ',
    keywords: 'numerals math ០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ លេខខ្មែរ បូក ដក គុណ ចែក modulo និង ឬ មិន operators ប្រមាណវិធី គណិត arithmetic addition subtraction multiplication division calculate',
    description: 'ការប្រើប្រាស់លេខខ្មែរ ០-៩ និងប្រមាណវិធីគណិតវិទ្យា',
  ),
  SearchItem(
    id: 'punctuations',
    titleKm: 'សញ្ញាវណ្ណយុត្តិ (Punctuations)',
    titleEn: 'Khmer Punctuations',
    category: '💡 មូលដ្ឋានគ្រឹះ',
    keywords: 'punctuations ខណ្ឌ បរិយោសាន គូសពីរចុច semicolon statement terminator សញ្ញា វណ្ណយុត្តិ ៕ ៖ syntax terminator end line ខណ្ឌ ៕',
    description: 'ការប្រើប្រាស់សញ្ញាវណ្ណយុត្តិខ្មែរ បរិយោសាន (៕) និង semicolon (;)',
  ),
  SearchItem(
    id: 'conditionals',
    titleKm: 'លក្ខខណ្ឌ បើ / ឬបើ / ផ្សេងទៀត',
    titleEn: 'Conditionals (If / Else If / Else)',
    category: '🔀 លំហូរការងារ',
    keywords: 'conditionals if else elif បើ ឬបើ ផ្សេងទៀត logic លក្ខខណ្ឌ លំហូរការងារ branching comparison ស្មើ ធំជាង តូចជាង compare condition flow',
    description: 'ការគ្រប់គ្រងលក្ខខណ្ឌ បើ (if), ឬបើ (else if), និង ផ្សេងទៀត (else)',
  ),
  SearchItem(
    id: 'while-loop',
    titleKm: 'រង្វិលជុំ ខណៈ (While Loop)',
    titleEn: 'While Loops',
    category: '🔀 លំហូរការងារ',
    keywords: 'while loop ខណៈ រង្វិលជុំ iteration repeat cycle loop condition ធ្វើដដែលៗ repeat until loop',
    description: 'រង្វិលជុំ ខណៈ សម្រាប់ដំណើរការកូដដដែលៗតាមលក្ខខណ្ឌ',
  ),
  SearchItem(
    id: 'for-loop',
    titleKm: 'រង្វិលជុំ សម្រាប់ (For Loop)',
    titleEn: 'For Loops',
    category: '🔀 លំហូរការងារ',
    keywords: 'for loop សម្រាប់ រង្វិលជុំ count step range iteration សម្រាប់ loop finite counter ជុំ',
    description: 'រង្វិលជុំ សម្រាប់ សម្រាប់កំណត់ចំនួនជុំច្បាស់លាស់',
  ),
  SearchItem(
    id: 'functions',
    titleKm: 'ការបង្កើតអនុគមន៍ (Functions)',
    titleEn: 'Function Declaration',
    category: '⚡ អនុគមន៍',
    keywords: 'function អនុគមន៍ ត្រឡប់ return parameters arguments methods វិធី កូដ ហៅ call define អនុគមន៍ ប៉ារ៉ាម៉ែត្រ តម្លៃត្រឡប់ return value',
    description: 'ការបង្កើត និងហៅអនុគមន៍ដោយប្រើ អនុគមន៍ និង ត្រឡប់',
  ),
  SearchItem(
    id: 'recursion',
    titleKm: 'Recursion (កូដ Fibonacci)',
    titleEn: 'Recursive Functions & Fibonacci',
    category: '⚡ អនុគមន៍',
    keywords: 'recursion recursive fibonacci ហ្វីបូណាឈី call self អនុគមន៍ខ្លួនឯង fibonacci sequence math recursive algorithm គណនា',
    description: 'ការហៅអនុគមន៍ខ្លួនឯង និងការគណនាលេខ Fibonacci',
  ),
  SearchItem(
    id: 'classes',
    titleKm: 'ថ្នាក់ & Constructor (OOP)',
    titleEn: 'Classes & Objects',
    category: '🏛️ សរសេរកូដតាមវត្ថុ',
    keywords: 'class oop ថ្នាក់ បង្កើត constructor នេះ this ថ្មី new object instance សរសេរកូដតាមវត្ថុ properties methods fields វត្ថុ',
    description: 'ការបង្កើតថ្នាក់ (Class), Constructor (បង្កើត), និង Instance (ថ្មី)',
  ),
  SearchItem(
    id: 'inheritance',
    titleKm: 'ការបន្តវេនថ្នាក់ (`បន្តពី`)',
    titleEn: 'Inheritance & Subclasses',
    category: '🏛️ សរសេរកូដតាមវត្ថុ',
    keywords: 'inheritance extends បន្តពី subclass superclass oop បន្តវេន ថ្នាក់មេ ថ្នាក់កូន parent child polymorph បន្តវេនថ្នាក់',
    description: 'ការបន្តវេនពីថ្នាក់មេដោយប្រើពាក្យគន្លឹះ បន្តពី (extends)',
  ),
  SearchItem(
    id: 'getters-setters',
    titleKm: 'Getter & Setter (យក & ដាក់)',
    titleEn: 'Getters and Setters',
    category: '🏛️ សរសេរកូដតាមវត្ថុ',
    keywords: 'getter setter យក ដាក់ កំណត់ get set property properties oop encapsulation computed property validation ថ្នាក់ សមាជិក',
    description: 'ការប្រើប្រាស់ Getter (យក) និង Setter (ដាក់ / កំណត់) ក្នុងថ្នាក់ OOP',
  ),
  SearchItem(
    id: 'builtins',
    titleKm: 'អនុគមន៍ស្ដង់ដារ (Builtins)',
    titleEn: 'Standard Built-in Functions',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'builtins standard functions បង្ហាញ ប្រវែង ប្រភេទ បន្ថែម បញ្ចូល ដកចេញ លុប ភ្ជាប់ តម្រៀប ត្រឡប់បញ្ជី ស្វែងរក មាន ដាច់ខាត ឬសការ៉េ ស្វ័យគុណ បង្គត់ បង្គត់ចុះ បង្គត់ឡើង អតិបរមា អប្បបរមា ចៃដន្យ ជាលេខ ជាអក្សរ ជាតក្ក ពុះ កាត់ ជំនួស សម្អាត អក្សរធំ អក្សរតូច ពេលនេះ អាន math string array helper abs sqrt pow round floor ceil max min random split substr replace trim upper lower insert pop join sort reverse indexOf contains now input',
    description: 'អនុគមន៍ស្រាប់ៗសម្រាប់ Math, String, Array, Type Conversions និង System I/O',
  ),
  SearchItem(
    id: 'ides',
    titleKm: 'ឧបករណ៍ & IDEs (Flutter / Web)',
    titleEn: 'Developer Tools & IDEs',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'ides tools flutter ide web ide vscode editor extension cli terminal syntax highlight theme programiz studio development ឧបករណ៍ កម្មវិធីសរសេរកូដ',
    description: 'ឧបករណ៍សរសេរកូដ Flutter Desktop/Web IDE និង Extension សម្រាប់ VS Code',
  ),
  SearchItem(
    id: 'cheat-sheet',
    titleKm: 'តារាងពាក្យគន្លឹះ (Cheat Sheet)',
    titleEn: 'Syntax Cheat Sheet Table',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'cheat sheet table syntax keywords តារាង ពាក្យគន្លឹះ summary reference វាក្យសព្ទ សង្ខេប តារាងពាក្យគន្លឹះ full table quick reference cheat-sheet វេយ្យាករណ៍',
    description: 'តារាងសង្ខេបពាក្យគន្លឹះ និងវាក្យសព្ទទាំងអស់នៃភាសាខ្មែរ',
  ),
  SearchItem(
    id: 'playground',
    titleKm: '🎮 ស្ថានីយសាកល្បងកូដផ្ទាល់',
    titleEn: 'Live Interactive Web Playground',
    category: '🛠️ ឧបករណ៍ & ឯកសារយោង',
    keywords: 'playground runner editor live code online ide សាកល្បង ស្ថានីយ run web browser console live interactive interactive test execution output កូដផ្ទាល់',
    description: 'ស្ថានីយសាកល្បងកូដផ្ទាល់លើ Web Browser ដោយមិនបាច់ដំឡើងអ្វីទាំងអស់',
  ),
];
