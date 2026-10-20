# ==============================================================================
# KhmerLang (ភាសាខ្មែរ) — Windows PowerShell Universal Installer (Dart Engine)
# Run in PowerShell:
#   irm https://raw.githubusercontent.com/sengson-great/KhmerLang/main/install.ps1 | iex
# ==============================================================================

$ErrorActionPreference = "Stop"

Write-Host "🇰🇭 កំពុងដំឡើង KhmerLang លើ Windows (Dart Native Engine)..." -ForegroundColor Cyan

# 1. Check Dart SDK
$dartCmd = Get-Command dart -ErrorAction SilentlyContinue

if (-not $dartCmd) {
    Write-Host "❌ មិនបានរកឃើញ Dart SDK ឡើយ / Dart SDK was not found." -ForegroundColor Red
    Write-Host "សូមដំឡើង Dart SDK តាមរយៈ 'winget install Dart.Dart-SDK' ឬពី https://dart.dev/get-dart"
    exit 1
}

$dartVer = & dart --version 2>&1 | Select-Object -First 1
Write-Host "✓ បានរកឃើញ Dart SDK: $dartVer" -ForegroundColor Green

# 2. Setup install directories
$installDir = "$HOME\.khmerlang"
$binDir = "$HOME\.local\bin"
if (-not (Test-Path $binDir)) {
    New-Item -ItemType Directory -Path $binDir -Force | Out-Null
}

$isLocal = $false
if ($PSScriptRoot -and (Test-Path "$PSScriptRoot\cli\bin\khmer.dart")) {
    $sourceDir = "$PSScriptRoot\cli"
    $isLocal = $true
} elseif ($PSScriptRoot -and (Test-Path "$PSScriptRoot\bin\khmer.dart")) {
    $sourceDir = $PSScriptRoot
    $isLocal = $true
} elseif ($PSScriptRoot -and (Test-Path "$PSScriptRoot\..\cli\bin\khmer.dart")) {
    $sourceDir = (Resolve-Path "$PSScriptRoot\..\cli").Path
    $isLocal = $true
} elseif ($PSScriptRoot -and (Test-Path "$PSScriptRoot\..\bin\khmer.dart")) {
    $sourceDir = (Resolve-Path "$PSScriptRoot\..").Path
    $isLocal = $true
} else {
    $sourceDir = $installDir
    Write-Host "🌐 កំពុងទាញយក KhmerLang ពី GitHub..." -ForegroundColor Cyan
    if (Get-Command git -ErrorAction SilentlyContinue) {
        if (Test-Path "$installDir\.git") {
            git -C $installDir pull --quiet
        } else {
            Remove-Item -Recurse -Force $installDir -ErrorAction SilentlyContinue
            git clone --depth 1 "https://github.com/sengson-great/KhmerLang.git" $installDir --quiet
        }
    } else {
        New-Item -ItemType Directory -Path $installDir -Force | Out-Null
        Invoke-WebRequest -Uri "https://github.com/sengson-great/KhmerLang/archive/refs/heads/main.zip" -OutFile "$installDir\khmer.zip"
        Expand-Archive -Path "$installDir\khmer.zip" -DestinationPath "$installDir\_temp" -Force
        Copy-Item -Path "$installDir\_temp\KhmerLang-main\*" -Destination $installDir -Recurse -Force
        Remove-Item -Recurse -Force "$installDir\_temp", "$installDir\khmer.zip"
    }
}

# 3. Compile native binary
Write-Host "⚡ កំពុង Compile Native Binary (AOT Native Compilation)..." -ForegroundColor Cyan
$targetExe = "$binDir\khmer.exe"

$cliDir = $sourceDir
if (Test-Path "$sourceDir\cli\bin\khmer.dart") {
    $cliDir = "$sourceDir\cli"
}

Push-Location $cliDir
try {
    & dart compile exe "$cliDir\bin\khmer.dart" -o $targetExe
    Write-Host "✓ បាន Compile Native Executable ជោគជ័យ: $targetExe" -ForegroundColor Green
} catch {
    Copy-Item "$cliDir\bin\khmer.bat" "$binDir\khmer.bat" -Force
    Copy-Item "$cliDir\bin\khmer.ps1" "$binDir\khmer.ps1" -Force
    Write-Host "✓ បានចម្លង Launcher ទៅកាន់: $binDir" -ForegroundColor Green
} finally {
    Pop-Location
}

# 4. Configure PATH
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$binDir*") {
    [Environment]::SetEnvironmentVariable("Path", "$binDir;$userPath", "User")
    $env:Path = "$binDir;$env:Path"
    Write-Host "✓ បានបន្ថែម $binDir ទៅក្នុង User PATH" -ForegroundColor Green
}

# 5. Setup editors
try {
    & "$targetExe" editor vscode
    Write-Host "✓ បានដំឡើង Extension សម្រាប់ VS Code / Cursor" -ForegroundColor Green
} catch {}

Write-Host ""
Write-Host "🎉 ការដំឡើងបានជោគជ័យ! / Installation Completed Successfully!" -ForegroundColor Green
Write-Host "------------------------------------------------------------"
Write-Host "អ្នកអាចចាប់ផ្តើមប្រើប្រាស់ពាក្យបញ្ជា 'khmer' ក្នុង PowerShell ឬ Command Prompt:"
Write-Host "  khmer --version"
Write-Host "  khmer my_code.khmer"
Write-Host "  khmer init my_project"
Write-Host "  khmer editor vscode"
Write-Host "------------------------------------------------------------"
