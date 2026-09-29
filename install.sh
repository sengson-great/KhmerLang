#!/usr/bin/env bash
# ==============================================================================
# KhmerLang (ភាសាខ្មែរ) — Universal Cross-Platform Installer
# Enables ANY user on macOS, Linux, or Windows (WSL) to install KhmerLang globally.
#
# One-line remote installation:
#   curl -fsSL https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.sh | bash
#
# Local installation:
#   ./install.sh
# ==============================================================================

set -e

# Colors for terminal output
BOLD="\033[1m"
GREEN="\033[32m"
CYAN="\033[36m"
YELLOW="\033[33m"
RED="\033[31m"
RESET="\033[0m"

REPO_URL="https://github.com/sengson-great/KhmerLang.git"
TARBALL_URL="https://github.com/sengson-great/KhmerLang/archive/refs/heads/main.tar.gz"
INSTALL_DIR="$HOME/.khmerlang"
BIN_DIR="$HOME/.local/bin"

echo -e "${BOLD}${CYAN}"
echo "  _  ___                          _                         "
echo " | |/ / |__  _ __ ___   ___ _ __ | |    __ _ _ __   __ _    "
echo " | ' /| '_ \| '_ \` _ \ / _ \ '__|| |   / _\` | '_ \ / _\` |   "
echo " | . \| | | | | | | | |  __/ |   | |__| (_| | | | | (_| |   "
echo " |_|\_\_| |_|_| |_| |_|\___|_|   |_____\__,_|_| |_|\__, |   "
echo "                                                   |___/    "
echo -e "${RESET}"
echo -e "${BOLD}🇰🇭 កំពុងដំឡើងភាសាខ្មែរ (Installing KhmerLang)...${RESET}"
echo "------------------------------------------------------------"

# 1. Detect Python 3
PYTHON_BIN=""
for py in python3 python; do
    if command -v "$py" &> /dev/null; then
        if "$py" -c "import sys; exit(0 if sys.version_info >= (3, 8) else 1)" 2>/dev/null; then
            PYTHON_BIN="$py"
            break
        fi
    fi
done

if [ -z "$PYTHON_BIN" ]; then
    echo -e "${RED}❌ មិនបានរកឃើញ Python 3.8 ឬខ្ពស់ជាងនេះឡើយ / Python 3.8+ was not found.${RESET}"
    echo "សូមដំឡើង Python 3.8+ ជាមុនសិន / Please install Python 3.8 or higher:"
    echo "  • macOS:          brew install python3"
    echo "  • Ubuntu/Debian:  sudo apt update && sudo apt install -y python3 python3-pip git"
    echo "  • Fedora:         sudo dnf install -y python3 python3-pip git"
    echo "  • Arch Linux:     sudo pacman -S python git"
    exit 1
fi

PY_VERSION=$("$PYTHON_BIN" -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}')")
echo -e "✓ បានរកឃើញ Python: ${GREEN}$PYTHON_BIN (v$PY_VERSION)${RESET}"

# 2. Determine source location (Local repository vs Remote curl | bash)
SCRIPT_SOURCE="${BASH_SOURCE[0]:-$0}"
IS_LOCAL=false

if [ -f "$SCRIPT_SOURCE" ]; then
    CANDIDATE_ROOT="$(cd "$(dirname "$SCRIPT_SOURCE")" && pwd)"
    if [ -f "$CANDIDATE_ROOT/khmer_lang/cli.py" ]; then
        IS_LOCAL=true
        LOCAL_ROOT="$CANDIDATE_ROOT"
    elif [ -f "$CANDIDATE_ROOT/../khmer_lang/cli.py" ]; then
        IS_LOCAL=true
        LOCAL_ROOT="$(cd "$CANDIDATE_ROOT/.." && pwd)"
    fi
fi

mkdir -p "$BIN_DIR"

if [ "$IS_LOCAL" = true ]; then
    echo "📂 កំពុងដំឡើងចេញពី Repository ក្នុងស្រុក (Local repo): $LOCAL_ROOT"
    FINAL_APP_DIR="$LOCAL_ROOT"
else
    echo "🌐 កំពុងទាញយក KhmerLang ពី GitHub មកកាន់: $INSTALL_DIR"
    if command -v git &> /dev/null; then
        if [ -d "$INSTALL_DIR/.git" ]; then
            echo "🔄 កំពុងធ្វើបច្ចុប្បន្នភាពគម្រោង (Updating existing installation)..."
            cd "$INSTALL_DIR"
            git pull --quiet || true
        else
            rm -rf "$INSTALL_DIR"
            git clone --depth 1 "$REPO_URL" "$INSTALL_DIR" --quiet
        fi
    else
        echo "📦 Git មិនមានក្នុងម៉ាស៊ីនទេ កំពុងទាញយកតាម Tarball..."
        mkdir -p "$INSTALL_DIR"
        curl -fsSL "$TARBALL_URL" | tar -xz --strip-components=1 -C "$INSTALL_DIR"
    fi
    FINAL_APP_DIR="$INSTALL_DIR"
fi

# 3. Create the global executable runner in ~/.local/bin/khmer
KHMER_TARGET="$BIN_DIR/khmer"
chmod +x "$FINAL_APP_DIR/bin/khmer"
rm -f "$KHMER_TARGET"
ln -sf "$FINAL_APP_DIR/bin/khmer" "$KHMER_TARGET"
chmod +x "$KHMER_TARGET"
echo -e "✓ បានបង្កើតពាក្យបញ្ជាកម្រិតសកល (Global executable): ${GREEN}$KHMER_TARGET${RESET}"

# Try system-wide symlink in /usr/local/bin if writable
if [ -w "/usr/local/bin" ] && [ ! -e "/usr/local/bin/khmer" ]; then
    ln -sf "$KHMER_TARGET" "/usr/local/bin/khmer" 2>/dev/null && \
    echo -e "✓ បានភ្ជាប់ទៅកាន់ប្រព័ន្ធ (System-wide link): ${GREEN}/usr/local/bin/khmer${RESET}" || true
fi

# 4. Configure Shell PATH if ~/.local/bin is not present
SHELL_CONFIG=""
case "$SHELL" in
    */zsh)
        SHELL_CONFIG="$HOME/.zshrc"
        ;;
    */bash)
        if [ -f "$HOME/.bashrc" ]; then
            SHELL_CONFIG="$HOME/.bashrc"
        elif [ -f "$HOME/.bash_profile" ]; then
            SHELL_CONFIG="$HOME/.bash_profile"
        else
            SHELL_CONFIG="$HOME/.bashrc"
        fi
        ;;
    */fish)
        SHELL_CONFIG="$HOME/.config/fish/config.fish"
        ;;
esac

PATH_UPDATED=false
if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
    if [ -n "$SHELL_CONFIG" ]; then
        if [ ! -f "$SHELL_CONFIG" ] || ! grep -q "$BIN_DIR" "$SHELL_CONFIG" 2>/dev/null; then
            if [[ "$SHELL" == *"fish"* ]]; then
                echo -e "\n# KhmerLang PATH\nset -gx PATH $BIN_DIR \$PATH" >> "$SHELL_CONFIG"
            else
                echo -e "\n# KhmerLang PATH\nexport PATH=\"$BIN_DIR:\$PATH\"" >> "$SHELL_CONFIG"
            fi
            PATH_UPDATED=true
            echo -e "✓ បានបន្ថែម ${CYAN}$BIN_DIR${RESET} ទៅក្នុង Shell Profile របស់អ្នក: ${GREEN}$SHELL_CONFIG${RESET}"
        fi
    fi
fi

# 5. Automatically install Editor syntax extensions if available
echo "🎨 កំពុងរៀបចំ Syntax Highlighting សម្រាប់ Text Editors..."
export PATH="$BIN_DIR:$PATH"

# VS Code / Cursor
if [ -d "$HOME/.vscode/extensions" ] || command -v code &> /dev/null || [ -d "$HOME/.cursor/extensions" ]; then
    "$KHMER_TARGET" editor vscode &>/dev/null || true
    echo -e "✓ បានដំឡើង Extension សម្រាប់ ${GREEN}VS Code / Cursor${RESET}"
fi

# Vim
if [ -d "$HOME/.vim" ] || command -v vim &> /dev/null; then
    "$KHMER_TARGET" editor vim &>/dev/null || true
    echo -e "✓ បានដំឡើង Syntax សម្រាប់ ${GREEN}Vim / Neovim${RESET}"
fi

# Nano
if command -v nano &> /dev/null; then
    "$KHMER_TARGET" editor nano &>/dev/null || true
    echo -e "✓ បានដំឡើង Syntax សម្រាប់ ${GREEN}GNU Nano${RESET}"
fi

# 6. Verify installation
INSTALLED_VERSION=$("$KHMER_TARGET" --version 2>/dev/null || echo "v1.0.0")

echo ""
echo -e "${BOLD}${GREEN}🎉 ការដំឡើងបានជោគជ័យពេញលេញ! (Installation Completed Successfully!)${RESET}"
echo "------------------------------------------------------------"
echo -e "ភាសាខ្មែរ: ${BOLD}$INSTALLED_VERSION${RESET}"
echo -e "ទីតាំងពាក្យបញ្ជា (Command location): ${CYAN}$KHMER_TARGET${RESET}"
echo ""
echo "🚀 របៀបចាប់ផ្តើមប្រើប្រាស់:"
if [ "$PATH_UPDATED" = true ]; then
    echo -e "${YELLOW}ចំណាំ: សូមបើក Terminal ផ្ទាំងថ្មី ឬវាយ: source $SHELL_CONFIG${RESET}"
fi
echo "  khmer --version               # ពិនិត្យជំនាន់"
echo "  khmer init my_project         # បង្កើត Project ថ្មី"
echo "  khmer my_script.khmer         # រ៉ាន់កូដឯកសារ"
echo "  khmer watch my_script.khmer   # តាមដាន និងរ៉ាន់កូដស្វ័យប្រវត្តពេល Save"
echo "  khmer check my_script.khmer   # ពិនិត្យកំហុសវេយ្យាករណ៍"
echo "  khmer                         # បើក REPL សរសេរកូដភ្លាមៗ"
echo "------------------------------------------------------------"
echo -e "ឯកសារណែនាំផ្លូវការ (Docs): ${CYAN}https://github.com/sengson-great/KhmerLang${RESET}"
