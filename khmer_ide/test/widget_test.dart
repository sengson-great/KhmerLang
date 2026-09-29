import 'package:flutter_test/flutter_test.dart';
import 'package:khmer_ide/main.dart';

void main() {
  testWidgets('KhmerLang IDE renders header and editor smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const KhmerLangIdeApp());
    await tester.pumpAndSettle();

    // Verify header title and run button exist
    expect(find.text('ភាសាខ្មែរ'), findsOneWidget);
    expect(find.text('រ៉ាន់កូដ (Run)'), findsOneWidget);
  });
}
