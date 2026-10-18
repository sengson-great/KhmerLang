import 'dart:io';
import 'editor_configs.dart';

void handleTerminalCmd(List<String> args) {
  if (args.contains('--reset') || args.contains('--restore') || args.contains('--fix')) {
    final settingsPath = findVsCodeSettingsPath();
    final removed = restoreVsCodeSettings(settingsPath);
    if (removed.isNotEmpty) {
      stdout.writeln('✓ បានលុបការកំណត់ Font override និងស្តារការកំណត់ដើមឡើងវិញ (Restored default settings):');
      for (final r in removed) {
        stdout.writeln('  - បានលុប $r');
      }
      stdout.writeln('\nសូមបើក Terminal ថ្មីក្នុង VS Code ដើម្បីត្រឡប់ទៅសភាពដើមវិញ (Default clean monospace).');
    } else {
      stdout.writeln('✓ ការកំណត់ VS Code របស់អ្នកស្ថិតក្នុងសភាពធម្មតាស្រាប់ហើយ (Clean defaults).');
    }
    return;
  }

  stdout.writeln('=' * 60);
  stdout.writeln('  ឧបករណ៍ត្រួតពិនិត្យ Terminal សម្រាប់ភាសាខ្មែរ (Khmer Terminal Guide)');
  stdout.writeln('=' * 60);

  // 1. Detect environment
  final termProg = Platform.environment['TERM_PROGRAM'] ?? 'Standard / Unknown';
  final term = Platform.environment['TERM'] ?? 'unknown';
  stdout.writeln('\n1. បរិស្ថានបច្ចុប្បន្ន (Current Environment):');
  stdout.writeln('   • កម្មវិធី Terminal: $termProg');
  stdout.writeln('   • ប្រភេទ TERM: $term');

  // 2. Detect installed Khmer fonts
  final fonts = detectKhmerFonts();
  stdout.writeln('\n2. ពុម្ពអក្សរខ្មែរដែលបានរកឃើញក្នុងម៉ាស៊ីន (Detected Khmer Fonts):');
  if (fonts.isNotEmpty) {
    for (final f in fonts.take(8)) {
      stdout.writeln('   ✓ $f');
    }
    if (fonts.length > 8) {
      stdout.writeln('   ... និង ${fonts.length - 8} ពុម្ពអក្សរផ្សេងទៀត');
    }
  } else {
    stdout.writeln('   ⚠ មិនទាន់រកឃើញពុម្ពអក្សរ Noto Sans Khmer ឬ Kantumruy Pro ទេ។');
  }

  // 3. Visual rendering test
  stdout.writeln('\n3. តេស្តការបង្ហាញអក្សរខ្មែរ (Visual Rendering Test):');
  stdout.writeln('   ┌────────────────────────────────────────────────────────┐');
  stdout.writeln('   │ ព្យញ្ជនៈ : ក ខ គ ឃ ង ច ឆ ជ ឈ ញ ដ ឋ ឌ ឍ ណ ត ថ ទ ធ ន...    │');
  stdout.writeln('   │ ស្រៈ   : ា ិ ី ឹ ឺ ុ ូ ួ ើ ឿ ៀ េ ែ ៃ ោ ៅ ុំ ំ ាំ ះ ៈ      │');
  stdout.writeln('   │ ជើង   : ក្ក ខ្ម គ្ម ច្ច ញ្ជ ដ្ដ ណ្ត ត្ត ថ្ម ទ្ធ ម្ភ ស្រី ស្ត្រី   │');
  stdout.writeln('   │ ពាក្យ  : ភាសាខ្មែរ កម្ពុជា សួស្តី ខ្ញុំបាទ សេចក្តីស្រឡាញ់ │');
  stdout.writeln('   └────────────────────────────────────────────────────────┘');
  stdout.writeln('   (ចំណាំ៖ បើឃើញរង្វង់មូលចំនុចៗ ◌្ ឬស្រៈដាច់ មានន័យថា Terminal មិនស្គាល់ HarfBuzz CTL)');

  // 4. Honest explanation of terminal limitations
  stdout.writeln('\n4. ហេតុអ្វីបានជា Terminal ទូទៅមើលអក្សរខ្មែរមិនសូវស្អាត?');
  stdout.writeln('   • Terminal (ដូចជា VS Code xterm.js និង macOS Terminal.app) ផ្អែកលើ');
  stdout.writeln('     ក្រឡាចត្រង្គ Monospace (Fixed-width grid) សម្រាប់អក្សរឡាតាំង។');
  stdout.writeln('   • អក្សរខ្មែរជាអក្សរ Proportional & Complex Script (ជើង និងស្រៈតម្រួតគ្នា)។');
  stdout.writeln('   • ការបង្ខំដាក់ Font ខ្មែរលើ Terminal ធ្វើឱ្យអក្សរឡាតាំង (English/Code) រួញ និងជាន់គ្នា។');
  stdout.writeln('   • ជម្រើសដែលស្អាតបំផុត:');
  stdout.writeln('     - បើកសរសេរកូដក្នុង GUI / IDE (Web Playground, VS Code Editor, Khmer IDE)');
  stdout.writeln('     - ឬប្រើ Terminal ទំនើបដែលមាន HarfBuzz Native Shaping (Ghostty, Kitty)');
  stdout.writeln('=' * 60);
}
