# ==============================================================================
# KhmerLang (ភាសាខ្មែរ) — PowerShell Launcher (Powered by Dart)
# ==============================================================================
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

if (Test-Path "$scriptDir\khmer_bin.exe") {
    & "$scriptDir\khmer_bin.exe" @args
    exit $LASTEXITCODE
}
if (Test-Path "$scriptDir\khmer_bin") {
    & "$scriptDir\khmer_bin" @args
    exit $LASTEXITCODE
}

dart run "$scriptDir\khmer.dart" @args
exit $LASTEXITCODE
