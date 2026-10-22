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

void focusSearchInput() {
  web.window.setTimeout(
    () {
      final input = web.document.getElementById('search-modal-input') as web.HTMLInputElement?;
      input?.focus();
      input?.select();
    }.toJS,
    25.toJS,
  );
}

String getSearchInputValue() {
  final input = web.document.getElementById('search-modal-input') as web.HTMLInputElement?;
  return input?.value ?? '';
}

String getElementValueById(String id) {
  final el = web.document.getElementById(id);
  if (el is web.HTMLInputElement) return el.value;
  if (el is web.HTMLTextAreaElement) return el.value;
  if (el is web.HTMLSelectElement) return el.value;
  return '';
}
