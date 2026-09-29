import 'package:flutter/material.dart';
import 'app_theme.dart';

class SyntaxTheme {
  final TextStyle baseStyle;
  final TextStyle keywordStyle;
  final TextStyle oopStyle;
  final TextStyle numberStyle;
  final TextStyle stringStyle;
  final TextStyle commentStyle;
  final TextStyle operatorStyle;
  final TextStyle functionStyle;
  final TextStyle identifierStyle;

  SyntaxTheme({
    required this.baseStyle,
    required this.keywordStyle,
    required this.oopStyle,
    required this.numberStyle,
    required this.stringStyle,
    required this.commentStyle,
    required this.operatorStyle,
    required this.functionStyle,
    required this.identifierStyle,
  });

  factory SyntaxTheme.fromAppTheme(AppThemeColors theme, {required double fontSize, String? fontFamily}) {
    final base = TextStyle(
      fontSize: fontSize,
      fontFamily: fontFamily ?? 'Kantumruy Pro',
      color: theme.textPrimary,
      height: 1.5,
    );

    final isDark = theme != AppThemes.cleanLight;

    return SyntaxTheme(
      baseStyle: base,
      keywordStyle: base.copyWith(
        color: isDark ? const Color(0xFFC084FC) : const Color(0xFF7C3AED), // Purple
        fontWeight: FontWeight.bold,
      ),
      oopStyle: base.copyWith(
        color: isDark ? const Color(0xFFFBBF24) : const Color(0xFFB45309), // Amber/Gold
        fontWeight: FontWeight.bold,
      ),
      numberStyle: base.copyWith(
        color: isDark ? const Color(0xFFFB923C) : const Color(0xFFEA580C), // Orange
        fontWeight: FontWeight.w600,
      ),
      stringStyle: base.copyWith(
        color: isDark ? const Color(0xFF34D399) : const Color(0xFF059669), // Emerald
      ),
      commentStyle: base.copyWith(
        color: isDark ? const Color(0xFF64748B) : const Color(0xFF94A3B8), // Muted Slate
        fontStyle: FontStyle.italic,
      ),
      operatorStyle: base.copyWith(
        color: isDark ? const Color(0xFF38BDF8) : const Color(0xFF0284C7), // Sky Blue
        fontWeight: FontWeight.w600,
      ),
      functionStyle: base.copyWith(
        color: isDark ? const Color(0xFF60A5FA) : const Color(0xFF2563EB), // Blue
        fontWeight: FontWeight.w600,
      ),
      identifierStyle: base.copyWith(
        color: theme.textPrimary,
      ),
    );
  }
}
