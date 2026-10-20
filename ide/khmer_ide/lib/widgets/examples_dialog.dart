import 'package:flutter/material.dart';
import '../models/example_snippet.dart';
import '../theme/app_theme.dart';

class ExamplesDialog extends StatelessWidget {
  final AppThemeColors theme;
  final ValueChanged<ExampleSnippet> onSelectExample;

  const ExamplesDialog({
    super.key,
    required this.theme,
    required this.onSelectExample,
  });

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: theme.surface,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 750, maxHeight: 600),
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
                  Icon(Icons.lightbulb_outline, color: theme.secondary, size: 22),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '💡 បណ្ណាល័យកូដគំរូខ្មែរ (KhmerLang Examples)',
                          style: TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.bold,
                            color: theme.textPrimary,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          'ជ្រើសរើសកូដគំរូដើម្បីសាកល្បងដំណើការភ្លាមៗក្នុង Editor',
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

            // Grid / List of examples
            Expanded(
              child: ListView.builder(
                padding: const EdgeInsets.all(16),
                itemCount: defaultExamples.length,
                itemBuilder: (context, index) {
                  final ex = defaultExamples[index];
                  return Container(
                    margin: const EdgeInsets.only(bottom: 12),
                    decoration: BoxDecoration(
                      color: theme.surfaceVariant,
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: theme.border, width: 1),
                    ),
                    child: ListTile(
                      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      leading: Container(
                        width: 44,
                        height: 44,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: theme.surfaceHighlight,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          ex.icon,
                          style: const TextStyle(fontSize: 22),
                        ),
                      ),
                      title: Text(
                        ex.titleKhmer,
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.bold,
                          color: theme.textPrimary,
                        ),
                      ),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(height: 2),
                          Text(
                            ex.titleEnglish,
                            style: TextStyle(
                              fontSize: 12,
                              color: theme.secondary,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            ex.description,
                            style: TextStyle(
                              fontSize: 12,
                              color: theme.textMuted,
                            ),
                          ),
                        ],
                      ),
                      trailing: ElevatedButton.icon(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: theme.primary,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                        ),
                        icon: const Icon(Icons.play_arrow, size: 16),
                        label: const Text(
                          'បើកកូដ (Open)',
                          style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                        ),
                        onPressed: () {
                          Navigator.of(context).pop();
                          onSelectExample(ex);
                        },
                      ),
                    ),
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
