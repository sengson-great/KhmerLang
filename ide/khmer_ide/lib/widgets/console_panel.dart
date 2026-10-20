import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../engine/runner.dart';
import '../theme/app_theme.dart';

class ConsolePanel extends StatelessWidget {
  final ExecutionResult? lastResult;
  final bool isRunning;
  final AppThemeColors theme;
  final String fontFamily;
  final VoidCallback onClear;

  const ConsolePanel({
    super.key,
    required this.lastResult,
    required this.isRunning,
    required this.theme,
    required this.fontFamily,
    required this.onClear,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: theme.consoleBackground,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Header Bar
          Container(
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 8),
            decoration: BoxDecoration(
              color: theme.surfaceVariant,
              border: Border(bottom: BorderSide(color: theme.border, width: 1)),
            ),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              physics: const ClampingScrollPhysics(),
              child: Row(
                children: [
                  Icon(Icons.terminal, size: 16, color: theme.primaryAccent),
                  const SizedBox(width: 6),
                  Text(
                    'ស្ថានីយ (Terminal)',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: theme.textPrimary,
                    ),
                  ),
                  const SizedBox(width: 10),

                  // Status Badge
                  if (isRunning)
                    _buildBadge(
                      'កំពុងរ៉ាន់...',
                      theme.warning,
                      showSpinner: true,
                    )
                  else if (lastResult != null)
                    if (lastResult!.isSuccess)
                      _buildBadge(
                        'ជោគជ័យ • ${lastResult!.duration.inMilliseconds}ms',
                        theme.success,
                      )
                    else
                      _buildBadge(
                        'កំហុស • ${lastResult!.duration.inMilliseconds}ms',
                        theme.error,
                      ),

                  const SizedBox(width: 16),

                  // Copy Output
                  if (lastResult != null && (lastResult!.stdout.isNotEmpty || lastResult!.error != null))
                    Tooltip(
                      message: 'ចម្លងលទ្ធផល (Copy)',
                      child: IconButton(
                        icon: const Icon(Icons.copy, size: 14),
                        color: theme.textMuted,
                        splashRadius: 16,
                        onPressed: () {
                          final content = [
                            if (lastResult!.stdout.isNotEmpty) lastResult!.stdout,
                            if (lastResult!.error != null) lastResult!.error,
                          ].join('\n');
                          Clipboard.setData(ClipboardData(text: content));
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('បានចម្លងលទ្ធផលទៅកាន់ Clipboard!'),
                              duration: Duration(seconds: 2),
                            ),
                          );
                        },
                      ),
                    ),

                  // Clear
                  Tooltip(
                    message: 'សម្អាតស្ថានីយ (Clear)',
                    child: IconButton(
                      icon: const Icon(Icons.clear_all, size: 16),
                      color: theme.textMuted,
                      splashRadius: 16,
                      onPressed: onClear,
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Output Body
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(14),
              child: _buildOutputContent(context),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBadge(String label, Color color, {bool showSpinner = false}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.15),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color.withValues(alpha: 0.5), width: 1),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (showSpinner) ...[
            SizedBox(
              width: 10,
              height: 10,
              child: CircularProgressIndicator(strokeWidth: 2, color: color),
            ),
            const SizedBox(width: 6),
          ] else ...[
            Container(
              width: 6,
              height: 6,
              decoration: BoxDecoration(color: color, shape: BoxShape.circle),
            ),
            const SizedBox(width: 6),
          ],
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w600,
              color: color,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildOutputContent(BuildContext context) {
    if (isRunning) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: theme.primary),
              const SizedBox(height: 16),
              Text(
                'កំពុងដំណើការកូដភាសាខ្មែរ...',
                style: TextStyle(color: theme.textSecondary, fontSize: 13),
              ),
            ],
          ),
        ),
      );
    }

    if (lastResult == null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.play_circle_outline, size: 48, color: theme.textMuted.withValues(alpha: 0.5)),
              const SizedBox(height: 12),
              Text(
                'ចុចប៊ូតុង "រ៉ាន់កូដ (Run)" ឬគ្រាប់ចុចកាត់ដើម្បីដំណើការកូដ',
                style: TextStyle(color: theme.textMuted, fontSize: 13),
              ),
              const SizedBox(height: 4),
              Text(
                'លទ្ធផល និងកំហុសនានានឹងបង្ហាញនៅទីនេះ',
                style: TextStyle(color: theme.textMuted.withValues(alpha: 0.7), fontSize: 12),
              ),
            ],
          ),
        ),
      );
    }

    final hasStdout = lastResult!.stdout.isNotEmpty;
    final hasError = lastResult!.error != null;

    if (!hasStdout && !hasError) {
      return Text(
        'កូដបានដំណើការដោយជោគជ័យ (គ្មានទិន្នផលចេញ/No output)',
        style: TextStyle(
          fontFamily: fontFamily,
          fontSize: 13,
          color: theme.textMuted,
          fontStyle: FontStyle.italic,
        ),
      );
    }

    return SelectionArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (hasStdout)
            Text(
              lastResult!.stdout,
              style: TextStyle(
                fontFamily: fontFamily,
                fontSize: 13,
                height: 1.6,
                color: theme.textPrimary,
              ),
            ),
          if (hasError) ...[
            if (hasStdout) const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: theme.error.withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: theme.error.withValues(alpha: 0.4), width: 1),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(Icons.error_outline, size: 18, color: theme.error),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      lastResult!.error!,
                      style: TextStyle(
                        fontFamily: fontFamily,
                        fontSize: 13,
                        color: theme.error,
                        height: 1.5,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
