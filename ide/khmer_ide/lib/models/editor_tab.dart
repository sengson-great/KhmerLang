class EditorTab {
  final String id;
  String title;
  String content;
  bool isDirty;
  String? filePath;

  EditorTab({
    required this.id,
    required this.title,
    required this.content,
    this.isDirty = false,
    this.filePath,
  });

  EditorTab copyWith({
    String? id,
    String? title,
    String? content,
    bool? isDirty,
    String? filePath,
  }) {
    return EditorTab(
      id: id ?? this.id,
      title: title ?? this.title,
      content: content ?? this.content,
      isDirty: isDirty ?? this.isDirty,
      filePath: filePath ?? this.filePath,
    );
  }
}
