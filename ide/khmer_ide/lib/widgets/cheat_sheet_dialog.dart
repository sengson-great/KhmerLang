import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../theme/app_theme.dart';

class CheatSheetDialog extends StatelessWidget {
  final AppThemeColors theme;
  final String fontFamily;

  const CheatSheetDialog({
    super.key,
    required this.theme,
    required this.fontFamily,
  });

  static const List<Map<String, String>> cheatSheetData = [
    {
      'keyword': 'តាំង',
      'meaning': 'Variable Declaration (អថេរ)',
      'example': 'តាំង x = ១០;\nតាំង ឈ្មោះ = "សុខ";',
    },
    {
      'keyword': 'បង្ហាញ',
      'meaning': 'Print / Output (បង្ហាញលទ្ធផល)',
      'example': 'បង្ហាញ("សួស្តី!", x);',
    },
    {
      'keyword': 'បើ / ឬបើ / ផ្សេងទៀត',
      'meaning': 'If / Else If / Else',
      'example': 'បើ (x > ៥) {\n    បង្ហាញ("ធំជាង ៥")\n} ឬបើ (x == ៥) {\n    បង្ហាញ("ស្មើ ៥")\n} ផ្សេងទៀត {\n    បង្ហាញ("តូចជាង ៥")\n}',
    },
    {
      'keyword': 'ខណៈ',
      'meaning': 'While loop (រង្វិលជុំខណៈ)',
      'example': 'ខណៈ (x > ០) {\n    x = x - ១\n}',
    },
    {
      'keyword': 'សម្រាប់',
      'meaning': 'For loop (រង្វិលជុំសម្រាប់)',
      'example': 'សម្រាប់ (តាំង i = ០; i < ៥; i = i + ១) {\n    បង្ហាញ(i)\n}',
    },
    {
      'keyword': 'អនុគមន៍ / ត្រឡប់',
      'meaning': 'Function Definition & Return',
      'example': 'អនុគមន៍ បូក(a, b) {\n    ត្រឡប់ a + b\n}',
    },
    {
      'keyword': 'ថ្នាក់ / វិធី / បង្កើត',
      'meaning': 'OOP Class, Method & Constructor',
      'example': 'ថ្នាក់ មនុស្ស {\n    បង្កើត(ឈ្មោះ) { នេះ.ឈ្មោះ = ឈ្មោះ }\n    វិធី ជម្រាបសួរ() { បង្ហាញ(នេះ.ឈ្មោះ) }\n}',
    },
    {
      'keyword': 'នេះ / ខ្លួនវា',
      'meaning': 'this / self reference',
      'example': 'នេះ.អាយុ = ២១',
    },
    {
      'keyword': 'ថ្មី',
      'meaning': 'New instance instantiation',
      'example': 'តាំង p = ថ្មី មនុស្ស("សុខ");',
    },
    {
      'keyword': 'បន្តពី',
      'meaning': 'Class Inheritance (extends)',
      'example': 'ថ្នាក់ សិស្ស បន្តពី មនុស្ស { ... }',
    },
    {
      'keyword': 'ពិត / មិនពិត / ទទេ',
      'meaning': 'True / False / Null',
      'example': 'តាំង ត្រូវ = ពិត;\nតាំង អត់ទិន្នន័យ = ទទេ;',
    },
    {
      'keyword': 'ប្រវែង / len',
      'meaning': 'Length of string, array, or object',
      'example': 'ប្រវែង([១, ២, ៣]) // ត្រឡប់ ៣',
    },
    {
      'keyword': 'បន្ថែម / append',
      'meaning': 'Append element to array',
      'example': 'បន្ថែម(បញ្ជី, ធាតុថ្មី);',
    },
    {
      'keyword': 'ប្រភេទ / type',
      'meaning': 'Type check',
      'example': 'ប្រភេទ(១០) // "លេខ"',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: theme.surface,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 800, maxHeight: 650),
        child: Column(
          children: [
            // Header
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
              decoration: BoxDecoration(
                color: theme.surfaceVariant,
                borderRadius: const BorderRadius.vertical(top: Radius.circular(14)),
                border: Border(bottom: BorderSide(color: theme.border, width: 1)),
              ),
              child: Row(
                children: [
                  Icon(Icons.menu_book, color: theme.primaryAccent, size: 22),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '📖 តារាងពាក្យគន្លឹះ និងវេយ្យាករណ៍ភាសាខ្មែរ (KhmerLang Cheat Sheet)',
                          style: TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.bold,
                            color: theme.textPrimary,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          'ឯកសារយោង និងកូដគំរូសម្រាប់ប្រើប្រាស់ក្នុងកម្មវិធី',
                          style: TextStyle(fontSize: 12, color: theme.textMuted),
                        ),
                      ],
                    ),
                  ),
                  IconButton(
                    icon: Icon(Icons.close, color: theme.textMuted),
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                ],
              ),
            ),

            // Content Table
            Expanded(
              child: ListView.separated(
                padding: const EdgeInsets.all(16),
                itemCount: cheatSheetData.length,
                separatorBuilder: (context, index) => Divider(color: theme.border, height: 16),
                itemBuilder: (context, index) {
                  final item = cheatSheetData[index];
                  return Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Keyword Badge
                      SizedBox(
                        width: 180,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              decoration: BoxDecoration(
                                color: theme.primary.withValues(alpha: 0.15),
                                borderRadius: BorderRadius.circular(6),
                                border: Border.all(color: theme.primary.withValues(alpha: 0.4)),
                              ),
                              child: Text(
                                item['keyword']!,
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.bold,
                                  color: theme.primaryAccent,
                                ),
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              item['meaning']!,
                              style: TextStyle(
                                fontSize: 11,
                                color: theme.textMuted,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 16),

                      // Example Code
                      Expanded(
                        child: Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: theme.surfaceVariant,
                            borderRadius: BorderRadius.circular(8),
                            border: Border.all(color: theme.border),
                          ),
                          child: Row(
                            children: [
                              Expanded(
                                child: Text(
                                  item['example']!,
                                  style: TextStyle(
                                    fontFamily: fontFamily,
                                    fontSize: 12,
                                    height: 1.4,
                                    color: theme.textPrimary,
                                  ),
                                ),
                              ),
                              Tooltip(
                                message: 'ចម្លងកូដគំរូ',
                                child: IconButton(
                                  icon: const Icon(Icons.copy, size: 14),
                                  color: theme.textMuted,
                                  splashRadius: 16,
                                  onPressed: () {
                                    Clipboard.setData(ClipboardData(text: item['example']!));
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      SnackBar(
                                        content: Text('បានចម្លង "${item['keyword']}"!'),
                                        duration: const Duration(seconds: 1),
                                      ),
                                    );
                                  },
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
