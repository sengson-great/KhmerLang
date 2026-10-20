"""
KhmerLang Editor Configuration & Grammar Generator
Provides syntax highlighters and editor integrations for:
- VS Code / Cursor
- Vim / Neovim
- Sublime Text
- GNU Nano
"""

import json
import os
from typing import Dict, Any


def get_vscode_tm_language() -> Dict[str, Any]:
    """Returns the TextMate grammar for KhmerLang (used by VS Code, Cursor, Sublime, Atom, etc.)."""
    return {
        "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
        "name": "KhmerLang",
        "scopeName": "source.khmer",
        "fileTypes": ["khmer", "km"],
        "patterns": [
            {"include": "#comments"},
            {"include": "#strings"},
            {"include": "#numerals"},
            {"include": "#keywords_control"},
            {"include": "#keywords_decl"},
            {"include": "#keywords_oop"},
            {"include": "#keywords_bool"},
            {"include": "#builtins"},
            {"include": "#operators"},
            {"include": "#punctuation"},
            {"include": "#functions"}
        ],
        "repository": {
            "comments": {
                "patterns": [
                    {
                        "name": "comment.line.number-sign.khmer",
                        "match": "#.*$"
                    },
                    {
                        "name": "comment.line.double-slash.khmer",
                        "match": "//.*$"
                    },
                    {
                        "name": "comment.block.khmer",
                        "begin": "/\\*",
                        "end": "\\*/"
                    }
                ]
            },
            "strings": {
                "patterns": [
                    {
                        "name": "string.quoted.double.khmer",
                        "begin": "\"",
                        "end": "\"",
                        "patterns": [
                            {"name": "constant.character.escape.khmer", "match": "\\\\."}
                        ]
                    },
                    {
                        "name": "string.quoted.single.khmer",
                        "begin": "'",
                        "end": "'",
                        "patterns": [
                            {"name": "constant.character.escape.khmer", "match": "\\\\."}
                        ]
                    }
                ]
            },
            "numerals": {
                "patterns": [
                    {
                        "name": "constant.numeric.khmer-digits.khmer",
                        "match": "[០-៩]+(\\.[០-៩]+)?"
                    },
                    {
                        "name": "constant.numeric.arabic.khmer",
                        "match": "\\b[0-9]+(\\.[0-9]+)?\\b"
                    }
                ]
            },
            "keywords_control": {
                "patterns": [
                    {
                        "name": "keyword.control.khmer",
                        "match": "(?<![\\u1780-\\u17FF])(បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|ត្រឡប់)(?![\\u1780-\\u17FF])"
                    }
                ]
            },
            "keywords_decl": {
                "patterns": [
                    {
                        "name": "keyword.declaration.khmer storage.type.khmer",
                        "match": "(?<![\\u1780-\\u17FF])(តាំង|អនុគមន៍|ថ្នាក់|វិធី|បង្កើត|ថ្មី|បន្តពី)(?![\\u1780-\\u17FF])"
                    }
                ]
            },
            "keywords_oop": {
                "patterns": [
                    {
                        "name": "variable.language.this.khmer",
                        "match": "(?<![\\u1780-\\u17FF])(នេះ|ខ្លួនវា)(?![\\u1780-\\u17FF])"
                    }
                ]
            },
            "keywords_bool": {
                "patterns": [
                    {
                        "name": "constant.language.boolean.khmer",
                        "match": "(?<![\\u1780-\\u17FF])(ពិត|មិនពិត|ទទេ)(?![\\u1780-\\u17FF])"
                    },
                    {
                        "name": "keyword.operator.logical.khmer",
                        "match": "(?<![\\u1780-\\u17FF])(និង|ឬ|មិន)(?![\\u1780-\\u17FF])"
                    }
                ]
            },
            "builtins": {
                "patterns": [
                    {
                        "name": "support.function.builtin.khmer",
                        "match": "(?<![\\u1780-\\u17FF])(បង្ហាញ|ប្រវែង|ប្រភេទ|បន្ថែម)(?![\\u1780-\\u17FF])"
                    }
                ]
            },
            "operators": {
                "patterns": [
                    {
                        "name": "keyword.operator.comparison.khmer",
                        "match": "==|!=|<=|>=|<|>"
                    },
                    {
                        "name": "keyword.operator.assignment.khmer",
                        "match": "="
                    },
                    {
                        "name": "keyword.operator.arithmetic.khmer",
                        "match": "\\+|-|\\*|/|%"
                    }
                ]
            },
            "punctuation": {
                "patterns": [
                    {
                        "name": "punctuation.terminator.khmer",
                        "match": "[។៕;]"
                    },
                    {
                        "name": "punctuation.separator.khmer",
                        "match": "[,:៖]"
                    },
                    {
                        "name": "punctuation.brackets.khmer",
                        "match": "[\\(\\)\\{\\}\\[\\]]"
                    }
                ]
            },
            "functions": {
                "patterns": [
                    {
                        "match": "([\\u1780-\\u17FFa-zA-Z_][\\u1780-\\u17FFa-zA-Z0-9_]*)\\s*(?=\\()",
                        "captures": {
                            "1": {"name": "entity.name.function.khmer"}
                        }
                    }
                ]
            }
        }
    }


def get_vscode_language_configuration() -> Dict[str, Any]:
    """Returns VS Code language configuration for KhmerLang."""
    return {
        "comments": {
            "lineComment": "#",
            "blockComment": ["/*", "*/"]
        },
        "brackets": [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"]
        ],
        "autoClosingPairs": [
            {"open": "{", "close": "}"},
            {"open": "[", "close": "]"},
            {"open": "(", "close": ")"},
            {"open": "\"", "close": "\"", "notIn": ["string"]},
            {"open": "'", "close": "'", "notIn": ["string", "comment"]}
        ],
        "surroundingPairs": [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
            ["\"", "\""],
            ["'", "'"]
        ],
        "folding": {
            "markers": {
                "start": "^\\s*#region\\b",
                "end": "^\\s*#endregion\\b"
            }
        }
    }


def get_vscode_tasks() -> Dict[str, Any]:
    """Returns VS Code tasks.json for building and checking KhmerLang files."""
    return {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "Khmer: Run Active File",
                "type": "shell",
                "command": "khmer run \"${file}\"",
                "group": {
                    "kind": "build",
                    "isDefault": True
                },
                "presentation": {
                    "echo": True,
                    "reveal": "always",
                    "focus": False,
                    "panel": "shared",
                    "showReuseMessage": False,
                    "clear": True
                },
                "problemMatcher": {
                    "owner": "khmer",
                    "fileLocation": ["relative", "${workspaceFolder}"],
                    "pattern": {
                        "regexp": "^(.*):(\\d+):(\\d+):\\s+(error|warning):\\s+(.*)$",
                        "file": 1,
                        "line": 2,
                        "column": 3,
                        "severity": 4,
                        "message": 5
                    }
                }
            },
            {
                "label": "Khmer: Check Syntax",
                "type": "shell",
                "command": "khmer check \"${file}\"",
                "group": "test",
                "presentation": {
                    "echo": False,
                    "reveal": "silent",
                    "panel": "shared"
                },
                "problemMatcher": {
                    "owner": "khmer",
                    "fileLocation": ["relative", "${workspaceFolder}"],
                    "pattern": {
                        "regexp": "^(.*):(\\d+):(\\d+):\\s+(error|warning):\\s+(.*)$",
                        "file": 1,
                        "line": 2,
                        "column": 3,
                        "severity": 4,
                        "message": 5
                    }
                }
            }
        ]
    }


def get_vim_syntax() -> str:
    """Returns Vim syntax highlighting file for KhmerLang."""
    return """\" Vim syntax file for KhmerLang (ភាសាខ្មែរ)
\" Language: KhmerLang
\" Filenames: *.khmer, *.km

if exists("b:current_syntax")
  finish
endif

syn keyword khmerKeyword តាំង អនុគមន៍ ថ្នាក់ វិធី បង្កើត ថ្មី បន្តពី
syn keyword khmerConditional បើ ឬបើ ផ្សេងទៀត
syn keyword khmerRepeat ខណៈ សម្រាប់
syn keyword khmerStatement ត្រឡប់
syn keyword khmerBoolean ពិត មិនពិត
syn keyword khmerNull ទទេ
syn keyword khmerOperator និង ឬ មិន
syn keyword khmerThis នេះ ខ្លួនវា
syn keyword khmerBuiltin បង្ហាញ ប្រវែង ប្រភេទ បន្ថែម

syn match khmerNumber "\\v[0-9]+(\\.[0-9]+)?"
syn match khmerKhmerNumber "\\v[០-៩]+(\\.[០-៩]+)?"

syn region khmerString start=+"+ skip=+\\\\\\"+ end=+"+
syn region khmerString start=+'+ skip=+\\\\\\'+ end=+'+

syn match khmerComment "#.*$"
syn match khmerComment "//.*$"
syn region khmerComment start="/\\*" end="\\*/"

syn match khmerPunctuation "[។៕៖;]"
syn match khmerFunction "\\v([\\u1780-\\u17FFa-zA-Z_][\\u1780-\\u17FFa-zA-Z0-9_]*)\\s*\\("he=e-1

hi def link khmerKeyword Keyword
hi def link khmerConditional Conditional
hi def link khmerRepeat Repeat
hi def link khmerStatement Statement
hi def link khmerBoolean Boolean
hi def link khmerNull Constant
hi def link khmerOperator Operator
hi def link khmerThis Special
hi def link khmerBuiltin Function
hi def link khmerNumber Number
hi def link khmerKhmerNumber Number
hi def link khmerString String
hi def link khmerComment Comment
hi def link khmerPunctuation Delimiter
hi def link khmerFunction Function

let b:current_syntax = "khmer"
"""


def get_sublime_syntax() -> str:
    """Returns Sublime Text 3/4 syntax definition."""
    return """%YAML 1.2
---
name: KhmerLang
file_extensions:
  - khmer
  - km
scope: source.khmer

contexts:
  main:
    - match: '#.*$'
      scope: comment.line.number-sign.khmer
    - match: '//.*$'
      scope: comment.line.double-slash.khmer
    - match: '"'
      scope: punctuation.definition.string.begin.khmer
      push: string_double
    - match: "'"
      scope: punctuation.definition.string.begin.khmer
      push: string_single
    - match: '[០-៩]+(\\.[០-៩]+)?'
      scope: constant.numeric.khmer-digits.khmer
    - match: '\\b[0-9]+(\\.[0-9]+)?\\b'
      scope: constant.numeric.khmer
    - match: '(?<![\\u1780-\\u17FF])(តាំង|អនុគមន៍|ថ្នាក់|វិធី|បង្កើត|ថ្មី|បន្តពី)(?![\\u1780-\\u17FF])'
      scope: keyword.declaration.khmer
    - match: '(?<![\\u1780-\\u17FF])(បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|ត្រឡប់)(?![\\u1780-\\u17FF])'
      scope: keyword.control.khmer
    - match: '(?<![\\u1780-\\u17FF])(នេះ|ខ្លួនវា)(?![\\u1780-\\u17FF])'
      scope: variable.language.this.khmer
    - match: '(?<![\\u1780-\\u17FF])(ពិត|មិនពិត|ទទេ)(?![\\u1780-\\u17FF])'
      scope: constant.language.khmer
    - match: '(?<![\\u1780-\\u17FF])(បង្ហាញ|ប្រវែង|ប្រភេទ|បន្ថែម)(?![\\u1780-\\u17FF])'
      scope: support.function.builtin.khmer
    - match: '[។៕;]'
      scope: punctuation.terminator.khmer

  string_double:
    - meta_scope: string.quoted.double.khmer
    - match: '\\\\.'
      scope: constant.character.escape.khmer
    - match: '"'
      scope: punctuation.definition.string.end.khmer
      pop: true

  string_single:
    - meta_scope: string.quoted.single.khmer
    - match: '\\\\.'
      scope: constant.character.escape.khmer
    - match: "'"
      scope: punctuation.definition.string.end.khmer
      pop: true
"""


def get_sublime_build() -> Dict[str, Any]:
    """Returns Sublime Text build system for KhmerLang."""
    return {
        "cmd": ["khmer", "run", "$file"],
        "file_regex": "^(.*?):([0-9]+):([0-9]+): (?:error|warning): (.*)$",
        "selector": "source.khmer"
    }


def get_nano_syntax() -> str:
    """Returns GNU Nano syntax highlighting configuration."""
    return """## Syntax highlighting for KhmerLang in nano
syntax "khmer" "\\.(khmer|km)$"
comment "#"

# Keywords & Declarations
color brightred "(^|[[:space:]])(តាំង|អនុគមន៍|ថ្នាក់|វិធី|បង្កើត|ថ្មី|បន្តពី)($|[[:space:]])"
# Control flow
color brightmagenta "(^|[[:space:]])(បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|ត្រឡប់)($|[[:space:]])"
# Booleans & Null
color brightblue "(^|[[:space:]])(ពិត|មិនពិត|ទទេ)($|[[:space:]])"
# Builtins
color brightcyan "(^|[[:space:]])(បង្ហាញ|ប្រវែង|ប្រភេទ|បន្ថែម)($|[[:space:]]|\\()"
# OOP this
color yellow "(^|[[:space:]])(នេះ|ខ្លួនវា)($|[[:space:]]|\\.)"
# Khmer Numerals & Arabic Numbers
color brightyellow "[0-9]+|[០-៩]+"
# Strings
color green "\\"[^\\"]*\\""
color green "'[^']*'"
# Comments
color cyan "#.*$"
color cyan "//.*$"
# Punctuations
color brightwhite "[។៕៖;]"
"""


def install_vscode_extension(target_dir: str = None) -> str:
    """Installs the KhmerLang extension into VS Code's extensions folder or target directory."""
    if not target_dir:
        home = os.path.expanduser("~")
        target_dir = os.path.join(home, ".vscode", "extensions", "khmerlang-syntax")

    os.makedirs(os.path.join(target_dir, "syntaxes"), exist_ok=True)

    package_json = {
        "name": "khmerlang",
        "displayName": "ភាសាខ្មែរ (KhmerLang) Language Support",
        "description": "Rich language support, syntax highlighting, and runner for KhmerLang (ភាសាខ្មែរ)",
        "version": "1.0.0",
        "publisher": "khmerlang",
        "engines": {
            "vscode": "^1.60.0"
        },
        "categories": ["Programming Languages"],
        "contributes": {
            "languages": [
                {
                    "id": "khmer",
                    "aliases": ["KhmerLang", "khmer", "ភាសាខ្មែរ"],
                    "extensions": [".khmer", ".km"],
                    "configuration": "./language-configuration.json"
                }
            ],
            "grammars": [
                {
                    "language": "khmer",
                    "scopeName": "source.khmer",
                    "path": "./syntaxes/khmer.tmLanguage.json"
                }
            ]
        }
    }

    with open(os.path.join(target_dir, "package.json"), "w", encoding="utf-8") as f:
        json.dump(package_json, f, indent=2, ensure_ascii=False)

    with open(os.path.join(target_dir, "language-configuration.json"), "w", encoding="utf-8") as f:
        json.dump(get_vscode_language_configuration(), f, indent=2, ensure_ascii=False)

    with open(os.path.join(target_dir, "syntaxes", "khmer.tmLanguage.json"), "w", encoding="utf-8") as f:
        json.dump(get_vscode_tm_language(), f, indent=2, ensure_ascii=False)

    return target_dir


def find_vscode_settings_path() -> str:
    """Finds user's VS Code settings.json path across macOS, Linux, and Windows."""
    import platform
    home = os.path.expanduser("~")
    system = platform.system()
    if system == "Darwin":
        return os.path.join(home, "Library", "Application Support", "Code", "User", "settings.json")
    elif system == "Windows":
        appdata = os.environ.get("APPDATA", os.path.join(home, "AppData", "Roaming"))
        return os.path.join(appdata, "Code", "User", "settings.json")
    else:
        return os.path.join(home, ".config", "Code", "User", "settings.json")


def restore_vscode_settings(settings_path: str = None) -> list:
    """Removes Khmer terminal/editor font overrides and restores clean defaults."""
    if not settings_path:
        settings_path = find_vscode_settings_path()

    if not os.path.exists(settings_path):
        return []

    try:
        with open(settings_path, "r", encoding="utf-8") as f:
            current = json.load(f)
    except Exception:
        return []

    keys_to_remove = [
        "terminal.integrated.fontFamily",
        "terminal.integrated.lineHeight",
        "terminal.integrated.fontSize",
        "editor.fontFamily",
        "editor.lineHeight",
    ]
    removed = []
    for k in keys_to_remove:
        if k in current:
            del current[k]
            removed.append(k)

    if removed:
        with open(settings_path, "w", encoding="utf-8") as f:
            json.dump(current, f, indent=2, ensure_ascii=False)

    return removed


def detect_khmer_fonts() -> list:
    """Detects installed Khmer fonts across OS font directories."""
    font_dirs = [
        os.path.expanduser("~/Library/Fonts"),
        "/Library/Fonts",
        "/System/Library/Fonts/Supplemental",
        os.path.expanduser("~/.fonts"),
        os.path.expanduser("~/.local/share/fonts"),
        "/usr/share/fonts",
        "C:\\Windows\\Fonts",
        os.path.expanduser("~/AppData/Local/Microsoft/Windows/Fonts"),
    ]
    found = []
    keywords = [
        "khmer", "kantumruy", "battambang", "siemreap", "angkor",
        "bayon", "bokor", "chenla", "content", "hanuman", "koulen",
        "moul", "nokora", "suwannaphum", "fasthand", "freehand", "dangrek"
    ]
    for d in font_dirs:
        if os.path.exists(d):
            try:
                for f in os.listdir(d):
                    low = f.lower()
                    if any(k in low for k in keywords) and (
                        low.endswith(".ttf") or low.endswith(".otf") or low.endswith(".ttc")
                    ):
                        clean_name = f.replace(".ttf", "").replace(".otf", "").replace(".ttc", "")
                        if clean_name not in found:
                            found.append(clean_name)
            except Exception:
                pass
    return sorted(found)
