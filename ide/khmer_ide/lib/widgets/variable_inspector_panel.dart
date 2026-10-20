import 'package:flutter/material.dart';
import '../engine/environment.dart';
import '../theme/app_theme.dart';

class VariableInspectorPanel extends StatelessWidget {
  final Map<String, dynamic> variables;
  final AppThemeColors theme;
  final String fontFamily;

  const VariableInspectorPanel({
    super.key,
    required this.variables,
    required this.theme,
    required this.fontFamily,
  });

  String _determineType(dynamic val) {
    if (val == null) return 'ទទេ (null)';
    if (val is bool) return 'តក្កវិទ្យា (bool)';
    if (val is num) return 'លេខ (number)';
    if (val is String) return 'អក្សរ (string)';
    if (val is List) return 'បញ្ជី (${val.length} ធាតុ)';
    if (val is Map) return 'វត្ថុ (${val.length} គូ)';
    if (val is KhmerInstance) return 'វត្ថុថ្នាក់ (${val.khmerClass.name})';
    if (val is KhmerClass) return 'ថ្នាក់ (${val.name})';
    if (val is KhmerFunction) return 'អនុគមន៍ (${val.name})';
    return val.runtimeType.toString();
  }

  @override
  Widget build(BuildContext context) {
    if (variables.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.view_list_outlined, size: 48, color: theme.textMuted.withValues(alpha: 0.5)),
              const SizedBox(height: 12),
              Text(
                'មិនទាន់មានអថេរនៅក្នុងអង្គចងចាំនៅឡើយទេ',
                style: TextStyle(color: theme.textMuted, fontSize: 13),
              ),
              const SizedBox(height: 4),
              Text(
                'រ៉ាន់កូដដែលមានការប្រកាស "តាំង" ដើម្បីពិនិត្យតម្លៃអថេរ',
                style: TextStyle(color: theme.textMuted.withValues(alpha: 0.7), fontSize: 12),
              ),
            ],
          ),
        ),
      );
    }

    final entries = variables.entries.toList();

    return Container(
      color: theme.surface,
      child: ListView.separated(
        padding: const EdgeInsets.all(12),
        itemCount: entries.length,
        separatorBuilder: (context, index) => Divider(color: theme.border, height: 1),
        itemBuilder: (context, index) {
          final entry = entries[index];
          final typeStr = _determineType(entry.value);
          final valueStr = formatKhmerValue(entry.value);

          return Padding(
            padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
            child: Row(
              children: [
                // Variable Icon
                Container(
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(
                    color: theme.primary.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: Icon(Icons.code, size: 14, color: theme.primaryAccent),
                ),
                const SizedBox(width: 10),

                // Name & Type
                Expanded(
                  flex: 3,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        entry.key,
                        style: TextStyle(
                          fontFamily: fontFamily,
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                          color: theme.textPrimary,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        typeStr,
                        style: TextStyle(
                          fontSize: 11,
                          color: theme.textMuted,
                        ),
                      ),
                    ],
                  ),
                ),

                // Value
                Expanded(
                  flex: 5,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    decoration: BoxDecoration(
                      color: theme.surfaceVariant,
                      borderRadius: BorderRadius.circular(6),
                      border: Border.all(color: theme.border, width: 1),
                    ),
                    child: Text(
                      valueStr,
                      style: TextStyle(
                        fontFamily: fontFamily,
                        fontSize: 12,
                        color: theme.primaryAccent,
                        fontWeight: FontWeight.w500,
                      ),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
