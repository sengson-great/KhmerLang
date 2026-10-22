import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:khmer_lang/engine/runner.dart';
import '../utils/browser.dart';

class Playground extends StatefulComponent {
  const Playground({super.key});

  @override
  State<Playground> createState() => _PlaygroundState();
}

class _PlaygroundState extends State<Playground> {
  static const Map<String, String> _samples = {
    'hello': '''# ១. កម្មវិធីដំបូង (Hello World)
បង្ហាញ("សួស្តីពិភពលោក!")
បង្ហាញ("សូមស្វាគមន៍មកកាន់ ខ្មែរចារ (KhmerChar) v1.0")''',

    'math': '''# ២. គណនាផលបូកលេខខ្មែរ (Khmer Math)
តាំង ក = ១៥
តាំង ខ = ៥

បង្ហាញ("ផលបូក:", ក + ខ)
បង្ហាញ("ផលដក:", ក - ខ)
បង្ហាញ("ផលគុណ:", ក * ខ)
បង្ហាញ("ផលចែក:", ក / ខ)
បង្ហាញ("តើ ក ធំជាង ខ ឬទេ?", ក > ខ)''',

    'fibo': '''# ៣. រកលេខ Fibonacci (Recursion)
អនុគមន៍ ហ្វីបូណាឈី(n) {
    បើ (n <= ០) {
        ត្រឡប់ ០
    }
    បើ (n == ១) {
        ត្រឡប់ ១
    }
    ត្រឡប់ ហ្វីបូណាឈី(n - ១) + ហ្វីបូណាឈី(n - ២)
}

បង្ហាញ("--- លំដាប់ Fibonacci ពី ០ ដល់ ៧ ---")
សម្រាប់ (តាំង i = ០; i <= ៧; i = i + ១) {
    បង្ហាញ("F(", i, ") =", ហ្វីបូណាឈី(i))
}''',

    'oop': '''# ៤. OOP សត្វ និង ឆ្កែ (Inheritance)
ថ្នាក់ សត្វ {
    បង្កើត(ឈ្មោះ) {
        នេះ.ឈ្មោះ = ឈ្មោះ
    }

    អនុគមន៍ ធ្វើសំឡេង() {
        បង្ហាញ(នេះ.ឈ្មោះ, "កំពុងធ្វើសំឡេង...")
    }
}

ថ្នាក់ ឆ្កែ បន្តពី សត្វ {
    អនុគមន៍ ព្រុស() {
        បង្ហាញ(នេះ.ឈ្មោះ, "ព្រុស: វូស! វូស!")
    }
}

តាំង គូគី = ថ្មី ឆ្កែ("គូគី")
គូគី.ធ្វើសំឡេង()
គូគី.ព្រុស()''',

    'grades': '''# ៥. គណនាពិន្ទុសិស្ស (Grading System)
តាំង ពិន្ទុ = ៨៥

បើ (ពិន្ទុ >= ៩០) {
    បង្ហាញ("និទ្ទេស A — ល្អប្រសើរណាស់!")
} ឬបើ (ពិន្ទុ >= ៨០) {
    បង្ហាញ("និទ្ទេស B — ល្អណាស់!")
} ឬបើ (ពិន្ទុ >= ៧០) {
    បង្ហាញ("និទ្ទេស C — ល្អបង្គួរ!")
} ផ្សេងទៀត {
    បង្ហាញ("ត្រូវខិតខំប្រឹងប្រែងបន្ថែមទៀត!")
}''',
  };

  String _currentSample = 'hello';
  String _code = '';
  String _output = 'សូមចុចប៊ូតុង "▷ ដំណើការកូដ (Run)" ដើម្បីមើលលទ្ធផល...';
  String _execStatus = 'រួចរាល់';
  bool _isError = false;

  @override
  void initState() {
    super.initState();
    _code = _samples['hello']!;
  }

  void _onSampleChange(String key) {
    setState(() {
      _currentSample = key;
      _code = _samples[key] ?? '';
      _output = 'កូដគំរូត្រូវបានផ្ទុក។ ចុច "▷ ដំណើការកូដ (Run)" ដើម្បីដំណើរការ។';
      _isError = false;
      _execStatus = 'រួចរាល់';
    });
  }

  void _insertKey(String snippet) {
    setState(() {
      _code = '$_code$snippet';
    });
  }

  void _runCode() {
    setState(() {
      _execStatus = 'កំពុងដំណើរការ...';
    });

    try {
      final res = runKhmerCode(_code);
      setState(() {
        _isError = !res.isSuccess;
        _execStatus = '${res.duration.inMilliseconds}ms';
        if (res.isSuccess) {
          _output = res.stdout.isEmpty
              ? '(កម្មវិធីដំណើរការជោគជ័យដោយគ្មាន stdout)'
              : res.stdout;
        } else {
          _output = res.error ?? 'កំហុសមិនស្គាល់ (Execution Error)';
        }
      });
    } catch (e) {
      setState(() {
        _isError = true;
        _output = 'កំហុស៖ $e';
        _execStatus = 'កំហុស';
      });
    }
  }

  void _checkSyntax() {
    try {
      final res = checkKhmerCode(_code);
      setState(() {
        _isError = !res.isSuccess;
        _execStatus = 'Syntax Check';
        if (res.isSuccess) {
          _output = '✓ វេយ្យាករណ៍ត្រឹមត្រូវល្អ! (Parsed ${res.tokensCount} tokens cleanly)';
        } else {
          _output = '✗ កំហុសវេយ្យាករណ៍៖ ${res.error ?? "Invalid syntax"}';
        }
      });
    } catch (e) {
      setState(() {
        _isError = true;
        _output = 'កំហុស៖ $e';
        _execStatus = 'កំហុស';
      });
    }
  }

  void _clearOutput() {
    setState(() {
      _output = '';
      _execStatus = 'បានសម្អាត';
      _isError = false;
    });
  }

  @override
  Component build(BuildContext context) {
    return div(classes: 'playground-container', [
      div(classes: 'playground-toolbar', [
        div(
          styles: const Styles(
            display: Display.flex,
            alignItems: AlignItems.center,
          ),
          [
            label(
              styles: Styles(
                fontSize: 0.8.rem,
                color: const Color('#94a3b8'),
                fontWeight: FontWeight.bold,
              ),
              [const Component.text('កូដគំរូ: ')],
            ),
            select(
              classes: 'playground-sample-select',
              events: {'change': (dynamic e) => _onSampleChange('${e.target?.value}')},
              [
                option(
                  value: 'hello',
                  selected: _currentSample == 'hello',
                  [const Component.text('១. សួស្តីពិភពលោក (Hello World)')],
                ),
                option(
                  value: 'math',
                  selected: _currentSample == 'math',
                  [const Component.text('២. គណនាផលបូកលេខខ្មែរ (Khmer Math)')],
                ),
                option(
                  value: 'fibo',
                  selected: _currentSample == 'fibo',
                  [const Component.text('៣. រកលេខ Fibonacci (Recursion)')],
                ),
                option(
                  value: 'oop',
                  selected: _currentSample == 'oop',
                  [const Component.text('៤. OOP សត្វ និង ឆ្កែ (Inheritance)')],
                ),
                option(
                  value: 'grades',
                  selected: _currentSample == 'grades',
                  [const Component.text('៥. គណនាពិន្ទុសិស្ស (Grading System)')],
                ),
              ],
            ),
          ],
        ),

        div(classes: 'playground-actions', [
          button(
            classes: 'btn-playground-clear',
            attributes: {'title': 'ពិនិត្យវេយ្យាករណ៍'},
            events: {'click': (e) => _checkSyntax()},
            [
              const span([Component.text('✓ ពិនិត្យ (Check)')]),
            ],
          ),
          button(
            classes: 'btn-playground-clear',
            attributes: {'title': 'លុបលទ្ធផល'},
            events: {'click': (e) => _clearOutput()},
            [
              const svg(
                attributes: {
                  'width': '14',
                  'height': '14',
                  'viewBox': '0 0 24 24',
                  'fill': 'none',
                  'stroke': 'currentColor',
                  'stroke-width': '2',
                },
                [
                  path([], attributes: {'d': 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'}),
                ],
              ),
              const span([Component.text('លុប')]),
            ],
          ),
          button(
            classes: 'btn-playground-run',
            events: {'click': (e) => _runCode()},
            [
              const svg(
                attributes: {
                  'width': '15',
                  'height': '15',
                  'viewBox': '0 0 24 24',
                  'fill': 'currentColor',
                },
                [
                  polygon([], attributes: {'points': '5 3 19 12 5 21 5 3'}),
                ],
              ),
              const span([Component.text('▷ ដំណើការកូដ (Run)')]),
            ],
          ),
        ]),
      ]),

      div(classes: 'playground-virtual-keys', [
        span(
          styles: Styles(
            fontSize: 0.75.rem,
            color: const Color('#94a3b8'),
            margin: Margin.only(right: 0.25.rem),
          ),
          [const Component.text('ពាក្យគន្លឹះរហ័ស:')],
        ),
        _vkBtn('តាំង ', 'តាំង'),
        _vkBtn('បង្ហាញ()', 'បង្ហាញ()'),
        _vkBtn('បើ () {\n\n}', 'បើ'),
        _vkBtn('ឬបើ () {\n\n}', 'ឬបើ'),
        _vkBtn('ផ្សេងទៀត {\n\n}', 'ផ្សេងទៀត'),
        _vkBtn('ខណៈ () {\n\n}', 'ខណៈ'),
        _vkBtn('សម្រាប់ (តាំង i = ០; i < ៥; i = i + ១) {\n\n}', 'សម្រាប់'),
        _vkBtn('អនុគមន៍ ឈ្មោះ() {\n\n}', 'អនុគមន៍'),
        _vkBtn('ត្រឡប់ ', 'ត្រឡប់'),
        _vkBtn('ថ្នាក់ ឈ្មោះ {\n\n}', 'ថ្នាក់'),
        _vkBtn('បង្កើត() {\n\n}', 'បង្កើត'),
        _vkBtn('នេះ.', 'នេះ.'),
        _vkBtn('ថ្មី ', 'ថ្មី'),
        _vkBtn('បន្តពី ', 'បន្តពី'),
        _vkBtn('ពិត', 'ពិត'),
        _vkBtn('មិនពិត', 'មិនពិត'),
        _vkBtn('ទទេ', 'ទទេ'),
        _vkBtn('។', '។'),
        _vkBtn('៕', '៕'),
      ]),

      div(classes: 'playground-grid', [
        div(classes: 'playground-editor-pane', [
          textarea(
            classes: 'playground-textarea',
            id: 'playground-code-textarea',
            attributes: {
              'spellcheck': 'false',
              'placeholder': 'សរសេរកូដខ្មែរនៅទីនេះ...',
            },
            events: {
              'input': (dynamic e) {
                _code = getElementValueById('playground-code-textarea');
              },
            },
            [Component.text(_code)],
          ),
        ]),
        div(classes: 'playground-console-pane', [
          div(classes: 'console-pane-header', [
            const span(classes: 'console-pane-title', [
              Component.text('ស្ថានីយលទ្ធផល (Console Output)'),
            ]),
            span(
              styles: Styles(
                fontSize: 0.75.rem,
                color: const Color('#94a3b8'),
              ),
              [Component.text(_execStatus)],
            ),
          ]),
          div(
            classes: 'console-pane-body',
            styles: _isError
                ? const Styles(color: Color('#f87171'))
                : const Styles(color: Color('#34d399')),
            [Component.text(_output)],
          ),
        ]),
      ]),
    ]);
  }

  Component _vkBtn(String snippet, String label) {
    return button(
      classes: 'vk-btn',
      events: {'click': (e) => _insertKey(snippet)},
      [Component.text(label)],
    );
  }
}
