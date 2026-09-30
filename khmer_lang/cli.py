import sys
import os
import time
import json
from khmer_lang import __version__
from khmer_lang.runner import run_code, check_code
from khmer_lang.lexer import Lexer
from khmer_lang.parser import Parser
from khmer_lang.environment import create_global_environment, format_khmer_value
from khmer_lang.interpreter import Interpreter
from khmer_lang.errors import KhmerLangError
from khmer_lang.editor_configs import (
    get_vscode_tm_language,
    get_vscode_language_configuration,
    get_vscode_tasks,
    get_vim_syntax,
    get_sublime_syntax,
    get_sublime_build,
    get_nano_syntax,
    install_vscode_extension,
    configure_vscode_terminal_fonts,
    find_vscode_settings_path,
    detect_khmer_fonts
)


def main():
    args = sys.argv[1:]

    # Check for piped input from stdin when no args or arg is "-"
    if not sys.stdin.isatty() and (not args or args[0] == "-"):
        stdin_code = sys.stdin.read()
        execute_source(stdin_code, filepath="<stdin>")
        return

    if not args:
        run_repl()
        return

    cmd = args[0]

    # Flags
    if cmd in ("-h", "--help", "help"):
        print_help()
        return

    if cmd in ("-v", "--version", "version"):
        print(f"KhmerLang (ភាសាខ្មែរ) version {__version__}")
        return

    # Evaluate inline code: khmer -e "code" or khmer eval "code"
    if cmd in ("-e", "--eval", "eval"):
        if len(args) < 2:
            print("កំហុស/Error: សូមបញ្ជាក់កូដដែលត្រូវរ៉ាន់ / Missing code string for eval.", file=sys.stderr)
            print("ឧទាហរណ៍/Example: khmer -e 'បង្ហាញ(\"សួស្តី\");'", file=sys.stderr)
            sys.exit(1)
        execute_source(args[1], filepath="<eval>")
        return

    # Check / Lint syntax without running: khmer check <file>
    if cmd in ("check", "lint"):
        if len(args) < 2:
            print("កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file to check.", file=sys.stderr)
            sys.exit(1)
        run_check(args[1])
        return

    # Watch mode: khmer watch <file>
    if cmd == "watch":
        if len(args) < 2:
            print("កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file to watch.", file=sys.stderr)
            sys.exit(1)
        run_watch(args[1])
        return

    # Inspect tokens: khmer tokens <file>
    if cmd == "tokens":
        if len(args) < 2:
            print("កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file.", file=sys.stderr)
            sys.exit(1)
        run_tokens(args[1])
        return

    # Inspect AST: khmer ast <file>
    if cmd == "ast":
        if len(args) < 2:
            print("កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file.", file=sys.stderr)
            sys.exit(1)
        run_ast(args[1])
        return

    # Initialize new project: khmer init [name]
    if cmd == "init":
        project_name = args[1] if len(args) > 1 else "."
        run_init(project_name)
        return

    # Editor integrations: khmer editor [vscode|vim|sublime|nano|list]
    if cmd == "editor":
        sub = args[1] if len(args) > 1 else "list"
        handle_editor_cmd(sub, args[2:])
        return

    # Terminal font & rendering diagnostics: khmer terminal [--fix]
    if cmd in ("terminal", "term", "doctor"):
        handle_terminal_cmd(args[1:])
        return

    # Run REPL explicitly: khmer repl
    if cmd == "repl":
        run_repl()
        return

    # Explicit run: khmer run <file>
    if cmd == "run":
        if len(args) < 2:
            print("កំហុស/Error: សូមបញ្ជាក់ឈ្មោះឯកសារ / Please specify a file to run.", file=sys.stderr)
            sys.exit(1)
        run_file(args[1])
        return

    # Reading from stdin via "-": khmer -
    if cmd == "-":
        stdin_code = sys.stdin.read()
        execute_source(stdin_code, filepath="<stdin>")
        return

    # Default fallback: treat first argument as filename to run
    run_file(cmd)


def execute_source(source: str, filepath: str = "<source>"):
    """Executes source code with compiler diagnostics on error."""
    res = run_code(source, filepath=filepath)
    if res["stdout"]:
        sys.stdout.write(res["stdout"])
        sys.stdout.flush()
    if res["error"]:
        # Print diagnostic format so editors can parse filepath:line:col
        if res.get("diagnostic"):
            sys.stderr.write(res["diagnostic"] + "\n")
        sys.stderr.write(res["error"] + "\n")
        sys.exit(1)


def run_file(filepath: str):
    """Executes a .khmer script file."""
    if not os.path.exists(filepath):
        print(f"កំហុស/Error: មិនរកឃើញឯកសារ/File not found: {filepath}", file=sys.stderr)
        sys.exit(1)

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            code = f.read()
    except Exception as e:
        print(f"កំហុស/Error: មិនអាចអានឯកសារ/Cannot read file: {e}", file=sys.stderr)
        sys.exit(1)

    execute_source(code, filepath=filepath)


def run_check(filepath: str):
    """Checks syntax without running, printing standard diagnostic for text editors."""
    if not os.path.exists(filepath):
        print(f"{filepath}:1:1: error: File not found", file=sys.stderr)
        sys.exit(1)

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            code = f.read()
    except Exception as e:
        print(f"{filepath}:1:1: error: Cannot read file: {e}", file=sys.stderr)
        sys.exit(1)

    res = check_code(code, filepath=filepath)
    if res["status"] == "success":
        print(f"✓ វេយ្យាករណ៍ត្រឹមត្រូវ (Syntax OK): {filepath} ({res['tokens_count']} tokens)")
        sys.exit(0)
    else:
        # Standard compiler diagnostic output
        if res.get("diagnostic"):
            print(res["diagnostic"], file=sys.stderr)
        print(res["error"], file=sys.stderr)
        sys.exit(1)


def run_watch(filepath: str):
    """Watches a file for changes and re-runs automatically on save."""
    if not os.path.exists(filepath):
        print(f"កំហុស/Error: មិនរកឃើញឯកសារ/File not found: {filepath}", file=sys.stderr)
        sys.exit(1)

    print(f"👀 កំពុងតាមដាន (Watching): {filepath}")
    print("ចុច Ctrl+C ដើម្បីបញ្ឈប់ (Press Ctrl+C to stop)...")
    print("=" * 50)

    last_mtime = 0
    try:
        while True:
            try:
                mtime = os.path.getmtime(filepath)
                if mtime != last_mtime:
                    last_mtime = mtime
                    # Clear screen on re-run
                    print("\033[2J\033[H", end="")
                    print(f"[{time.strftime('%H:%M:%S')}] ដំណើរការកូដ/Running: {filepath}")
                    print("-" * 50)
                    with open(filepath, "r", encoding="utf-8") as f:
                        code = f.read()
                    res = run_code(code, filepath=filepath)
                    if res["stdout"]:
                        sys.stdout.write(res["stdout"])
                    if res["error"]:
                        if res.get("diagnostic"):
                            print(res["diagnostic"], file=sys.stderr)
                        print(res["error"], file=sys.stderr)
                    print("-" * 50)
            except Exception as e:
                print(f"កំហុស/Error: {e}", file=sys.stderr)
            time.sleep(0.5)
    except KeyboardInterrupt:
        print("\nបានបញ្ឈប់ការតាមដាន / Stopped watching.")


def run_tokens(filepath: str):
    """Prints token stream for debugging."""
    if not os.path.exists(filepath):
        print(f"កំហុស/Error: មិនរកឃើញឯកសារ: {filepath}", file=sys.stderr)
        sys.exit(1)

    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    try:
        lexer = Lexer(code)
        tokens = lexer.tokenize()
        print(f"--- Tokens for {filepath} ({len(tokens)} total) ---")
        for i, tok in enumerate(tokens):
            print(f"{i:03d} | L{tok.line:03d}:C{tok.column:02d} | {tok.type.name:<15} | {repr(tok.value)}")
    except KhmerLangError as e:
        print(e.compiler_diagnostic(), file=sys.stderr)
        sys.exit(1)


def run_ast(filepath: str):
    """Parses and prints AST hierarchy."""
    if not os.path.exists(filepath):
        print(f"កំហុស/Error: មិនរកឃើញឯកសារ: {filepath}", file=sys.stderr)
        sys.exit(1)

    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    try:
        lexer = Lexer(code)
        tokens = lexer.tokenize()
        parser = Parser(tokens)
        ast = parser.parse()
        print(f"--- AST for {filepath} ---")
        print(ast)
    except KhmerLangError as e:
        print(e.compiler_diagnostic(), file=sys.stderr)
        sys.exit(1)


def run_init(project_path: str):
    """Initializes a new KhmerLang workspace with starter code and editor tasks."""
    target_dir = os.path.abspath(project_path)
    os.makedirs(target_dir, exist_ok=True)

    main_khmer_path = os.path.join(target_dir, "main.khmer")
    if not os.path.exists(main_khmer_path):
        sample_code = """# កម្មវិធី KhmerLang ដំបូងរបស់ខ្ញុំ
តាំង អ្នកប្រើប្រាស់ = "អ្នកអភិវឌ្ឍន៍ខ្មែរ"
បង្ហាញ("ជម្រាបសួរ", អ្នកប្រើប្រាស់)
បង្ហាញ("សូមស្វាគមន៍មកកាន់ពិភពសរសេរកូដជាភាសាខ្មែរ!")

# ឧទាហរណ៍គណនាលេខ
តាំង ក = ១៥
តាំង ខ = ៥
បង្ហាញ("ផលបូក ក + ខ =", ក + ខ)
"""
        with open(main_khmer_path, "w", encoding="utf-8") as f:
            f.write(sample_code)

    # Setup VS Code tasks in project
    vscode_dir = os.path.join(target_dir, ".vscode")
    os.makedirs(vscode_dir, exist_ok=True)
    tasks_path = os.path.join(vscode_dir, "tasks.json")
    if not os.path.exists(tasks_path):
        with open(tasks_path, "w", encoding="utf-8") as f:
            json.dump(get_vscode_tasks(), f, indent=2, ensure_ascii=False)

    print(f"✓ បានបង្កើតគម្រោង KhmerLang ជោគជ័យក្នុង: {target_dir}")
    print(f"  ├── main.khmer            (ឯកសារកូដគំរូដំបូង)")
    print(f"  └── .vscode/tasks.json    (ការកំណត់ Run Task សម្រាប់ VS Code / Cursor)")
    print("\nរបៀបដំណើរការ:")
    if project_path != ".":
        print(f"  cd {project_path}")
    print("  khmer main.khmer")


def handle_editor_cmd(subcommand: str, extra_args: list):
    """Generates or installs syntax highlighting and build configs for editors."""
    if subcommand in ("list", "help", "--help"):
        print("""
ឧបករណ៍កំណត់កម្មវិធីសរសេរកូដ / KhmerLang Editor Configurations:
  khmer editor vscode        : ដំឡើង extension ទៅក្នុង VS Code / Cursor
  khmer editor vim           : បង្ហាញ ឬបង្កើត config សម្រាប់ Vim / Neovim
  khmer editor sublime       : បង្ហាញ ឬបង្កើត config សម្រាប់ Sublime Text
  khmer editor nano          : បង្ហាញ ឬបង្កើត config សម្រាប់ GNU Nano
  khmer editor export [dir]  : Export រាល់ editor configs ទាំងអស់ទៅក្នុង Folder
""")
        return

    if subcommand in ("vscode", "cursor"):
        target = extra_args[0] if extra_args else None
        try:
            installed_path = install_vscode_extension(target)
            print(f"✓ បានដំឡើង KhmerLang extension សម្រាប់ VS Code/Cursor ជោគជ័យ!")
            print(f"  ទីតាំង/Location: {installed_path}")
            print("  សូម Restart ឬ Reload VS Code ដើម្បីដំណើរការ Syntax Highlighting ពេញលេញ។")
        except Exception as e:
            print(f"កំហុស/Error: {e}", file=sys.stderr)
            sys.exit(1)
        return

    if subcommand in ("vim", "neovim"):
        home = os.path.expanduser("~")
        vim_dir = os.path.join(home, ".vim")
        syntax_dir = os.path.join(vim_dir, "syntax")
        ftdetect_dir = os.path.join(vim_dir, "ftdetect")
        os.makedirs(syntax_dir, exist_ok=True)
        os.makedirs(ftdetect_dir, exist_ok=True)

        syntax_file = os.path.join(syntax_dir, "khmer.vim")
        with open(syntax_file, "w", encoding="utf-8") as f:
            f.write(get_vim_syntax())

        ftdetect_file = os.path.join(ftdetect_dir, "khmer.vim")
        with open(ftdetect_file, "w", encoding="utf-8") as f:
            f.write("au BufRead,BufNewFile *.khmer,*.km set filetype=khmer\n")

        print(f"✓ បានដំឡើង Vim syntax & ftdetect ក្នុង {vim_dir}")
        print(f"  ├── syntax/khmer.vim")
        print(f"  └── ftdetect/khmer.vim")
        return

    if subcommand == "sublime":
        out_dir = extra_args[0] if extra_args else "."
        syntax_path = os.path.join(out_dir, "Khmer.sublime-syntax")
        build_path = os.path.join(out_dir, "Khmer.sublime-build")
        with open(syntax_path, "w", encoding="utf-8") as f:
            f.write(get_sublime_syntax())
        with open(build_path, "w", encoding="utf-8") as f:
            json.dump(get_sublime_build(), f, indent=2, ensure_ascii=False)
        print(f"✓ បានបង្កើត Sublime Text syntax and build system ក្នុង {out_dir}")
        print(f"  ├── Khmer.sublime-syntax")
        print(f"  └── Khmer.sublime-build")
        return

    if subcommand == "nano":
        nano_conf = get_nano_syntax()
        home = os.path.expanduser("~")
        nanorc_path = os.path.join(home, ".nanorc")
        include_line = "include ~/.nano/khmer.nanorc\n"
        nano_dir = os.path.join(home, ".nano")
        os.makedirs(nano_dir, exist_ok=True)
        khmer_nano_path = os.path.join(nano_dir, "khmer.nanorc")

        with open(khmer_nano_path, "w", encoding="utf-8") as f:
            f.write(nano_conf)

        # Check if already included in .nanorc
        already_included = False
        if os.path.exists(nanorc_path):
            with open(nanorc_path, "r", encoding="utf-8") as f:
                if "khmer.nanorc" in f.read():
                    already_included = True

        if not already_included:
            with open(nanorc_path, "a", encoding="utf-8") as f:
                f.write(f"\n# KhmerLang Syntax\n{include_line}")

        print(f"✓ បានដំឡើង Nano syntax highlighting ក្នុង {khmer_nano_path} និង update {nanorc_path}")
        return

    if subcommand == "export":
        out_dir = extra_args[0] if extra_args else "editors"
        os.makedirs(out_dir, exist_ok=True)

        # VS Code
        install_vscode_extension(os.path.join(out_dir, "vscode", "khmerlang"))
        # Vim
        os.makedirs(os.path.join(out_dir, "vim"), exist_ok=True)
        with open(os.path.join(out_dir, "vim", "khmer.vim"), "w", encoding="utf-8") as f:
            f.write(get_vim_syntax())
        # Sublime
        os.makedirs(os.path.join(out_dir, "sublime"), exist_ok=True)
        with open(os.path.join(out_dir, "sublime", "Khmer.sublime-syntax"), "w", encoding="utf-8") as f:
            f.write(get_sublime_syntax())
        with open(os.path.join(out_dir, "sublime", "Khmer.sublime-build"), "w", encoding="utf-8") as f:
            json.dump(get_sublime_build(), f, indent=2, ensure_ascii=False)
        # Nano
        with open(os.path.join(out_dir, "khmer.nanorc"), "w", encoding="utf-8") as f:
            f.write(get_nano_syntax())

        print(f"✓ បាន Export Editor Configs ទាំងអស់ទៅក្នុង '{out_dir}/' ជោគជ័យ!")
        return

    print(f"កំហុស/Error: មិនស្គាល់ពាក្យបញ្ជា editor '{subcommand}'. វាយ 'khmer editor list' ដើម្បីមើលបញ្ជី។", file=sys.stderr)


def handle_terminal_cmd(args: list):
    """Diagnoses terminal fonts, renders test clusters, and guides or fixes terminal settings."""
    if "--fix" in args or "--fix-vscode" in args:
        settings_path = find_vscode_settings_path()
        try:
            configure_vscode_terminal_fonts(settings_path)
            print("✓ បានកែសម្រួលការកំណត់ Font សម្រាប់ VS Code Terminal រួចរាល់!")
            print(f"  ទីតាំងកំណត់ / Settings file: {settings_path}")
            print("  ការកំណត់ដែលបានបន្ថែម:")
            print("    • terminal.integrated.fontFamily: 'Noto Sans Khmer', 'Kantumruy Pro', 'JetBrains Mono', Menlo, monospace")
            print("    • terminal.integrated.lineHeight: 1.35")
            print("    • terminal.integrated.fontSize: 14")
            print("\nសូមបើក Terminal ថ្មីក្នុង VS Code (Kill & New Terminal) ដើម្បីដំណើរការ។")
            return
        except Exception as e:
            print(f"កំហុស/Error configuring VS Code: {e}", file=sys.stderr)
            sys.exit(1)

    print("=" * 60)
    print("  ឧបករណ៍ត្រួតពិនិត្យ Terminal សម្រាប់ភាសាខ្មែរ (Khmer Terminal Guide)")
    print("=" * 60)

    # 1. Detect environment
    term_prog = os.environ.get("TERM_PROGRAM", "Standard / Unknown")
    term = os.environ.get("TERM", "unknown")
    print(f"\n1. បរិស្ថានបច្ចុប្បន្ន (Current Environment):")
    print(f"   • កម្មវិធី Terminal: {term_prog}")
    print(f"   • ប្រភេទ TERM: {term}")

    # 2. Detect installed Khmer fonts
    fonts = detect_khmer_fonts()
    print(f"\n2. ពុម្ពអក្សរខ្មែរដែលបានរកឃើញក្នុងម៉ាស៊ីន (Detected Khmer Fonts):")
    if fonts:
        for f in fonts[:8]:
            print(f"   ✓ {f}")
        if len(fonts) > 8:
            print(f"   ... និង {len(fonts) - 8} ពុម្ពអក្សរផ្សេងទៀត")
    else:
        print("   ⚠ មិនទាន់រកឃើញពុម្ពអក្សរ Noto Sans Khmer ឬ Kantumruy Pro ទេ។")
        print("   សូមដោនឡូតពី Google Fonts: https://fonts.google.com/specimen/Noto+Sans+Khmer")

    # 3. Visual rendering test
    print("\n3. តេស្តការបង្ហាញអក្សរខ្មែរ (Visual Rendering Test):")
    print("   ┌────────────────────────────────────────────────────────┐")
    print("   │ ព្យញ្ជនៈ : ក ខ គ ឃ ង ច ឆ ជ ឈ ញ ដ ឋ ឌ ឍ ណ ត ថ ទ ធ ន...    │")
    print("   │ ស្រៈ   : ា ិ ី ឹ ឺ ុ ូ ួ ើ ឿ ៀ េ ែ ៃ ោ ៅ ុំ ំ ាំ ះ ៈ      │")
    print("   │ ជើង   : ក្ក ខ្ម គ្ម ច្ច ញ្ជ ដ្ដ ណ្ត ត្ត ថ្ម ទ្ធ ម្ភ ស្រី ស្ត្រី   │")
    print("   │ ពាក្យ  : ភាសាខ្មែរ កម្ពុជា សួស្តី ខ្ញុំបាទ សេចក្តីស្រឡាញ់ │")
    print("   └────────────────────────────────────────────────────────┘")
    print("   (ចំណាំ៖ បើឃើញរង្វង់មូលចំនុចៗ ◌្ ឬស្រៈដាច់ពីតួអក្សរ មានន័យថា Terminal មិនទាន់ស្គាល់ Font ឬ Ligature ទេ)")

    # 4. Step-by-step instructions
    print("\n4. វិធីដោះស្រាយតាមប្រភេទ Terminal (How to fix):")
    print("\n   [ក] VS Code / Cursor Integrated Terminal:")
    print("       រ៉ាន់ពាក្យបញ្ជានេះដើម្បីកំណត់ស្វ័យប្រវត្ត:")
    print("       $ khmer terminal --fix")
    print("       ឬបើក settings.json ហើយបន្ថែម:")
    print('       "terminal.integrated.fontFamily": "\'Noto Sans Khmer\', \'Kantumruy Pro\', monospace",')
    print('       "terminal.integrated.lineHeight": 1.35')

    print("\n   [ខ] iTerm2 (macOS):")
    print("       1. ចូល Settings (⌘,) -> Profiles -> Text")
    print("       2. គូសធីក 'Use a different font for non-ASCII text'")
    print("       3. ជ្រើសរើស Font: 'Noto Sans Khmer' ឬ 'Kantumruy Pro'")
    print("       4. ដំឡើង 'Vertical Spacing' ទៅ 115% - 125% (ដើម្បីកុំឱ្យបាត់ជើងអក្សរ)")
    print("       5. គូសធីក 'Use Unicode Version 9+ widths' និង 'Use ligatures'")

    print("\n   [គ] macOS Terminal.app:")
    print("       1. ចូល Settings (⌘,) -> Profiles -> Text")
    print("       2. ចុច 'Change Font...' -> ជ្រើសរើស Font ដែលមានអក្សរខ្មែរ")
    print("       3. កែសម្រួល Line Spacing ទៅ 1.2 - 1.3")

    print("\n   [ឃ] Modern HarfBuzz Terminals (Rendering ស្អាតបំផុត):")
    print("       • Ghostty (https://ghostty.org) - មាន HarfBuzz Text Shaping ពីកំណើត")
    print("       • Kitty (https://sw.kovidgoyal.net/kitty/)")
    print("       • WezTerm (https://wezfurlong.org/wezterm/)")
    print("=" * 60)


def run_repl(prompt_style: str = "ascii"):
    """Runs the interactive REPL shell with safe readline prompt navigation."""
    try:
        import readline
    except ImportError:
        pass

    prompt_str = "khmer> " if prompt_style == "ascii" else "ខ្មែរ> "

    print("==================================================")
    print(f"  ភាសាខ្មែរ (KhmerLang) v{__version__} REPL")
    print("  វាយ 'ចាកចេញ' ឬ 'exit' ដើម្បីចាកចេញ / Type 'exit' to quit")
    print("  គន្លឹះ: បើអក្សរខ្មែរមិនស្អាតលើ Terminal សូមរ៉ាន់: khmer terminal")
    print("==================================================")

    global_env = create_global_environment()
    interpreter = Interpreter(global_env=global_env)

    while True:
        try:
            line = input(prompt_str)
            if line.strip() in ("ចាកចេញ", "exit", "quit"):
                break
            if not line.strip():
                continue

            lexer = Lexer(line)
            tokens = lexer.tokenize()
            parser = Parser(tokens)
            ast = parser.parse()
            result = interpreter.interpret(ast)

            if result is not None:
                print(f"--> {format_khmer_value(result)}")

        except (KeyboardInterrupt, EOFError):
            print("\nលាហើយ! / Goodbye!")
            break
        except KhmerLangError as e:
            print(e.format_message())
        except Exception as e:
            print(f"កំហុស/Error: {str(e)}")


def print_help():
    print(f"""KhmerLang (ភាសាខ្មែរ) CLI v{__version__}

ការប្រើប្រាស់ទូទៅ / Usage:
  khmer <file.khmer>            : ដំណើរការឯកសារកូដ / Run script file
  khmer run <file.khmer>        : ដំណើរការឯកសារកូដ / Run script file
  khmer -e "<code>"             : ដំណើរការកូដ string ផ្ទាល់ / Run inline code string
  cat file.khmer | khmer -      : ដំណើរការកូដពី Standard Input (Pipe)

ឧបករណ៍អភិវឌ្ឍន៍ & Text Editors / Developer & Editor Tools:
  khmer check <file.khmer>      : ពិនិត្យវេយ្យាករណ៍ដោយមិនរ៉ាន់ (Syntax check / lint)
  khmer watch <file.khmer>      : តាមដាន និងរ៉ាន់កូដស្វ័យប្រវត្តពេល Save (Live-reload)
  khmer init [project_name]     : បង្កើត Project ថ្មីជាមួយ setup សម្រាប់ VS Code / Cursor
  khmer editor vscode           : ដំឡើង Syntax Highlighting ទៅកាន់ VS Code / Cursor
  khmer editor vim              : ដំឡើង Syntax Highlighting ទៅកាន់ Vim / Neovim
  khmer editor sublime          : បង្កើត Syntax & Build System សម្រាប់ Sublime Text
  khmer editor nano             : ដំឡើង Syntax Highlighting ទៅកាន់ GNU Nano
  khmer editor export [dir]     : Export Editor Configs ទាំងអស់

ការកំណត់ Terminal & Font / Terminal & Font Tools:
  khmer terminal                : ពិនិត្យ Font និងការកំណត់ Terminal សម្រាប់ភាសាខ្មែរ
  khmer terminal --fix          : កំណត់ Font និង Line-Height ស្វ័យប្រវត្តក្នុង VS Code

ការត្រួតពិនិត្យ / Diagnostics:
  khmer tokens <file.khmer>     : បង្ហាញតារាង Tokens (Token stream)
  khmer ast <file.khmer>        : បង្ហាញមែកធាង AST (Syntax Tree)
  khmer repl                    : បើក Interactive Shell
  khmer --version               : បង្ហាញជំនាន់
  khmer --help                  : បង្ហាញជំនួយនេះ
""")


if __name__ == "__main__":
    main()
