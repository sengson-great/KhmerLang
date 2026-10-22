import 'dart:convert';
import 'dart:io';

Map<String, dynamic> getVsCodeTmLanguage() {
  return {
    r"$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
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
            "match": r"#.*$"
          },
          {
            "name": "comment.line.double-slash.khmer",
            "match": r"//.*$"
          },
          {
            "name": "comment.block.khmer",
            "begin": r"/\*",
            "end": r"\*/"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "name": "string.quoted.double.khmer",
            "begin": '"',
            "end": '"',
            "patterns": [
              {"name": "constant.character.escape.khmer", "match": r"\\."}
            ]
          },
          {
            "name": "string.quoted.single.khmer",
            "begin": "'",
            "end": "'",
            "patterns": [
              {"name": "constant.character.escape.khmer", "match": r"\\."}
            ]
          }
        ]
      },
      "numerals": {
        "patterns": [
          {
            "name": "constant.numeric.khmer-digits.khmer",
            "match": r"[០-៩]+(\.[០-៩]+)?"
          },
          {
            "name": "constant.numeric.arabic.khmer",
            "match": r"\b[0-9]+(\.[0-9]+)?\b"
          }
        ]
      },
      "keywords_control": {
        "patterns": [
          {
            "name": "keyword.control.khmer",
            "match": r"(?<![\u1780-\u17FF])(បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|ត្រឡប់)(?![\u1780-\u17FF])"
          }
        ]
      },
      "keywords_decl": {
        "patterns": [
          {
            "name": "keyword.declaration.khmer storage.type.khmer",
            "match": r"(?<![\u1780-\u17FF])(តាំង|អនុគមន៍|ថ្នាក់|វិធី|បង្កើត|ថ្មី|បន្តពី|យក|ដាក់|កំណត់)(?![\u1780-\u17FF])"
          },
          {
            "name": "keyword.declaration.khmer storage.type.khmer",
            "match": r"\b(get|set)\b"
          }
        ]
      },
      "keywords_oop": {
        "patterns": [
          {
            "name": "variable.language.this.khmer",
            "match": r"(?<![\u1780-\u17FF])(នេះ|ខ្លួនវា)(?![\u1780-\u17FF])"
          }
        ]
      },
      "keywords_bool": {
        "patterns": [
          {
            "name": "constant.language.boolean.khmer",
            "match": r"(?<![\u1780-\u17FF])(ពិត|មិនពិត|ទទេ)(?![\u1780-\u17FF])"
          },
          {
            "name": "keyword.operator.logical.khmer",
            "match": r"(?<![\u1780-\u17FF])(និង|ឬ|មិន)(?![\u1780-\u17FF])"
          }
        ]
      },
      "builtins": {
        "patterns": [
          {
            "name": "support.function.builtin.khmer",
            "match": r"(?<![\u1780-\u17FF])(បង្ហាញ|ប្រវែង|ប្រភេទ|បន្ថែម|បញ្ចូល|ដកចេញ|លុប|ភ្ជាប់|តម្រៀប|ត្រឡប់បញ្ជី|ស្វែងរក|មាន|ដាច់ខាត|ឬសការ៉េ|ស្វ័យគុណ|បង្គត់|បង្គត់ចុះ|បង្គត់ឡើង|អតិបរមា|អប្បបរមា|ចៃដន្យ|ជាលេខ|ជាអក្សរ|ជាតក្ក|ពុះ|កាត់|ជំនួស|សម្អាត|អក្សរធំ|អក្សរតូច|ពេលនេះ|អាន)(?![\u1780-\u17FF])"
          },
          {
            "name": "support.function.builtin.khmer",
            "match": r"\b(print|len|type|append|insert|pop|remove|join|sort|reverse|indexOf|contains|abs|sqrt|pow|round|floor|ceil|max|min|random|toNum|toInt|toStr|toBool|split|substr|replace|trim|upper|lower|now|input)\b"
          }
        ]
      },
      "operators": {
        "patterns": [
          {
            "name": "keyword.operator.comparison.khmer",
            "match": r"==|!=|<=|>=|<|>"
          },
          {
            "name": "keyword.operator.assignment.khmer",
            "match": r"="
          },
          {
            "name": "keyword.operator.arithmetic.khmer",
            "match": r"\+|-|\*|/|%"
          }
        ]
      },
      "punctuation": {
        "patterns": [
          {
            "name": "punctuation.terminator.khmer",
            "match": r"[។៕;]"
          },
          {
            "name": "punctuation.separator.khmer",
            "match": r"[,:៖]"
          },
          {
            "name": "punctuation.brackets.khmer",
            "match": r"[\(\)\{\}\[\]]"
          }
        ]
      },
      "functions": {
        "patterns": [
          {
            "match": r"([\u1780-\u17FFa-zA-Z_][\u1780-\u17FFa-zA-Z0-9_]*)\s*(?=\()",
            "captures": {
              "1": {"name": "entity.name.function.khmer"}
            }
          }
        ]
      }
    }
  };
}

Map<String, dynamic> getVsCodeLanguageConfiguration() {
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
      {"open": '"', "close": '"', "notIn": ["string"]},
      {"open": "'", "close": "'", "notIn": ["string", "comment"]}
    ],
    "surroundingPairs": [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
      ['"', '"'],
      ["'", "'"]
    ],
    "folding": {
      "markers": {
        "start": r"^\s*#region\b",
        "end": r"^\s*#endregion\b"
      }
    }
  };
}

Map<String, dynamic> getVsCodeTasks() {
  return {
    "version": "2.0.0",
    "tasks": [
      {
        "label": "Khmer: Run Active File",
        "type": "shell",
        "command": r'khmer run "${file}"',
        "group": {
          "kind": "build",
          "isDefault": true
        },
        "presentation": {
          "echo": true,
          "reveal": "always",
          "focus": false,
          "panel": "shared",
          "showReuseMessage": false,
          "clear": true
        },
        "problemMatcher": {
          "owner": "khmer",
          "fileLocation": ["relative", r"${workspaceFolder}"],
          "pattern": {
            "regexp": r"^(.*):(\d+):(\d+):\s+(error|warning):\s+(.*)$",
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
        "command": r'khmer check "${file}"',
        "group": "test",
        "presentation": {
          "echo": false,
          "reveal": "silent",
          "panel": "shared"
        },
        "problemMatcher": {
          "owner": "khmer",
          "fileLocation": ["relative", r"${workspaceFolder}"],
          "pattern": {
            "regexp": r"^(.*):(\d+):(\d+):\s+(error|warning):\s+(.*)$",
            "file": 1,
            "line": 2,
            "column": 3,
            "severity": 4,
            "message": 5
          }
        }
      }
    ]
  };
}

String getVimSyntax() {
  return '''" Vim syntax file for KhmerLang (ភាសាខ្មែរ)
" Language: KhmerLang
" Filenames: *.khmer, *.km

if exists("b:current_syntax")
  finish
endif

syn keyword khmerKeyword តាំង អនុគមន៍ ថ្នាក់ វិធី បង្កើត ថ្មី បន្តពី យក ដាក់ កំណត់ get set
syn keyword khmerConditional បើ ឬបើ ផ្សេងទៀត
syn keyword khmerRepeat ខណៈ សម្រាប់
syn keyword khmerStatement ត្រឡប់
syn keyword khmerBoolean ពិត មិនពិត
syn keyword khmerNull ទទេ
syn keyword khmerOperator និង ឬ មិន
syn keyword khmerThis នេះ ខ្លួនវា
syn keyword khmerBuiltin បង្ហាញ ប្រវែង ប្រភេទ បន្ថែម បញ្ចូល ដកចេញ លុប ភ្ជាប់ តម្រៀប ត្រឡប់បញ្ជី ស្វែងរក មាន ដាច់ខាត ឬសការ៉េ ស្វ័យគុណ បង្គត់ បង្គត់ចុះ បង្គត់ឡើង អតិបរមា អប្បបរមា ចៃដន្យ ជាលេខ ជាអក្សរ ជាតក្ក ពុះ កាត់ ជំនួស សម្អាត អក្សរធំ អក្សរតូច ពេលនេះ អាន print len type append insert pop remove join sort reverse indexOf contains abs sqrt pow round floor ceil max min random toNum toInt toStr toBool split substr replace trim upper lower now input

syn match khmerNumber "\\v[0-9]+(\\.[0-9]+)?"
syn match khmerKhmerNumber "\\v[០-៩]+(\\.[០-៩]+)?"

syn region khmerString start=+"+ skip=+\\\\\\"+ end=+"+
syn region khmerString start=+'+ skip=+\\\\\\'+ end=+'+

syn match khmerComment "#.*\$"
syn match khmerComment "//.*\$"
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
''';
}

String getSublimeSyntax() {
  return '''%YAML 1.2
---
name: KhmerLang
file_extensions:
  - khmer
  - km
scope: source.khmer

contexts:
  main:
    - match: '#.*\$'
      scope: comment.line.number-sign.khmer
    - match: '//.*\$'
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
    - match: '(?<![\\u1780-\\u17FF])(តាំង|អនុគមន៍|ថ្នាក់|វិធី|បង្កើត|ថ្មី|បន្តពី|យក|ដាក់|កំណត់)(?![\\u1780-\\u17FF])'
      scope: keyword.declaration.khmer
    - match: '\\b(get|set)\\b'
      scope: keyword.declaration.khmer
    - match: '(?<![\\u1780-\\u17FF])(បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|ត្រឡប់)(?![\\u1780-\\u17FF])'
      scope: keyword.control.khmer
    - match: '(?<![\\u1780-\\u17FF])(នេះ|ខ្លួនវា)(?![\\u1780-\\u17FF])'
      scope: variable.language.this.khmer
    - match: '(?<![\\u1780-\\u17FF])(ពិត|មិនពិត|ទទេ)(?![\\u1780-\\u17FF])'
      scope: constant.language.khmer
    - match: '(?<![\\u1780-\\u17FF])(បង្ហាញ|ប្រវែង|ប្រភេទ|បន្ថែម|បញ្ចូល|ដកចេញ|លុប|ភ្ជាប់|តម្រៀប|ត្រឡប់បញ្ជី|ស្វែងរក|មាន|ដាច់ខាត|ឬសការ៉េ|ស្វ័យគុណ|បង្គត់|បង្គត់ចុះ|បង្គត់ឡើង|អតិបរមា|អប្បបរមា|ចៃដន្យ|ជាលេខ|ជាអក្សរ|ជាតក្ក|ពុះ|កាត់|ជំនួស|សម្អាត|អក្សរធំ|អក្សរតូច|ពេលនេះ|អាន)(?![\\u1780-\\u17FF])'
      scope: support.function.builtin.khmer
    - match: '\\b(print|len|type|append|insert|pop|remove|join|sort|reverse|indexOf|contains|abs|sqrt|pow|round|floor|ceil|max|min|random|toNum|toInt|toStr|toBool|split|substr|replace|trim|upper|lower|now|input)\\b'
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
''';
}

Map<String, dynamic> getSublimeBuild() {
  return {
    "cmd": ["khmer", "run", "\$file"],
    "file_regex": r"^(.*?):([0-9]+):([0-9]+): (?:error|warning): (.*)$",
    "selector": "source.khmer"
  };
}

String getNanoSyntax() {
  return '''## Syntax highlighting for KhmerLang in nano
syntax "khmer" "\\.(khmer|km)\$"
comment "#"

# Keywords & Declarations
color brightred "(^|[[:space:]])(តាំង|អនុគមន៍|ថ្នាក់|វិធី|បង្កើត|ថ្មី|បន្តពី|យក|ដាក់|កំណត់)(\$|[[:space:]])"
color brightred "\<(get|set)\>"
# Control flow
color brightmagenta "(^|[[:space:]])(បើ|ឬបើ|ផ្សេងទៀត|ខណៈ|សម្រាប់|ត្រឡប់)(\$|[[:space:]])"
# Booleans & Null
color brightblue "(^|[[:space:]])(ពិត|មិនពិត|ទទេ)(\$|[[:space:]])"
# Builtins
color brightcyan "(^|[[:space:]])(បង្ហាញ|ប្រវែង|ប្រភេទ|បន្ថែម|បញ្ចូល|ដកចេញ|លុប|ភ្ជាប់|តម្រៀប|ត្រឡប់បញ្ជី|ស្វែងរក|មាន|ដាច់ខាត|ឬសការ៉េ|ស្វ័យគុណ|បង្គត់|បង្គត់ចុះ|បង្គត់ឡើង|អតិបរមា|អប្បបរមា|ចៃដន្យ|ជាលេខ|ជាអក្សរ|ជាតក្ក|ពុះ|កាត់|ជំនួស|សម្អាត|អក្សរធំ|អក្សរតូច|ពេលនេះ|អាន)(\$|[[:space:]]|\\()"
color brightcyan "\\<(print|len|type|append|insert|pop|remove|join|sort|reverse|indexOf|contains|abs|sqrt|pow|round|floor|ceil|max|min|random|toNum|toInt|toStr|toBool|split|substr|replace|trim|upper|lower|now|input)\\>"
# OOP this
color yellow "(^|[[:space:]])(នេះ|ខ្លួនវា)(\$|[[:space:]]|\\.)"
# Khmer Numerals & Arabic Numbers
color brightyellow "[0-9]+|[០-៩]+"
# Strings
color green "\\"[^\\"]*\\""
color green "'[^']*'"
# Comments
color cyan "#.*\$"
color cyan "//.*\$"
# Punctuations
color brightwhite "[។៕៖;]"
''';
}

String installVsCodeExtension([String? targetDir]) {
  final home = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '';
  final dir = targetDir ?? '$home/.vscode/extensions/khmerlang-syntax';

  final syntaxesDir = Directory('$dir/syntaxes');
  syntaxesDir.createSync(recursive: true);

  final packageJson = {
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
  };

  const encoder = JsonEncoder.withIndent('  ');
  File('$dir/package.json').writeAsStringSync(encoder.convert(packageJson));
  File('$dir/language-configuration.json').writeAsStringSync(encoder.convert(getVsCodeLanguageConfiguration()));
  File('$dir/syntaxes/khmer.tmLanguage.json').writeAsStringSync(encoder.convert(getVsCodeTmLanguage()));

  return dir;
}

String findVsCodeSettingsPath() {
  final home = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '';
  if (Platform.isMacOS) {
    return '$home/Library/Application Support/Code/User/settings.json';
  } else if (Platform.isWindows) {
    final appData = Platform.environment['APPDATA'] ?? '$home/AppData/Roaming';
    return '$appData/Code/User/settings.json';
  } else {
    return '$home/.config/Code/User/settings.json';
  }
}

List<String> restoreVsCodeSettings([String? settingsPath]) {
  final path = settingsPath ?? findVsCodeSettingsPath();
  final file = File(path);
  if (!file.existsSync()) {
    return [];
  }

  try {
    final content = file.readAsStringSync();
    final current = jsonDecode(content) as Map<String, dynamic>;

    final keysToRemove = [
      "terminal.integrated.fontFamily",
      "terminal.integrated.lineHeight",
      "terminal.integrated.fontSize",
      "editor.fontFamily",
      "editor.lineHeight",
    ];

    final removed = <String>[];
    for (final k in keysToRemove) {
      if (current.containsKey(k)) {
        current.remove(k);
        removed.add(k);
      }
    }

    if (removed.isNotEmpty) {
      const encoder = JsonEncoder.withIndent('  ');
      file.writeAsStringSync(encoder.convert(current));
    }

    return removed;
  } catch (_) {
    return [];
  }
}

List<String> detectKhmerFonts() {
  final home = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '';
  final fontDirs = [
    '$home/Library/Fonts',
    '/Library/Fonts',
    '/System/Library/Fonts/Supplemental',
    '$home/.fonts',
    '$home/.local/share/fonts',
    '/usr/share/fonts',
    r'C:\Windows\Fonts',
    '$home/AppData/Local/Microsoft/Windows/Fonts',
  ];

  final keywords = [
    "khmer", "kantumruy", "battambang", "siemreap", "angkor",
    "bayon", "bokor", "chenla", "content", "hanuman", "koulen",
    "moul", "nokora", "suwannaphum", "fasthand", "freehand", "dangrek"
  ];

  final found = <String>{};
  for (final dirPath in fontDirs) {
    final dir = Directory(dirPath);
    if (dir.existsSync()) {
      try {
        final entries = dir.listSync();
        for (final entry in entries) {
          final name = entry.uri.pathSegments.lastWhere((s) => s.isNotEmpty, orElse: () => '');
          final low = name.toLowerCase();
          if ((low.endsWith('.ttf') || low.endsWith('.otf') || low.endsWith('.ttc')) &&
              keywords.any((k) => low.contains(k))) {
            final clean = name.replaceAll('.ttf', '').replaceAll('.otf', '').replaceAll('.ttc', '');
            found.add(clean);
          }
        }
      } catch (_) {}
    }
  }

  final list = found.toList()..sort();
  return list;
}
