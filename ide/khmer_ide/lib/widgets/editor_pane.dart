import 'package:flutter/material.dart';
import '../models/editor_tab.dart';
import '../theme/app_theme.dart';
import 'syntax_highlighter.dart';
import 'khmer_keyboard_toolbar.dart';

class EditorPane extends StatefulWidget {
  final List<EditorTab> tabs;
  final int activeTabIndex;
  final ValueChanged<int> onTabSelected;
  final ValueChanged<int> onTabClosed;
  final VoidCallback onNewTab;
  final KhmerCodeEditingController codeController;
  final AppThemeColors theme;
  final double fontSize;
  final String fontFamily;
  final int? errorLine;
  final VoidCallback onCodeChanged;

  const EditorPane({
    super.key,
    required this.tabs,
    required this.activeTabIndex,
    required this.onTabSelected,
    required this.onTabClosed,
    required this.onNewTab,
    required this.codeController,
    required this.theme,
    required this.fontSize,
    required this.fontFamily,
    this.errorLine,
    required this.onCodeChanged,
  });

  @override
  State<EditorPane> createState() => _EditorPaneState();
}

class _EditorPaneState extends State<EditorPane> {
  final ScrollController _verticalScrollController = ScrollController();
  final ScrollController _horizontalScrollController = ScrollController();
  final ScrollController _lineNumbersScrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _verticalScrollController.addListener(() {
      if (_lineNumbersScrollController.hasClients) {
        _lineNumbersScrollController.jumpTo(_verticalScrollController.offset);
      }
    });
  }

  @override
  void dispose() {
    _verticalScrollController.dispose();
    _horizontalScrollController.dispose();
    _lineNumbersScrollController.dispose();
    super.dispose();
  }

  int _calculateLineCount() {
    final text = widget.codeController.text;
    if (text.isEmpty) return 1;
    return text.split('\n').length;
  }

  @override
  Widget build(BuildContext context) {
    final theme = widget.theme;
    final lineCount = _calculateLineCount();
    final lineHeight = widget.fontSize * 1.5;

    return Container(
      color: theme.background,
      child: Column(
        children: [
          // 1. Tab Bar
          _buildTabBar(theme),

          // 2. Editor & Line Numbers
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Line numbers gutter
                _buildLineNumbersGutter(theme, lineCount, lineHeight),

                // Editor Text Area
                Expanded(
                  child: Container(
                    color: theme.background,
                    child: Scrollbar(
                      controller: _verticalScrollController,
                      thumbVisibility: true,
                      child: SingleChildScrollView(
                        controller: _verticalScrollController,
                        physics: const ClampingScrollPhysics(),
                        child: Scrollbar(
                          controller: _horizontalScrollController,
                          thumbVisibility: true,
                          notificationPredicate: (notification) => notification.depth == 1,
                          child: SingleChildScrollView(
                            controller: _horizontalScrollController,
                            scrollDirection: Axis.horizontal,
                            physics: const ClampingScrollPhysics(),
                            child: ConstrainedBox(
                              constraints: const BoxConstraints(
                                minWidth: 800,
                                maxWidth: 4000,
                              ),
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                                child: TextField(
                                  controller: widget.codeController,
                                  maxLines: null,
                                  keyboardType: TextInputType.multiline,
                                  style: TextStyle(
                                    fontFamily: widget.fontFamily,
                                    fontSize: widget.fontSize,
                                    height: 1.5,
                                    color: theme.textPrimary,
                                  ),
                                  cursorColor: theme.primaryAccent,
                                  cursorWidth: 2.0,
                                  decoration: const InputDecoration(
                                    border: InputBorder.none,
                                    isDense: true,
                                    contentPadding: EdgeInsets.zero,
                                  ),
                                  onChanged: (_) {
                                    setState(() {});
                                    widget.onCodeChanged();
                                  },
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),

          // 3. Khmer Virtual Keyboard & Symbol Quick Toolbar
          KhmerKeyboardToolbar(
            controller: widget.codeController,
            theme: theme,
            onCodeChanged: widget.onCodeChanged,
          ),
        ],
      ),
    );
  }

  Widget _buildTabBar(AppThemeColors theme) {
    return Container(
      height: 40,
      decoration: BoxDecoration(
        color: theme.surfaceVariant,
        border: Border(bottom: BorderSide(color: theme.border, width: 1)),
      ),
      child: Row(
        children: [
          Expanded(
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: widget.tabs.length,
              itemBuilder: (context, index) {
                final tab = widget.tabs[index];
                final isActive = index == widget.activeTabIndex;

                return InkWell(
                  onTap: () => widget.onTabSelected(index),
                  child: Container(
                    constraints: const BoxConstraints(minWidth: 120, maxWidth: 200),
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    decoration: BoxDecoration(
                      color: isActive ? theme.background : Colors.transparent,
                      border: Border(
                        right: BorderSide(color: theme.border, width: 1),
                        top: isActive
                            ? BorderSide(color: theme.primary, width: 2)
                            : BorderSide.none,
                      ),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.description_outlined,
                          size: 14,
                          color: isActive ? theme.primaryAccent : theme.textMuted,
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            tab.title + (tab.isDirty ? ' •' : ''),
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: isActive ? FontWeight.w600 : FontWeight.normal,
                              color: isActive ? theme.textPrimary : theme.textMuted,
                            ),
                          ),
                        ),
                        if (widget.tabs.length > 1)
                          InkWell(
                            onTap: () => widget.onTabClosed(index),
                            borderRadius: BorderRadius.circular(4),
                            child: Padding(
                              padding: const EdgeInsets.all(2.0),
                              child: Icon(
                                Icons.close,
                                size: 14,
                                color: theme.textMuted,
                              ),
                            ),
                          ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),

          // New Tab Button
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 6),
            child: Tooltip(
              message: 'បង្កើតផ្ទាំងថ្មី (New File)',
              child: IconButton(
                icon: const Icon(Icons.add, size: 18),
                color: theme.textSecondary,
                onPressed: widget.onNewTab,
                splashRadius: 18,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLineNumbersGutter(
    AppThemeColors theme,
    int lineCount,
    double lineHeight,
  ) {
    return Container(
      width: 52,
      decoration: BoxDecoration(
        color: theme.surfaceVariant.withValues(alpha: 0.5),
        border: Border(right: BorderSide(color: theme.border, width: 1)),
      ),
      child: SingleChildScrollView(
        controller: _lineNumbersScrollController,
        physics: const NeverScrollableScrollPhysics(),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: List.generate(lineCount, (i) {
              final lineNum = i + 1;
              final isError = widget.errorLine == lineNum;

              return Container(
                height: lineHeight,
                alignment: Alignment.centerRight,
                padding: const EdgeInsets.only(right: 8),
                decoration: BoxDecoration(
                  color: isError
                      ? theme.error.withValues(alpha: 0.25)
                      : Colors.transparent,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    if (isError)
                      Padding(
                        padding: const EdgeInsets.only(right: 4),
                        child: Icon(
                          Icons.error_outline,
                          size: 11,
                          color: theme.error,
                        ),
                      ),
                    Text(
                      '$lineNum',
                      style: TextStyle(
                        fontFamily: widget.fontFamily,
                        fontSize: widget.fontSize * 0.85,
                        color: isError ? theme.error : theme.textMuted,
                        fontWeight: isError ? FontWeight.bold : FontWeight.normal,
                      ),
                    ),
                  ],
                ),
              );
            }),
          ),
        ),
      ),
    );
  }
}
