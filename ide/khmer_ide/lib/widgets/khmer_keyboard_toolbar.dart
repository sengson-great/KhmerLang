import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class KhmerKeyboardToolbar extends StatefulWidget {
  final TextEditingController controller;
  final AppThemeColors theme;
  final VoidCallback onCodeChanged;

  const KhmerKeyboardToolbar({
    super.key,
    required this.controller,
    required this.theme,
    required this.onCodeChanged,
  });

  @override
  State<KhmerKeyboardToolbar> createState() => _KhmerKeyboardToolbarState();
}

class _KhmerKeyboardToolbarState extends State<KhmerKeyboardToolbar> {
  int _selectedCategoryIndex = 0;

  final List<String> _categories = [
    'លេខខ្មែរ (០-៩)',
    'សញ្ញា (Symbols)',
    'ពាក្យគន្លឹះ (Keywords)',
    'OOP ខ្មែរ',
    'កូដគំរូ (Snippets)',
  ];

  final List<String> _digits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

  final List<String> _symbols = [
    '(', ')', '{', '}', '[', ']', '"', "'", '=', '==', '!=',
    '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '.', '។', '៖', ';', ',',
  ];

  final List<String> _keywords = [
    'តាំង ',
    'បង្ហាញ',
    'បើ ',
    'ឬបើ ',
    'ផ្សេងទៀត ',
    'ខណៈ ',
    'សម្រាប់ ',
    'អនុគមន៍ ',
    'ត្រឡប់ ',
    'ពិត',
    'មិនពិត',
    'ទទេ',
    'និង',
    'ឬ',
  ];

  final List<String> _oopKeywords = [
    'ថ្នាក់ ',
    'វិធី ',
    'បង្កើត',
    'នេះ.',
    'ខ្លួនវា.',
    'ថ្មី ',
    'បន្តពី ',
  ];

  final List<Map<String, String>> _snippets = [
    {'label': 'បង្ហាញ(...)', 'code': 'បង្ហាញ("")'},
    {'label': 'តាំង x = ...', 'code': 'តាំង x = '},
    {'label': 'បើ (...) { ... }', 'code': 'បើ () {\n    \n}'},
    {'label': 'ខណៈ (...) { ... }', 'code': 'ខណៈ () {\n    \n}'},
    {'label': 'សម្រាប់ (...) { ... }', 'code': 'សម្រាប់ (តាំង i = ០; i < ៥; i = i + ១) {\n    \n}'},
    {'label': 'អនុគមន៍ (...) { ... }', 'code': 'អនុគមន៍ ឈ្មោះ() {\n    ត្រឡប់ \n}'},
    {'label': 'ថ្នាក់ { បង្កើត }', 'code': 'ថ្នាក់ ឈ្មោះ {\n    បង្កើត() {\n        \n    }\n}'},
  ];

  void _insertText(String insertText) {
    final text = widget.controller.text;
    final selection = widget.controller.selection;

    int start = selection.start;
    int end = selection.end;

    if (start < 0 || end < 0) {
      start = text.length;
      end = text.length;
    }

    final newText = text.replaceRange(start, end, insertText);
    final newCursorPos = start + insertText.length;

    widget.controller.value = TextEditingValue(
      text: newText,
      selection: TextSelection.collapsed(offset: newCursorPos),
    );

    widget.onCodeChanged();
  }

  @override
  Widget build(BuildContext context) {
    final theme = widget.theme;

    return Container(
      decoration: BoxDecoration(
        color: theme.surfaceVariant,
        border: Border(
          top: BorderSide(color: theme.border, width: 1),
          bottom: BorderSide(color: theme.border, width: 1),
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Category selector tabs
          SizedBox(
            height: 36,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              itemCount: _categories.length,
              itemBuilder: (context, index) {
                final isSelected = _selectedCategoryIndex == index;
                return Padding(
                  padding: const EdgeInsets.only(right: 6),
                  child: InkWell(
                    onTap: () {
                      setState(() {
                        _selectedCategoryIndex = index;
                      });
                    },
                    borderRadius: BorderRadius.circular(6),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: isSelected
                            ? theme.primary.withValues(alpha: 0.2)
                            : Colors.transparent,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(
                          color: isSelected ? theme.primary : Colors.transparent,
                          width: 1,
                        ),
                      ),
                      child: Text(
                        _categories[index],
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                          color: isSelected ? theme.primaryAccent : theme.textMuted,
                        ),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),

          // Items row
          SizedBox(
            height: 42,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              children: _buildCurrentCategoryItems(theme),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _buildCurrentCategoryItems(AppThemeColors theme) {
    switch (_selectedCategoryIndex) {
      case 0:
        return _digits.map((d) => _buildKeyButton(d, d, theme, isDigit: true)).toList();
      case 1:
        return _symbols.map((s) => _buildKeyButton(s, s, theme, isSymbol: true)).toList();
      case 2:
        return _keywords.map((k) => _buildKeyButton(k.trim(), k, theme, isKeyword: true)).toList();
      case 3:
        return _oopKeywords.map((k) => _buildKeyButton(k.trim(), k, theme, isOop: true)).toList();
      case 4:
        return _snippets.map((snip) => _buildSnippetButton(snip['label']!, snip['code']!, theme)).toList();
      default:
        return [];
    }
  }

  Widget _buildKeyButton(
    String label,
    String insertValue,
    AppThemeColors theme, {
    bool isDigit = false,
    bool isSymbol = false,
    bool isKeyword = false,
    bool isOop = false,
  }) {
    Color bg = theme.surface;
    Color textColor = theme.textPrimary;
    Color border = theme.border;

    if (isDigit) {
      textColor = const Color(0xFFFB923C); // Orange
    } else if (isKeyword) {
      textColor = const Color(0xFFC084FC); // Purple
    } else if (isOop) {
      textColor = const Color(0xFFFBBF24); // Gold
    } else if (isSymbol) {
      textColor = const Color(0xFF38BDF8); // Sky
    }

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 3),
      child: Tooltip(
        message: 'បញ្ចូល $insertValue',
        child: InkWell(
          onTap: () => _insertText(insertValue),
          borderRadius: BorderRadius.circular(6),
          child: Container(
            constraints: const BoxConstraints(minWidth: 34),
            padding: const EdgeInsets.symmetric(horizontal: 8),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: bg,
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: border, width: 1),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.1),
                  blurRadius: 2,
                  offset: const Offset(0, 1),
                ),
              ],
            ),
            child: Text(
              label,
              style: TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w600,
                color: textColor,
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildSnippetButton(String label, String code, AppThemeColors theme) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4),
      child: Tooltip(
        message: code,
        child: InkWell(
          onTap: () => _insertText(code),
          borderRadius: BorderRadius.circular(6),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: theme.surfaceHighlight.withValues(alpha: 0.5),
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: theme.primary.withValues(alpha: 0.4), width: 1),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.code, size: 14, color: theme.primaryAccent),
                const SizedBox(width: 6),
                Text(
                  label,
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: theme.textPrimary,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
