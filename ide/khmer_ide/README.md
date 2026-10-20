# ភាសាខ្មែរ IDE (KhmerLang Flutter IDE)

កម្មវិធី **Flutter IDE សម្រាប់ភាសាប្រូក្រាមីងខ្មែរ (KhmerLang)** គឺជាបរិស្ថានអភិវឌ្ឍន៍ទំនើប (Modern Cross-Platform IDE) ដែលដំណើរការលើ macOS, Web (Browser), iOS, Android, Windows និង Linux។

---

## 🌟 លក្ខណៈពិសេសសំខាន់ៗ (Key Features)

1. **⚡ ម៉ាស៊ីន Dart ក្នុងស្រុក (Built-in Native Engine)**:
   - បានអនុវត្ត Lexer, Parser, AST, និង Interpreter ភាសាខ្មែរពេញលេញជាភាសា Dart។
   - ដំណើរការកូដបានភ្លាមៗ (Instant execution) ដោយមិនចាំបាច់មាន Python Server ឬ Internet (Offline 100%)។
   - គាំទ្រជម្រើសរ៉ាន់តាម Python Server (`http://localhost:8000/api/run`) ផងដែរ។

2. **🎨 Syntax Highlighting សម្រាប់ភាសាខ្មែរ**:
   - រំលេចពណ៌ពាក្យគន្លឹះ (`តាំង`, `បង្ហាញ`, `បើ`, `ឬបើ`, `ផ្សេងទៀត`, `ខណៈ`, `សម្រាប់`, `អនុគមន៍`, `ត្រឡប់`, `ពិត`, `មិនពិត`, `ទទេ`)។
   - រំលេចពណ៌ OOP (`ថ្នាក់`, `វិធី`, `បង្កើត`, `នេះ`, `ខ្លួនវា`, `ថ្មី`, `បន្តពី`)។
   - គាំទ្រលេខខ្មែរ `០-៩` និងលេខអន្តរជាតិ, អក្សរសម្គាល់ String, Comment (`#`, `//`, `/* */`), និងសញ្ញាប្រតិបត្តិការ។

3. **⌨️ Khmer Virtual Keyboard & Symbol Toolbar**:
   - របារគ្រាប់ចុចកាត់សម្រាប់បញ្ចូលលេខខ្មែរ `០-៩`, សញ្ញាវេយ្យាករណ៍ `( ) { } [ ] " ' = + - * / ; ។ ៖`, ពាក្យគន្លឹះ និងកូដគំរូ (Snippets) ដោយផ្ទាល់នៅកន្លែងទស្សន៍ទ្រនិច (Cursor)។

4. **📑 Multi-Tab Editor & Gutter Line Numbers**:
   - គ្រប់គ្រងឯកសារច្រើនផ្ទាំង (Tabs) ក្នុងពេលតែមួយ។
   - បន្ទាត់លេខ (Line Numbers Gutter) ជាមួយនឹងសញ្ញាសម្គាល់កំហុសបន្ទាត់កូដ (Error Line Highlight)។
   - អាចបើក (Open) និងរក្សាទុក (Save) ឯកសារកូដ `.khmer`។

5. **🖥️ Split-View Tools & Output Console**:
   - **ស្ថានីយលទ្ធផល (Terminal Output)**: បង្ហាញលទ្ធផលកូដ, រយៈពេលដំណើរការ (ms), ប៊ូតុង Copy និង Clear Console។
   - **ដើមឈើវេយ្យាករណ៍ (AST Tree Visualizer)**: មើលរចនាសម្ព័ន្ធ Abstract Syntax Tree ដើម្បីរៀន និងយល់ដឹងពីរបៀបដែល Parser វិភាគកូដខ្មែរ។
   - **តារាងអថេរ (Variable Inspector)**: ពិនិត្យមើលអថេរ, ប្រភេទ និងតម្លៃដែលកំពុងមានក្នុងអង្គចងចាំ។

6. **💡 បណ្ណាល័យកូដគំរូ និងតារាងពាក្យគន្លឹះ**:
   - មានកូដគំរូ ៦ ប្រភេទ (Hello World, Khmer Numerals Math, Control Flow, Fibonacci, OOP Classes, Arrays & Dicts) អាចបើកសាកល្បងដោយចុចតែម្តង (1-Click Load)។
   - តារាង Cheat Sheet ពន្យល់ពាក្យគន្លឹះ និងវេយ្យាករណ៍ខ្មែរ។

7. **🎭 ស្បែកពណ៌ (Themes) & ការកំណត់**:
   - គាំទ្រ ៤ ស្បែកពណ៌: **រាត្រីអង្គរ (Angkor Dark)**, **ស៊ីប័រខ្មែរ (Cyber Khmer)**, **ថ្ងៃលិចអង្គរ (Angkor Sunset)**, និង **ពន្លឺស្រស់ថ្លា (Clean Light)**។
   - បង្កើន/បន្ថយទំហំអក្សរ (`A-` / `A+`) តាមតម្រូវការ។

---

## 🚀 របៀបដំណើការ (How to Run)

### ១. ដំណើការលើ Desktop (macOS)
```bash
cd khmer_ide
flutter run -d macos
```

### ២. ដំណើការលើ Web Browser (Chrome)
```bash
cd khmer_ide
flutter run -d chrome
```

### ៣. ដំណើរការតេស្ត Unit Tests
```bash
cd khmer_ide
flutter test
```

### ៤. Build កញ្ចប់ Release
```bash
# Build សម្រាប់ Web
flutter build web

# Build សម្រាប់ macOS
flutter build macos
```

---

## 📂 រចនាសម្ព័ន្ធគម្រោង (Project Structure)

```text
khmer_ide/
├── lib/
│   ├── engine/                     # KhmerLang Dart Engine (Parity with Python Core)
│   │   ├── tokens.dart             # Token types, keywords, Khmer numerals
│   │   ├── ast_nodes.dart          # AST class hierarchy
│   │   ├── errors.dart             # KhmerLang error definitions
│   │   ├── lexer.dart              # Unicode Khmer Lexer
│   │   ├── parser.dart             # Recursive descent Parser
│   │   ├── environment.dart        # Scopes, builtins (បង្ហាញ, ប្រវែង, etc.)
│   │   ├── interpreter.dart        # Tree-walk Interpreter
│   │   └── runner.dart             # Execution runner & profiling
│   ├── models/
│   │   ├── editor_tab.dart         # Multi-tab model
│   │   └── example_snippet.dart    # Khmer code examples
│   ├── services/
│   │   └── execution_service.dart  # Local Dart & Python server runner
│   ├── theme/
│   │   ├── app_theme.dart          # App themes (Angkor Dark, Sunset, etc.)
│   │   └── syntax_theme.dart       # Syntax highlighting colors
│   ├── widgets/
│   │   ├── app_header.dart         # Responsive toolbar & controls
│   │   ├── editor_pane.dart        # Editor tabs, gutters & text area
│   │   ├── syntax_highlighter.dart # KhmerCodeEditingController
│   │   ├── khmer_keyboard_toolbar.dart # Virtual Khmer Keyboard
│   │   ├── console_panel.dart      # Terminal output with badges
│   │   ├── ast_tree_panel.dart     # Interactive AST tree
│   │   ├── variable_inspector_panel.dart # Variables viewer
│   │   ├── cheat_sheet_dialog.dart # Keyword reference dialog
│   │   └── examples_dialog.dart    # Code snippets dialog
│   └── main.dart                   # Application entry point
└── test/
    ├── engine_test.dart            # Unit tests for KhmerLang Dart engine
    └── widget_test.dart            # Smoke tests for IDE UI
```
