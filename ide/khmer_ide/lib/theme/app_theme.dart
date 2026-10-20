import 'package:flutter/material.dart';

enum AppThemeMode {
  angkorDark,
  cyberKhmer,
  angkorSunset,
  cleanLight,
}

class AppThemeColors {
  final String name;
  final String khmerName;
  final Color background;
  final Color surface;
  final Color surfaceVariant;
  final Color surfaceHighlight;
  final Color border;
  final Color primary;
  final Color primaryAccent;
  final Color secondary;
  final Color textPrimary;
  final Color textSecondary;
  final Color textMuted;
  final Color error;
  final Color success;
  final Color warning;
  final Color consoleBackground;

  const AppThemeColors({
    required this.name,
    required this.khmerName,
    required this.background,
    required this.surface,
    required this.surfaceVariant,
    required this.surfaceHighlight,
    required this.border,
    required this.primary,
    required this.primaryAccent,
    required this.secondary,
    required this.textPrimary,
    required this.textSecondary,
    required this.textMuted,
    required this.error,
    required this.success,
    required this.warning,
    required this.consoleBackground,
  });
}

class AppThemes {
  static const angkorDark = AppThemeColors(
    name: 'Angkor Dark',
    khmerName: 'រាត្រីអង្គរ (Angkor Dark)',
    background: Color(0xFF0F172A), // Slate 900
    surface: Color(0xFF1E293B), // Slate 800
    surfaceVariant: Color(0xFF162032),
    surfaceHighlight: Color(0xFF334155),
    border: Color(0xFF334155),
    primary: Color(0xFF10B981), // Emerald 500
    primaryAccent: Color(0xFF34D399),
    secondary: Color(0xFF38BDF8), // Sky 400
    textPrimary: Color(0xFFF8FAFC),
    textSecondary: Color(0xFFCBD5E1),
    textMuted: Color(0xFF64748B),
    error: Color(0xFFEF4444),
    success: Color(0xFF10B981),
    warning: Color(0xFFF59E0B),
    consoleBackground: Color(0xFF0B1120),
  );

  static const cyberKhmer = AppThemeColors(
    name: 'Cyber Khmer',
    khmerName: 'ស៊ីប័រខ្មែរ (Cyber Khmer)',
    background: Color(0xFF080B14),
    surface: Color(0xFF10172A),
    surfaceVariant: Color(0xFF0D1222),
    surfaceHighlight: Color(0xFF1E294B),
    border: Color(0xFF1E294B),
    primary: Color(0xFF8B5CF6), // Purple 500
    primaryAccent: Color(0xFFA78BFA),
    secondary: Color(0xFF06B6D4), // Cyan 500
    textPrimary: Color(0xFFF1F5F9),
    textSecondary: Color(0xFF94A3B8),
    textMuted: Color(0xFF475569),
    error: Color(0xFFF43F5E),
    success: Color(0xFF10B981),
    warning: Color(0xFFFBBF24),
    consoleBackground: Color(0xFF04060B),
  );

  static const angkorSunset = AppThemeColors(
    name: 'Angkor Sunset',
    khmerName: 'ថ្ងៃលិចអង្គរ (Angkor Sunset)',
    background: Color(0xFF171210),
    surface: Color(0xFF241B18),
    surfaceVariant: Color(0xFF1D1613),
    surfaceHighlight: Color(0xFF382924),
    border: Color(0xFF3E2D27),
    primary: Color(0xFFF97316), // Orange 500
    primaryAccent: Color(0xFFFB923C),
    secondary: Color(0xFFFBBF24), // Amber 400
    textPrimary: Color(0xFFFFF7ED),
    textSecondary: Color(0xFFFED7AA),
    textMuted: Color(0xFF856A61),
    error: Color(0xFFEF4444),
    success: Color(0xFF22C55E),
    warning: Color(0xFFF59E0B),
    consoleBackground: Color(0xFF100C0A),
  );

  static const cleanLight = AppThemeColors(
    name: 'Clean Light',
    khmerName: 'ពន្លឺស្រស់ថ្លា (Clean Light)',
    background: Color(0xFFF8FAFC),
    surface: Color(0xFFFFFFFF),
    surfaceVariant: Color(0xFFF1F5F9),
    surfaceHighlight: Color(0xFFE2E8F0),
    border: Color(0xFFE2E8F0),
    primary: Color(0xFF059669),
    primaryAccent: Color(0xFF10B981),
    secondary: Color(0xFF0284C7),
    textPrimary: Color(0xFF0F172A),
    textSecondary: Color(0xFF334155),
    textMuted: Color(0xFF94A3B8),
    error: Color(0xFFDC2626),
    success: Color(0xFF16A34A),
    warning: Color(0xFFD97706),
    consoleBackground: Color(0xFFF1F5F9),
  );

  static AppThemeColors getTheme(AppThemeMode mode) {
    switch (mode) {
      case AppThemeMode.angkorDark:
        return angkorDark;
      case AppThemeMode.cyberKhmer:
        return cyberKhmer;
      case AppThemeMode.angkorSunset:
        return angkorSunset;
      case AppThemeMode.cleanLight:
        return cleanLight;
    }
  }
}
