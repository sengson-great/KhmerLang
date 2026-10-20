import 'dart:convert';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';

import 'engine/runner.dart';
import 'models/editor_tab.dart';
import 'models/example_snippet.dart';
import 'services/execution_service.dart';
import 'theme/app_theme.dart';
import 'theme/syntax_theme.dart';
import 'widgets/app_header.dart';
import 'widgets/ast_tree_panel.dart';
import 'widgets/cheat_sheet_dialog.dart';
import 'widgets/console_panel.dart';
import 'widgets/editor_pane.dart';
import 'widgets/examples_dialog.dart';
import 'widgets/syntax_highlighter.dart';
import 'widgets/variable_inspector_panel.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const KhmerLangIdeApp());
}

class KhmerLangIdeApp extends StatefulWidget {
  const KhmerLangIdeApp({super.key});

  @override
  State<KhmerLangIdeApp> createState() => _KhmerLangIdeAppState();
}

class _KhmerLangIdeAppState extends State<KhmerLangIdeApp> {
  AppThemeMode _currentThemeMode = AppThemeMode.angkorDark;

  void _setThemeMode(AppThemeMode mode) {
    setState(() {
      _currentThemeMode = mode;
    });
  }

  @override
  Widget build(BuildContext context) {
    final themeColors = AppThemes.getTheme(_currentThemeMode);

    return MaterialApp(
      title: 'ភាសាខ្មែរ IDE • KhmerLang IDE',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: _currentThemeMode == AppThemeMode.cleanLight
            ? Brightness.light
            : Brightness.dark,
        scaffoldBackgroundColor: themeColors.background,
        colorScheme: ColorScheme.fromSeed(
          seedColor: themeColors.primary,
          brightness: _currentThemeMode == AppThemeMode.cleanLight
              ? Brightness.light
              : Brightness.dark,
          surface: themeColors.surface,
        ),
        textTheme: GoogleFonts.kantumruyProTextTheme(),
        useMaterial3: true,
      ),
      home: KhmerIdeHomeScreen(
        themeMode: _currentThemeMode,
        onThemeChanged: _setThemeMode,
      ),
    );
  }
}

class KhmerIdeHomeScreen extends StatefulWidget {
  final AppThemeMode themeMode;
  final ValueChanged<AppThemeMode> onThemeChanged;

  const KhmerIdeHomeScreen({
    super.key,
    required this.themeMode,
    required this.onThemeChanged,
  });

  @override
  State<KhmerIdeHomeScreen> createState() => _KhmerIdeHomeScreenState();
}

class _KhmerIdeHomeScreenState extends State<KhmerIdeHomeScreen> {
  // Tabs & Code
  late List<EditorTab> _tabs;
  int _activeTabIndex = 0;
  late KhmerCodeEditingController _codeController;

  // Execution
  ExecutionMode _executionMode = ExecutionMode.localDart;
  ExecutionResult? _lastResult;
  bool _isRunning = false;

  // Layout & Settings
  double _splitRatio = 0.58; // Left pane takes 58%
  double _fontSize = 15.0;
  int _activeToolTabIndex = 0; // 0: Console, 1: AST, 2: Variables

  @override
  void initState() {
    super.initState();

    final initialCode = defaultExamples[0].code;
    _tabs = [
      EditorTab(
        id: '1',
        title: 'មេ.khmer',
        content: initialCode,
        isDirty: false,
      ),
    ];

    final theme = AppThemes.getTheme(widget.themeMode);
    _codeController = KhmerCodeEditingController(
      text: initialCode,
      syntaxTheme: SyntaxTheme.fromAppTheme(theme, fontSize: _fontSize),
    );
  }

  @override
  void didUpdateWidget(covariant KhmerIdeHomeScreen oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.themeMode != widget.themeMode) {
      final theme = AppThemes.getTheme(widget.themeMode);
      _codeController.syntaxTheme =
          SyntaxTheme.fromAppTheme(theme, fontSize: _fontSize);
    }
  }

  @override
  void dispose() {
    _codeController.dispose();
    super.dispose();
  }

  void _onCodeChanged() {
    if (_activeTabIndex < _tabs.length) {
      final tab = _tabs[_activeTabIndex];
      tab.content = _codeController.text;
      if (!tab.isDirty) {
        setState(() {
          tab.isDirty = true;
        });
      }
    }
  }

  void _switchTab(int index) {
    if (index >= 0 && index < _tabs.length) {
      // Save current content
      _tabs[_activeTabIndex].content = _codeController.text;

      setState(() {
        _activeTabIndex = index;
        _codeController.text = _tabs[index].content;
        _lastResult = null;
      });
    }
  }

  void _addNewTab([String? initialContent, String? title]) {
    final newId = DateTime.now().millisecondsSinceEpoch.toString();
    final tabTitle = title ?? 'ឯកសារ_${_tabs.length + 1}.khmer';
    final content = initialContent ?? '# កូដភាសាខ្មែរថ្មី\n\nតាំង ស្វាគមន៍ = "សួស្តី!"\nបង្ហាញ(ស្វាគមន៍)\n';

    setState(() {
      _tabs.add(EditorTab(
        id: newId,
        title: tabTitle,
        content: content,
        isDirty: false,
      ));
      _activeTabIndex = _tabs.length - 1;
      _codeController.text = content;
      _lastResult = null;
    });
  }

  void _closeTab(int index) {
    if (_tabs.length <= 1) return;

    setState(() {
      _tabs.removeAt(index);
      if (_activeTabIndex >= _tabs.length) {
        _activeTabIndex = _tabs.length - 1;
      }
      _codeController.text = _tabs[_activeTabIndex].content;
      _lastResult = null;
    });
  }

  Future<void> _runCode() async {
    final code = _codeController.text;
    if (code.trim().isEmpty) return;

    setState(() {
      _isRunning = true;
    });

    try {
      final result = await ExecutionService.execute(
        code: code,
        mode: _executionMode,
      );

      setState(() {
        _lastResult = result;
        _isRunning = false;
        // If error, switch to console tab to show it
        if (!result.isSuccess) {
          _activeToolTabIndex = 0;
        }
      });
    } catch (e) {
      setState(() {
        _isRunning = false;
        _lastResult = ExecutionResult(
          status: 'error',
          stdout: '',
          error: 'កំហុសដំណើការ: $e',
          duration: Duration.zero,
          variables: {},
        );
        _activeToolTabIndex = 0;
      });
    }
  }

  Future<void> _openFile() async {
    try {
      final files = await FilePicker.pickFiles(
        type: FileType.custom,
        allowedExtensions: ['khmer', 'txt'],
      );

      if (files.isNotEmpty) {
        final file = files.first;
        final bytes = await file.readAsBytes();
        final content = utf8.decode(bytes);
        _addNewTab(content, file.name);
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('មិនអាចបើកឯកសារបានទេ: $e')),
        );
      }
    }
  }

  Future<void> _saveFile() async {
    try {
      final currentTab = _tabs[_activeTabIndex];
      final fileName = currentTab.title;
      final bytes = Uint8List.fromList(utf8.encode(_codeController.text));

      final saveUri = await FilePicker.saveFile(
        dialogTitle: 'រក្សាទុកឯកសារកូដខ្មែរ',
        fileName: fileName.endsWith('.khmer') ? fileName : '$fileName.khmer',
        type: FileType.custom,
        allowedExtensions: ['khmer'],
        bytes: bytes,
      );

      if (saveUri != null && mounted) {
        setState(() {
          currentTab.isDirty = false;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បានរក្សាទុក "$fileName" ដោយជោគជ័យ!')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('មិនអាចរក្សាទុកឯកសារបានទេ: $e')),
        );
      }
    }
  }

  void _showExamplesDialog() {
    final theme = AppThemes.getTheme(widget.themeMode);
    showDialog(
      context: context,
      builder: (ctx) => ExamplesDialog(
        theme: theme,
        onSelectExample: (snippet) {
          _addNewTab(snippet.code, '${snippet.titleKhmer}.khmer');
        },
      ),
    );
  }

  void _showCheatSheetDialog() {
    final theme = AppThemes.getTheme(widget.themeMode);
    showDialog(
      context: context,
      builder: (ctx) => CheatSheetDialog(
        theme: theme,
        fontFamily: 'Kantumruy Pro',
      ),
    );
  }

  void _setFontSize(double size) {
    setState(() {
      _fontSize = size;
      final theme = AppThemes.getTheme(widget.themeMode);
      _codeController.syntaxTheme =
          SyntaxTheme.fromAppTheme(theme, fontSize: _fontSize);
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = AppThemes.getTheme(widget.themeMode);
    final isDesktop = MediaQuery.of(context).size.width > 900;

    return CallbackShortcuts(
      bindings: {
        const SingleActivator(LogicalKeyboardKey.enter, meta: true): _runCode,
        const SingleActivator(LogicalKeyboardKey.enter, control: true): _runCode,
        const SingleActivator(LogicalKeyboardKey.keyS, meta: true): _saveFile,
        const SingleActivator(LogicalKeyboardKey.keyS, control: true): _saveFile,
        const SingleActivator(LogicalKeyboardKey.keyO, meta: true): _openFile,
        const SingleActivator(LogicalKeyboardKey.keyO, control: true): _openFile,
        const SingleActivator(LogicalKeyboardKey.keyN, meta: true): () => _addNewTab(),
        const SingleActivator(LogicalKeyboardKey.keyN, control: true): () => _addNewTab(),
      },
      child: Focus(
        autofocus: true,
        child: Scaffold(
          backgroundColor: theme.background,
          body: Column(
            children: [
              // Top App Header
              AppHeader(
                theme: theme,
                currentThemeMode: widget.themeMode,
                onThemeChanged: widget.onThemeChanged,
                executionMode: _executionMode,
                onExecutionModeChanged: (mode) {
                  setState(() => _executionMode = mode);
                },
                isRunning: _isRunning,
                onRun: _runCode,
                onOpenFile: _openFile,
                onSaveFile: _saveFile,
                onShowExamples: _showExamplesDialog,
                onShowCheatSheet: _showCheatSheetDialog,
                fontSize: _fontSize,
                onFontSizeChanged: _setFontSize,
              ),

              // Main Workspace Split
              Expanded(
                child: isDesktop
                    ? _buildDesktopLayout(theme)
                    : _buildMobileLayout(theme),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDesktopLayout(AppThemeColors theme) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final totalWidth = constraints.maxWidth;
        final leftWidth = totalWidth * _splitRatio;
        final rightWidth = totalWidth - leftWidth - 6; // 6px divider

        return Row(
          children: [
            // Left Pane: Code Editor
            SizedBox(
              width: leftWidth,
              child: EditorPane(
                tabs: _tabs,
                activeTabIndex: _activeTabIndex,
                onTabSelected: _switchTab,
                onTabClosed: _closeTab,
                onNewTab: () => _addNewTab(),
                codeController: _codeController,
                theme: theme,
                fontSize: _fontSize,
                fontFamily: 'Kantumruy Pro',
                errorLine: _lastResult?.errorLine,
                onCodeChanged: _onCodeChanged,
              ),
            ),

            // Draggable Divider
            GestureDetector(
              behavior: HitTestBehavior.translucent,
              onHorizontalDragUpdate: (details) {
                setState(() {
                  _splitRatio += details.delta.dx / totalWidth;
                  if (_splitRatio < 0.25) _splitRatio = 0.25;
                  if (_splitRatio > 0.85) _splitRatio = 0.85;
                });
              },
              child: MouseRegion(
                cursor: SystemMouseCursors.resizeColumn,
                child: Container(
                  width: 6,
                  color: theme.border,
                  child: Center(
                    child: Container(
                      width: 2,
                      height: 32,
                      decoration: BoxDecoration(
                        color: theme.textMuted.withValues(alpha: 0.5),
                        borderRadius: BorderRadius.circular(1),
                      ),
                    ),
                  ),
                ),
              ),
            ),

            // Right Pane: Output & Tools
            SizedBox(
              width: rightWidth,
              child: _buildToolsPane(theme),
            ),
          ],
        );
      },
    );
  }

  Widget _buildMobileLayout(AppThemeColors theme) {
    return Column(
      children: [
        // Editor
        Expanded(
          flex: 6,
          child: EditorPane(
            tabs: _tabs,
            activeTabIndex: _activeTabIndex,
            onTabSelected: _switchTab,
            onTabClosed: _closeTab,
            onNewTab: () => _addNewTab(),
            codeController: _codeController,
            theme: theme,
            fontSize: _fontSize,
            fontFamily: 'Kantumruy Pro',
            errorLine: _lastResult?.errorLine,
            onCodeChanged: _onCodeChanged,
          ),
        ),

        // Divider
        Container(height: 2, color: theme.border),

        // Output & Tools
        Expanded(
          flex: 4,
          child: _buildToolsPane(theme),
        ),
      ],
    );
  }

  Widget _buildToolsPane(AppThemeColors theme) {
    return Container(
      color: theme.surface,
      child: Column(
        children: [
          // Tools Tab Bar
          Container(
            height: 40,
            decoration: BoxDecoration(
              color: theme.surfaceVariant,
              border: Border(bottom: BorderSide(color: theme.border, width: 1)),
            ),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              physics: const ClampingScrollPhysics(),
              child: Row(
                children: [
                  _buildToolTabButton(
                    index: 0,
                    icon: Icons.terminal,
                    label: 'ស្ថានីយ (Terminal)',
                    theme: theme,
                  ),
                  _buildToolTabButton(
                    index: 1,
                    icon: Icons.account_tree_outlined,
                    label: 'ដើមឈើ AST',
                    theme: theme,
                  ),
                  _buildToolTabButton(
                    index: 2,
                    icon: Icons.data_object,
                    label: 'អថេរ (Variables)',
                    theme: theme,
                  ),
                ],
              ),
            ),
          ),

          // Active Tool Content
          Expanded(
            child: IndexedStack(
              index: _activeToolTabIndex,
              children: [
                // 0: Console
                ConsolePanel(
                  lastResult: _lastResult,
                  isRunning: _isRunning,
                  theme: theme,
                  fontFamily: 'Kantumruy Pro',
                  onClear: () {
                    setState(() {
                      _lastResult = null;
                    });
                  },
                ),

                // 1: AST Tree
                AstTreePanel(
                  ast: _lastResult?.ast,
                  theme: theme,
                ),

                // 2: Variables
                VariableInspectorPanel(
                  variables: _lastResult?.variables ?? {},
                  theme: theme,
                  fontFamily: 'Kantumruy Pro',
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildToolTabButton({
    required int index,
    required IconData icon,
    required String label,
    required AppThemeColors theme,
  }) {
    final isSelected = _activeToolTabIndex == index;

    return InkWell(
      onTap: () {
        setState(() {
          _activeToolTabIndex = index;
        });
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: isSelected ? theme.surface : Colors.transparent,
          border: Border(
            right: BorderSide(color: theme.border, width: 1),
            bottom: isSelected
                ? BorderSide(color: theme.primary, width: 2)
                : BorderSide.none,
          ),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              size: 14,
              color: isSelected ? theme.primaryAccent : theme.textMuted,
            ),
            const SizedBox(width: 8),
            Text(
              label,
              style: TextStyle(
                fontSize: 12,
                fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                color: isSelected ? theme.textPrimary : theme.textMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
