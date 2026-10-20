@echo off
rem ==============================================================================
rem KhmerLang (ភាសាខ្មែរ) — Windows CLI Launcher (Powered by Dart)
rem ==============================================================================
set SCRIPT_DIR=%~dp0
if exist "%SCRIPT_DIR%khmer_bin.exe" (
    "%SCRIPT_DIR%khmer_bin.exe" %*
    exit /b %ERRORLEVEL%
)
if exist "%SCRIPT_DIR%khmer_bin" (
    "%SCRIPT_DIR%khmer_bin" %*
    exit /b %ERRORLEVEL%
)
dart run "%SCRIPT_DIR%khmer.dart" %*
exit /b %ERRORLEVEL%
