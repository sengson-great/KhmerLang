import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

Component kbd(String content) {
  return Component.element(
    tag: 'kbd',
    children: [text(content)],
  );
}
