import 'dart:js_interop';
import 'package:web/web.dart' as web;

void copyToClipboard(String text) {
  web.window.navigator.clipboard.writeText(text);
}

String getInitialTheme() {
  return web.window.localStorage.getItem('khmerlang-doc-theme') ?? 'dark';
}

void setDocTheme(String theme) {
  web.document.documentElement?.setAttribute('data-theme', theme);
  web.window.localStorage.setItem('khmerlang-doc-theme', theme);
}

void setupGlobalKeyListeners(void Function() onSearchToggle) {
  web.window.addEventListener(
    'keydown',
    (web.KeyboardEvent event) {
      if ((event.metaKey || event.ctrlKey) && event.key == 'k') {
        event.preventDefault();
        onSearchToggle();
      }
    }.toJS,
  );
}

void setLocationHash(String hash) {
  web.window.location.hash = hash;
}

String getLocationHash() {
  return web.window.location.hash.replaceFirst('#', '');
}
