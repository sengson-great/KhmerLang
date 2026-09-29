# ភាសាខ្មែរ (KhmerLang) — Khmer Programming Language & Programiz-Style Web IDE

**KhmerLang (ភាសាខ្មែរ)** គឺជាភាសាប្រូក្រាមីងដែលមានវាក្យសព្ទ និងពាក្យគន្លឹះជាភាសាខ្មែរផ្លូវការ ព្រមទាំងគាំទ្រការសរសេរប្រូក្រាមតាមបែប **OOP (Object-Oriented Programming)** និងការសរសេរលេខខ្មែរ (០-៩) ដោយផ្ទាល់។

---

## 🌟 លក្ខណៈពិសេស (Features)

- **វាក្យសព្ទខ្មែរពេញលេញ (Native Khmer Syntax)**: ប្រកាសអថេរ `តាំង`, បង្ហាញលទ្ធផល `បង្ហាញ`, លក្ខខណ្ឌ `បើ/ឬបើ/ផ្សេងទៀត`, រង្វិលជុំ `ខណៈ/សម្រាប់`, អនុគមន៍ `អនុគមន៍` និង `ត្រឡប់`។
- **Object-Oriented Programming (OOP)**: បង្កើតថ្នាក់ `ថ្នាក់`, វិធីសាស្ត្រ/Constructor `បង្កើត` & `វិធី`, សមាជិក `នេះ` (this) / `ខ្លួនវា` (self), បង្កើត Object `ថ្មី` (new), និងការបន្តវេនថ្នាក់ `បន្តពី` (extends / inheritance)។
- **គាំទ្រលេខខ្មែរ (Khmer Numerals)**: អាចប្រើប្រាស់លេខខ្មែរ `០, ១, ២, ៣, ៤, ៥, ៦, ៧, ៨, ៩` ក្នុងការគណនា និងបង្ហាញលទ្ធផលជាលេខខ្មែរដោយផ្ទាល់។
- **Programiz-Style Web IDE**: កម្មវិធីសរសេរ និងរ៉ាន់កូដតាម Web Browser មាន Quick-Insert Buttons, Syntax Highlighting (ប្រើប្រាស់ឈ្មោះ Class ជាភាសាខ្មែរ), ស្ថានីយបង្ហាញលទ្ធផល (Output Console), ឧទាហរណ៍គំរូ និងតារាងពាក្យគន្លឹះ។
- **CLI & REPL**: អាចរ៉ាន់ឯកសារ `.khmer` តាម Terminal ឬសរសេរកូដភ្លាមៗតាម REPL។

---

## 📖 តារាងពាក្យគន្លឹះ (Khmer Syntax Cheat Sheet)

| ពាក្យគន្លឹះ (Khmer Keyword) | អត្ថន័យ (Meaning) | ឧទាហរណ៍ (Example Code) |
| :--- | :--- | :--- |
| `តាំង` | Variable Declaration | `តាំង x = ១០;` |
| `បង្ហាញ` | Output / Print | `បង្ហាញ("ជម្រាបសួរ", x);` |
| `បើ` | If condition | `បើ (x > ៥) { ... }` |
| `ឬបើ` | Else If condition | `ឬបើ (x == ៥) { ... }` |
| `ផ្សេងទៀត` | Else condition | `ផ្សេងទៀត { ... }` |
| `ខណៈ` | While loop | `ខណៈ (x > ០) { x = x - ១ }` |
| `សម្រាប់` | For loop | `សម្រាប់ (តាំង i = ០; i < ៥; i = i + ១) { ... }` |
| `អនុគមន៍` / `វិធី` | Function / Method definition | `អនុគមន៍ បូក(a, b) { ត្រឡប់ a + b }` |
| `ត្រឡប់` | Return statement | `ត្រឡប់ a + b` |
| `ថ្នាក់` | Class declaration (OOP) | `ថ្នាក់ មនុស្ស { ... }` |
| `វិធី` / `បង្កើត` | Method / Constructor | `បង្កើត(ឈ្មោះ) { នេះ.ឈ្មោះ = ឈ្មោះ }` |
| `នេះ` / `ខ្លួនវា` | `this` / `self` reference | `នេះ.ឈ្មោះ` |
| `ថ្មី` | New instance instantiation | `តាំង p = ថ្មី មនុស្ស("វ៉េងឈួង", ២០)` |
| `បន្តពី` | Inheritance / Extends | `ថ្នាក់ សិស្ស បន្តពី មនុស្ស` |
| `ពិត` | Boolean True | `តាំង ត្រូវ = ពិត` |
| `មិនពិត` | Boolean False | `តាំង ខុស = មិនពិត` |
| `ទទេ` | Null / None | `តាំង ទិន្នន័យ = ទទេ` |

---

## 🚀 របៀបដំឡើង និងដំណើការ (Installation & Quickstart)

### ១. ដំឡើងភាសាខ្មែរលើកុំព្យូទ័ររបស់អ្នក (Universal One-Line Installer)
អ្នកប្រើប្រាស់ទូទៅអាចដំឡើង **KhmerLang CLI** ដោយផ្ទាល់ជាមួយពាក្យបញ្ជាតែមួយបន្ទាត់៖

* **លើ macOS & Linux (Terminal)**:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash
  ```

* **លើ Windows (PowerShell)**:
  ```powershell
  irm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex
  ```

* **ឬដំឡើងតាមរយៈ Python Pip (គ្រប់ OS ទាំងអស់)**:
  ```bash
  pip install git+https://github.com/sengson-great/KhmerLang.git
  ```

---

### ២. ការប្រើប្រាស់ជាមួយ Text Editor ណាមួយតាមរយៈ CLI (Use With Any Text Editor)
បន្ទាប់ពីដំឡើងរួច KhmerLang អាចប្រើប្រាស់ជាមួយគ្រប់ Text Editor ទាំងអស់ (VS Code, Cursor, Vim, Neovim, Sublime Text, Nano, Zed, ឬ Terminal)៖

```bash
# ១. ដំឡើង Syntax Highlighting សម្រាប់ Editor របស់អ្នក
khmer editor vscode        # សម្រាប់ VS Code / Cursor
khmer editor vim           # សម្រាប់ Vim / Neovim
khmer editor sublime       # សម្រាប់ Sublime Text
khmer editor nano          # សម្រាប់ GNU Nano

# ៣. បង្កើតគម្រោងថ្មី (Scaffold Project ជាមួយ VS Code Tasks ស្រាប់)
khmer init my_project
cd my_project

# ៤. រ៉ាន់កូដឯកសាររបស់អ្នក
khmer main.khmer
# ឬ: khmer run main.khmer

# ៥. ពិនិត្យវេយ្យាករណ៍ដោយមិនរ៉ាន់ (Syntax Check / Linter)
khmer check main.khmer

# ៦. មុខងារ Live-Reload តាមដាន និងរ៉ាន់កូដស្វ័យប្រវត្តិពេល Save ក្នុង Editor
khmer watch main.khmer

# ៧. រ៉ាន់កូដ String ផ្ទាល់ ឬតាមរយៈ Pipe / Stdin
khmer -e 'បង្ហាញ("សួស្តីពី CLI!");'
cat main.khmer | khmer -

# ៨. បើក REPL សម្រាប់សរសេរកូដភ្លាមៗ
khmer
```


### ៣. ដំណើការ Flutter IDE សម្រាប់ភាសាខ្មែរ (Cross-Platform Flutter IDE)
កម្មវិធីសរសេរកូដបែបទំនើបបង្កើតឡើងដោយ Flutter មានម៉ាស៊ីន Dart Engine ក្នុងស្រុក (រ៉ាន់ភ្លាមៗ មិនបាច់មាន Server):
```bash
cd khmer_ide

# ដំណើការលើ Desktop (macOS)
flutter run -d macos

# ឬដំណើការលើ Web Browser (Chrome)
flutter run -d chrome
```

### ៤. បើកគេហទំព័រឯកសារណែនាំផ្លូវការ (Official Documentation Website)
គេហទំព័រឯកសារណែនាំផ្លូវការ (Documentation Website) បង្កើតឡើងដោយរចនាប័ទ្មទំនើប មានម៉ាស៊ីន Client-side JS Engine សម្រាប់រ៉ាន់កូដគំរូនីមួយៗលើ Browser ដោយផ្ទាល់ រួមទាំងមាន **Live Interactive Playground**, **Search Modal (⌘K)**, និង **Dark/Light Mode**:
```bash
# ដំណើការគេហទំព័រឯកសារតាម Browser
python3 -m http.server 8088 --directory docs
```
បន្ទាប់មកបើក Web Browser រួចចូលទៅកាន់: **`http://localhost:8088`** ឬបើកឯកសារ `docs/index.html` ដោយផ្ទាល់។

---

## 💡 ឧទាហរណ៍កូដខ្មែរ OOP (OOP Code Example)

```khmer
# ឧទាហរណ៍ OOP ក្នុងភាសាខ្មែរ

ថ្នាក់ មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
    }

    វិធី ណែនាំខ្លួន() {
        បង្ហាញ("ជម្រាបសួរ! ខ្ញុំឈ្មោះ", នេះ.ឈ្មោះ, "អាយុ", នេះ.អាយុ, "ឆ្នាំ")
    }
}

# ថ្នាក់ សិស្ស បន្តពី មនុស្ស (Inheritance)
ថ្នាក់ សិស្ស បន្តពី មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ, សាលា) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
        នេះ.សាលា = សាលា
    }

    វិធី បង្ហាញព័ត៌មានសិស្ស() {
        បង្ហាញ("សិស្សឈ្មោះ:", នេះ.ឈ្មោះ, "រៀននៅ:", នេះ.សាលា)
    }
}

តាំង សិស្ស១ = ថ្មី សិស្ស("វ៉េងឈួង", ២១, "វិទ្យាល័យសិស្សពូកែ")
សិស្ស១.ណែនាំខ្លួន()
សិស្ស១.បង្ហាញព័ត៌មានសិស្ស()
```

---

## 🧪 ការសាកល្បង Unit Tests

```bash
python3 -m unittest discover -s tests
```
# KhmerLang
