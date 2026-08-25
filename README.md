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

## 🚀 របៀបដំណើការ (How to Run)

### ១. ដំណើការ Programiz-Style Web IDE (Web Playground)
ដើម្បីបើកកម្មវិធីសរសេរកូដលើ Web Browser:
```bash
python3 server.py 8000
```
បន្ទាប់មកបើក Web Browser រួចចូលទៅកាន់: **`http://localhost:8000`**

### ២. ដំណើការតាម Terminal / CLI
```bash
# ដំណើការឯកសារកូដខ្មែរ OOP
./bin/khmer examples/oop.khmer

# ដំណើការឯកសារគំរូផ្សេងៗ
./bin/khmer examples/hello.khmer
./bin/khmer examples/functions.khmer

# បើក REPL សម្រាប់សរសេរកូដភ្លាមៗ
./bin/khmer
```

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
