import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'components/footer.dart';
import 'components/header.dart';
import 'components/search_modal.dart';
import 'components/sidebar.dart';
import 'components/toc.dart';
import 'sections/sections_basics.dart';
import 'sections/sections_control_flow.dart';
import 'sections/sections_functions_oop.dart';
import 'sections/sections_getting_started.dart';
import 'sections/sections_reference.dart';
import 'utils/browser.dart';

@client
class App extends StatefulComponent {
  const App({super.key});

  @override
  State<App> createState() => AppState();
}

class AppState extends State<App> {
  bool _isMobileOpen = false;
  bool _isSearchOpen = false;
  String _activeSectionId = 'intro';
  bool _isDarkMode = true;

  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      final theme = getInitialTheme();
      _isDarkMode = theme != 'light';
      setDocTheme(theme);

      setupGlobalKeyListeners(() {
        setState(() {
          _isSearchOpen = !_isSearchOpen;
        });
      });

      final currentHash = getLocationHash();
      if (currentHash.isNotEmpty) {
        _activeSectionId = currentHash;
      }
    }
  }

  void _toggleTheme() {
    setState(() {
      _isDarkMode = !_isDarkMode;
      setDocTheme(_isDarkMode ? 'dark' : 'light');
    });
  }

  void _toggleMobileMenu() {
    setState(() {
      _isMobileOpen = !_isMobileOpen;
    });
  }

  void _onSelectSection(String id) {
    setState(() {
      _activeSectionId = id;
      _isMobileOpen = false;
    });
    if (kIsWeb) {
      setLocationHash(id);
    }
  }

  @override
  Component build(BuildContext context) {
    return .fragment([
      Header(
        isDarkMode: _isDarkMode,
        onToggleTheme: _toggleTheme,
        onToggleMobileMenu: _toggleMobileMenu,
        onOpenSearch: () {
          setState(() {
            _isSearchOpen = true;
          });
        },
      ),

      div(classes: 'docs-container', [
        Sidebar(
          isMobileOpen: _isMobileOpen,
          activeSectionId: _activeSectionId,
          onSelectSection: _onSelectSection,
        ),

        const main_(classes: 'docs-main-content', [
          div(classes: 'content-wrapper', [
            GettingStartedSections(),
            BasicsSections(),
            ControlFlowSections(),
            FunctionsOopSections(),
            ReferenceSections(),
          ]),
        ]),

        TableOfContents(
          activeSectionId: _activeSectionId,
          onSelectSection: _onSelectSection,
        ),
      ]),

      const Footer(),

      SearchModal(
        isOpen: _isSearchOpen,
        onClose: () {
          setState(() {
            _isSearchOpen = false;
          });
        },
        onSelectSection: _onSelectSection,
      ),
    ]);
  }
}
