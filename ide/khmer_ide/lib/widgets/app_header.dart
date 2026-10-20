import 'package:flutter/material.dart';
import '../services/execution_service.dart';
import '../theme/app_theme.dart';

class AppHeader extends StatelessWidget {
  final AppThemeColors theme;
  final AppThemeMode currentThemeMode;
  final ValueChanged<AppThemeMode> onThemeChanged;
  final ExecutionMode executionMode;
  final ValueChanged<ExecutionMode> onExecutionModeChanged;
  final bool isRunning;
  final VoidCallback onRun;
  final VoidCallback onOpenFile;
  final VoidCallback onSaveFile;
  final VoidCallback onShowExamples;
  final VoidCallback onShowCheatSheet;
  final double fontSize;
  final ValueChanged<double> onFontSizeChanged;

  const AppHeader({
    super.key,
    required this.theme,
    required this.currentThemeMode,
    required this.onThemeChanged,
    required this.executionMode,
    required this.onExecutionModeChanged,
    required this.isRunning,
    required this.onRun,
    required this.onOpenFile,
    required this.onSaveFile,
    required this.onShowExamples,
    required this.onShowCheatSheet,
    required this.fontSize,
    required this.onFontSizeChanged,
  });

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isDesktop = screenWidth >= 1000;
    final isCompact = screenWidth < 700;

    return Container(
      height: 56,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: theme.surface,
        border: Border(bottom: BorderSide(color: theme.border, width: 1)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.1),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          // 1. Logo & Title
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 32,
                height: 32,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [theme.primary, theme.secondary],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(8),
                ),
                alignment: Alignment.center,
                child: const Text(
                  'ខ',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'ភាសាខ្មែរ',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                      color: theme.textPrimary,
                    ),
                  ),
                  const SizedBox(width: 4),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1),
                    decoration: BoxDecoration(
                      color: theme.primary.withValues(alpha: 0.2),
                      borderRadius: BorderRadius.circular(4),
                      border: Border.all(color: theme.primary.withValues(alpha: 0.5)),
                    ),
                    child: Text(
                      'IDE',
                      style: TextStyle(
                        fontSize: 9,
                        fontWeight: FontWeight.bold,
                        color: theme.primaryAccent,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),

          const SizedBox(width: 14),

          // 2. Run Button (Glowing, Primary CTA)
          ElevatedButton.icon(
            style: ElevatedButton.styleFrom(
              backgroundColor: theme.primary,
              foregroundColor: Colors.white,
              elevation: 2,
              shadowColor: theme.primary.withValues(alpha: 0.5),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            icon: isRunning
                ? const SizedBox(
                    width: 14,
                    height: 14,
                    child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                  )
                : const Icon(Icons.play_arrow_rounded, size: 18),
            label: Text(
              isRunning ? '...' : (isCompact ? 'រ៉ាន់' : 'រ៉ាន់កូដ (Run)'),
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
            ),
            onPressed: isRunning ? null : onRun,
          ),

          if (isDesktop) ...[
            const SizedBox(width: 10),
            // Execution Engine Switcher
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              height: 34,
              decoration: BoxDecoration(
                color: theme.surfaceVariant,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: theme.border),
              ),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<ExecutionMode>(
                  value: executionMode,
                  dropdownColor: theme.surface,
                  icon: Icon(Icons.keyboard_arrow_down, size: 16, color: theme.textMuted),
                  style: TextStyle(fontSize: 11, color: theme.textPrimary),
                  items: [
                    DropdownMenuItem(
                      value: ExecutionMode.localDart,
                      child: Row(
                        children: [
                          Icon(Icons.bolt, size: 15, color: theme.primaryAccent),
                          const SizedBox(width: 6),
                          const Text('Dart ក្នុងស្រុក (Local)'),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: ExecutionMode.pythonServer,
                      child: Row(
                        children: [
                          const Icon(Icons.dns_outlined, size: 15, color: Color(0xFFFBBF24)),
                          const SizedBox(width: 6),
                          const Text('Python Server (:8000)'),
                        ],
                      ),
                    ),
                  ],
                  onChanged: (val) {
                    if (val != null) onExecutionModeChanged(val);
                  },
                ),
              ),
            ),
          ],

          const Spacer(),

          // File Actions
          Tooltip(
            message: 'បើកឯកសារ .khmer (Open)',
            child: IconButton(
              icon: const Icon(Icons.folder_open_outlined, size: 18),
              color: theme.textSecondary,
              visualDensity: VisualDensity.compact,
              onPressed: onOpenFile,
            ),
          ),
          Tooltip(
            message: 'រក្សាទុកឯកសារ (Save)',
            child: IconButton(
              icon: const Icon(Icons.save_outlined, size: 18),
              color: theme.textSecondary,
              visualDensity: VisualDensity.compact,
              onPressed: onSaveFile,
            ),
          ),

          // Examples Library
          Tooltip(
            message: 'បណ្ណាល័យកូដគំរូ (Examples)',
            child: IconButton(
              icon: const Icon(Icons.lightbulb_outline, size: 18),
              color: theme.secondary,
              visualDensity: VisualDensity.compact,
              onPressed: onShowExamples,
            ),
          ),

          // Cheat Sheet Button
          Tooltip(
            message: 'តារាងពាក្យគន្លឹះ (Cheat Sheet)',
            child: IconButton(
              icon: const Icon(Icons.help_outline, size: 18),
              color: theme.textSecondary,
              visualDensity: VisualDensity.compact,
              onPressed: onShowCheatSheet,
            ),
          ),

          // Font Size Controls (on desktop only)
          if (isDesktop) ...[
            Tooltip(
              message: 'បន្ថយទំហំអក្សរ',
              child: IconButton(
                icon: const Icon(Icons.remove, size: 14),
                color: theme.textMuted,
                visualDensity: VisualDensity.compact,
                onPressed: fontSize > 10 ? () => onFontSizeChanged(fontSize - 1) : null,
              ),
            ),
            Text(
              '${fontSize.toInt()}',
              style: TextStyle(fontSize: 11, color: theme.textMuted, fontWeight: FontWeight.bold),
            ),
            Tooltip(
              message: 'បង្កើនទំហំអក្សរ',
              child: IconButton(
                icon: const Icon(Icons.add, size: 14),
                color: theme.textMuted,
                visualDensity: VisualDensity.compact,
                onPressed: fontSize < 30 ? () => onFontSizeChanged(fontSize + 1) : null,
              ),
            ),
          ],

          // Theme Switcher Popup
          PopupMenuButton<AppThemeMode>(
            tooltip: 'ប្តូររូបរាង (Themes)',
            icon: Icon(
              currentThemeMode == AppThemeMode.cleanLight
                  ? Icons.light_mode_outlined
                  : Icons.palette_outlined,
              color: theme.textSecondary,
              size: 18,
            ),
            color: theme.surface,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            onSelected: onThemeChanged,
            itemBuilder: (context) => [
              _buildThemeItem(AppThemeMode.angkorDark, 'រាត្រីអង្គរ (Angkor Dark)', Icons.dark_mode, theme),
              _buildThemeItem(AppThemeMode.cyberKhmer, 'ស៊ីប័រខ្មែរ (Cyber Khmer)', Icons.rocket_launch, theme),
              _buildThemeItem(AppThemeMode.angkorSunset, 'ថ្ងៃលិចអង្គរ (Sunset)', Icons.wb_twilight, theme),
              _buildThemeItem(AppThemeMode.cleanLight, 'ពន្លឺស្រស់ថ្លា (Clean Light)', Icons.light_mode, theme),
            ],
          ),
        ],
      ),
    );
  }

  PopupMenuItem<AppThemeMode> _buildThemeItem(
    AppThemeMode mode,
    String title,
    IconData icon,
    AppThemeColors theme,
  ) {
    final isSelected = currentThemeMode == mode;
    return PopupMenuItem(
      value: mode,
      child: Row(
        children: [
          Icon(icon, size: 16, color: isSelected ? theme.primaryAccent : theme.textMuted),
          const SizedBox(width: 10),
          Text(
            title,
            style: TextStyle(
              fontSize: 12,
              fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
              color: isSelected ? theme.primaryAccent : theme.textPrimary,
            ),
          ),
        ],
      ),
    );
  }
}
