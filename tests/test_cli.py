import unittest
import os
import tempfile
import shutil
from khmer_lang.runner import run_code, check_code
from khmer_lang.editor_configs import (
    get_vscode_tm_language,
    get_vscode_language_configuration,
    get_vim_syntax,
    get_sublime_syntax,
    get_nano_syntax,
    install_vscode_extension,
    get_vscode_terminal_font_config,
    configure_vscode_terminal_fonts,
    detect_khmer_fonts
)


class TestCLIFeatures(unittest.TestCase):
    def test_run_code_with_filepath(self):
        res = run_code("បង្ហាញ('ជោគជ័យ');", filepath="my_script.khmer")
        self.assertEqual(res["status"], "success")
        self.assertIn("ជោគជ័យ", res["stdout"])
        self.assertIsNone(res["error"])

    def test_check_code_valid(self):
        res = check_code("តាំង x = ១០; បង្ហាញ(x);", filepath="test.khmer")
        self.assertEqual(res["status"], "success")
        self.assertGreater(res["tokens_count"], 0)
        self.assertIsNone(res["error"])

    def test_check_code_invalid_syntax(self):
        res = check_code("តាំង x = ;", filepath="bad.khmer")
        self.assertEqual(res["status"], "error")
        self.assertIsNotNone(res["diagnostic"])
        self.assertTrue(res["diagnostic"].startswith("bad.khmer:"))

    def test_vscode_extension_generator(self):
        tm = get_vscode_tm_language()
        self.assertEqual(tm["name"], "KhmerLang")
        self.assertEqual(tm["scopeName"], "source.khmer")

        conf = get_vscode_language_configuration()
        self.assertEqual(conf["comments"]["lineComment"], "#")

    def test_install_vscode_extension_tempdir(self):
        temp_dir = tempfile.mkdtemp()
        try:
            target = os.path.join(temp_dir, "khmerlang-ext")
            installed = install_vscode_extension(target)
            self.assertTrue(os.path.exists(os.path.join(installed, "package.json")))
            self.assertTrue(os.path.exists(os.path.join(installed, "syntaxes", "khmer.tmLanguage.json")))
            self.assertTrue(os.path.exists(os.path.join(installed, "language-configuration.json")))
        finally:
            shutil.rmtree(temp_dir)

    def test_vim_and_sublime_and_nano_configs(self):
        vim_syn = get_vim_syntax()
        self.assertIn("syn keyword khmerKeyword", vim_syn)
        self.assertIn("តាំង", vim_syn)

        sublime_syn = get_sublime_syntax()
        self.assertIn("scope: source.khmer", sublime_syn)

        nano_syn = get_nano_syntax()
        self.assertIn('syntax "khmer"', nano_syn)

    def test_vscode_terminal_font_config(self):
        conf = get_vscode_terminal_font_config()
        self.assertIn("terminal.integrated.fontFamily", conf)
        self.assertIn("terminal.integrated.lineHeight", conf)
        self.assertGreaterEqual(conf["terminal.integrated.lineHeight"], 1.3)

    def test_configure_vscode_terminal_fonts(self):
        temp_dir = tempfile.mkdtemp()
        try:
            settings_path = os.path.join(temp_dir, "settings.json")
            res = configure_vscode_terminal_fonts(settings_path)
            self.assertTrue(res)
            self.assertTrue(os.path.exists(settings_path))
            import json
            with open(settings_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            self.assertIn("terminal.integrated.fontFamily", data)
            self.assertEqual(data["terminal.integrated.lineHeight"], 1.35)
        finally:
            shutil.rmtree(temp_dir)

    def test_detect_khmer_fonts(self):
        fonts = detect_khmer_fonts()
        self.assertIsInstance(fonts, list)


if __name__ == "__main__":
    unittest.main()
