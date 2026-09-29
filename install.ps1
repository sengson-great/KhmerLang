# ==============================================================================
# KhmerLang (ភាសាខ្មែរ) — Windows PowerShell Universal Installer
# Run in PowerShell:
#   irm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex
# ==============================================================================

$ErrorActionPreference = "Stop"

Write-Host "🇰🇭 កំពុងដំឡើង KhmerLang លើ Windows..." -ForegroundColor Cyan

# 1. Check Python
$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    $pythonCmd = Get-Command py -ErrorAction SilentlyContinue
}

if (-not $pythonCmd) {
    Write-Host "❌ មិនបានរកឃើញ Python 3.8+ ឡើយ / Python was not found." -ForegroundColor Red
    Write-Host "សូមដំឡើង Python តាមរយៈ Microsoft Store ឬពី https://www.python.org/downloads/"
    exit 1
}

Write-Host "✓ បានរកឃើញ Python: $($pythonCmd.Source)" -ForegroundColor Green

# 2. Install via pip from git
Write-Host "📦 កំពុងដំឡើង KhmerLang តាមរយៈ pip..." -ForegroundColor Cyan
& $pythonCmd.Source -m pip install --upgrade "git+https://github.com/sengson-great/KhmerLang.git"

Write-Host ""
Write-Host "🎉 ការដំឡើងបានជោគជ័យ! / Installation Completed Successfully!" -ForegroundColor Green
Write-Host "------------------------------------------------------------"
Write-Host "អ្នកអាចចាប់ផ្តើមប្រើប្រាស់ពាក្យបញ្ជា 'khmer' ក្នុង PowerShell ឬ Command Prompt:"
Write-Host "  khmer --version"
Write-Host "  khmer my_code.khmer"
Write-Host "  khmer editor vscode"
Write-Host "------------------------------------------------------------"
