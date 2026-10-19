import 'dart:async';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:khmer_lang/engine/runner.dart';

import '../utils/browser.dart';
import '../utils/highlighter.dart';

class CodeCard extends StatefulComponent {
  final String title;
  final String lang;
  final String code;
  final bool? canRun;

  const CodeCard({
    required this.title,
    required this.code,
    this.lang = 'KHMER',
    this.canRun,
    super.key,
  });

  @override
  State<CodeCard> createState() => _CodeCardState();
}

class _CodeCardState extends State<CodeCard> {
  bool _copied = false;
  bool _isRunning = false;
  bool _isOutputVisible = false;
  String _output = '';
  int _durationMs = 0;
  bool _isError = false;

  bool get _effectiveCanRun => component.canRun ?? (component.lang == 'KHMER');

  void _handleCopy() {
    copyToClipboard(component.code);
    setState(() {
      _copied = true;
    });
    Timer(const Duration(seconds: 2), () {
      if (mounted) {
        setState(() {
          _copied = false;
        });
      }
    });
  }

  void _handleRun() {
    setState(() {
      _isRunning = true;
    });

    // Run engine
    try {
      final res = runKhmerCode(component.code);
      setState(() {
        _isRunning = false;
        _isOutputVisible = true;
        _durationMs = res.duration.inMilliseconds;
        _isError = !res.isSuccess;
        if (res.isSuccess) {
          _output = res.stdout.isEmpty
              ? '(ដំណើរការជោគជ័យដោយគ្មាន stdout)'
              : res.stdout;
        } else {
          _output = res.error ?? 'កំហុសមិនស្គាល់ (Unknown Execution Error)';
        }
      });
    } catch (e) {
      setState(() {
        _isRunning = false;
        _isOutputVisible = true;
        _isError = true;
        _output = 'កំហុស៖ $e';
        _durationMs = 0;
      });
    }
  }

  @override
  Component build(BuildContext context) {
    return div(classes: 'code-card', [
      div(classes: 'code-card-header', [
        div(classes: 'code-card-meta', [
          span(classes: 'code-card-lang', [text(component.lang)]),
          span(classes: 'code-card-title', [text(component.title)]),
        ]),
        div(classes: 'code-card-actions', [
          button(
            classes: 'btn-code-action btn-copy-code',
            styles: _copied
                ? Styles(
                    color: const Color('#34d399'),
                    border: Border.all(color: const Color('#34d399'), width: 1.px, style: BorderStyle.solid),
                  )
                : null,
            events: {'click': (e) => _handleCopy()},
            [text(_copied ? '✓ បានចម្លង!' : 'ចម្លង')],
          ),
          if (_effectiveCanRun)
            button(
              classes: 'btn-code-action btn-code-run',
              attributes: _isRunning ? {'disabled': 'true'} : null,
              events: {'click': (e) => _handleRun()},
              [
                text(_isRunning ? '⏳ កំពុងដំណើរការ...' : '▷ រ៉ាន់កូដ'),
              ],
            ),
        ]),
      ]),

      div(classes: 'code-content-wrapper', [
        pre(classes: 'code-block', [
          code(classes: 'snippet-source', [
            if (component.lang == 'KHMER')
              ...highlightKhmerCode(component.code)
            else
              text(component.code),
          ]),
        ]),
      ]),

      if (_isOutputVisible)
        div(classes: 'code-output-drawer visible', [
          div(classes: 'code-output-header', [
            span(classes: 'code-output-title', [
              text('ស្ថានីយលទ្ធផល (Terminal Output)'),
            ]),
            span(
              classes: 'code-output-time',
              styles: Styles(
                color: const Color('#94a3b8'),
                fontSize: 0.75.rem,
              ),
              [text('${_durationMs}ms')],
            ),
          ]),
          div(
            classes: 'code-output-body',
            styles: _isError
                ? Styles(
                    color: const Color('#f87171'),
                  )
                : Styles(
                    color: const Color('#34d399'),
                  ),
            [text(_output)],
          ),
        ]),
    ]);
  }
}
