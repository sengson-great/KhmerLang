import 'package:flutter/material.dart';
import '../engine/ast_nodes.dart';
import '../theme/app_theme.dart';

class AstTreePanel extends StatelessWidget {
  final List<ASTNode>? ast;
  final AppThemeColors theme;

  const AstTreePanel({
    super.key,
    required this.ast,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    if (ast == null || ast!.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.account_tree_outlined, size: 48, color: theme.textMuted.withValues(alpha: 0.5)),
              const SizedBox(height: 12),
              Text(
                'មិនទាន់មានដើមឈើវេយ្យាករណ៍ AST នៅឡើយទេ',
                style: TextStyle(color: theme.textMuted, fontSize: 13),
              ),
              const SizedBox(height: 4),
              Text(
                'សូមចុច "រ៉ាន់កូដ" ដើម្បីទាញយក និងពិនិត្យរចនាសម្ព័ន្ធ AST',
                style: TextStyle(color: theme.textMuted.withValues(alpha: 0.7), fontSize: 12),
              ),
            ],
          ),
        ),
      );
    }

    return Container(
      color: theme.surface,
      child: ListView.builder(
        padding: const EdgeInsets.all(12),
        itemCount: ast!.length,
        itemBuilder: (context, index) {
          final node = ast![index];
          return _buildNodeCard(node, 0);
        },
      ),
    );
  }

  Widget _buildNodeCard(ASTNode node, int depth) {
    final title = _getNodeTitle(node);
    final subtitle = _getNodeSubtitle(node);
    final icon = _getNodeIcon(node);
    final color = _getNodeColor(node);

    return Container(
      margin: EdgeInsets.only(left: depth * 16.0, bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: theme.surfaceVariant,
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: color.withValues(alpha: 0.3), width: 1),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, size: 16, color: color),
              const SizedBox(width: 8),
              Text(
                title,
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                  color: color,
                ),
              ),
              if (subtitle != null) ...[
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    subtitle,
                    style: TextStyle(
                      fontSize: 12,
                      color: theme.textSecondary,
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ],
          ),
          ..._buildChildren(node, depth),
        ],
      ),
    );
  }

  List<Widget> _buildChildren(ASTNode node, int depth) {
    final children = <Widget>[];

    if (node is ClassDeclNode) {
      for (final m in node.methods) {
        children.add(const SizedBox(height: 6));
        children.add(_buildNodeCard(m, depth + 1));
      }
    } else if (node is FunctionDeclNode) {
      children.add(const SizedBox(height: 6));
      children.add(_buildNodeCard(node.body, depth + 1));
    } else if (node is BlockNode) {
      for (final stmt in node.statements) {
        children.add(const SizedBox(height: 6));
        children.add(_buildNodeCard(stmt, depth + 1));
      }
    } else if (node is IfNode) {
      children.add(const SizedBox(height: 6));
      children.add(_buildNodeCard(node.thenBranch, depth + 1));
      if (node.elseBranch != null) {
        children.add(const SizedBox(height: 6));
        children.add(_buildNodeCard(node.elseBranch!, depth + 1));
      }
    } else if (node is WhileNode) {
      children.add(const SizedBox(height: 6));
      children.add(_buildNodeCard(node.body, depth + 1));
    } else if (node is ForNode) {
      children.add(const SizedBox(height: 6));
      children.add(_buildNodeCard(node.body, depth + 1));
    }

    return children;
  }

  String _getNodeTitle(ASTNode node) {
    if (node is ClassDeclNode) return 'ថ្នាក់ (Class)';
    if (node is FunctionDeclNode) return 'អនុគមន៍/វិធី (Function)';
    if (node is VarDeclNode) return 'ប្រកាសអថេរ (VarDecl)';
    if (node is PrintNode) return 'បង្ហាញ (Print)';
    if (node is IfNode) return 'លក្ខខណ្ឌ (If)';
    if (node is WhileNode) return 'រង្វិលជុំ (While)';
    if (node is ForNode) return 'រង្វិលជុំ (For)';
    if (node is ReturnNode) return 'ត្រឡប់ (Return)';
    if (node is BlockNode) return 'ប្លុកកូដ (Block)';
    if (node is BinaryOpNode) return 'ប្រតិបត្តិការ (${node.op})';
    if (node is AssignmentNode) return 'កំណត់តម្លៃ (${node.name})';
    if (node is FunctionCallNode) return 'ហៅអនុគមន៍ (Call)';
    return node.runtimeType.toString();
  }

  String? _getNodeSubtitle(ASTNode node) {
    if (node is ClassDeclNode) {
      return node.parentName != null ? '${node.name} បន្តពី ${node.parentName}' : node.name;
    }
    if (node is FunctionDeclNode) {
      return '${node.name}(${node.params.join(", ")})';
    }
    if (node is VarDeclNode) {
      return '${node.name} = ${node.value}';
    }
    if (node is PrintNode) {
      return 'expressions: ${node.expressions.length}';
    }
    if (node is IfNode) {
      return 'លក្ខខណ្ឌ: ${node.condition}';
    }
    if (node is WhileNode) {
      return 'ខណៈ: ${node.condition}';
    }
    if (node is ReturnNode) {
      return 'តម្លៃ: ${node.value}';
    }
    return null;
  }

  IconData _getNodeIcon(ASTNode node) {
    if (node is ClassDeclNode) return Icons.apartment;
    if (node is FunctionDeclNode) return Icons.functions;
    if (node is VarDeclNode) return Icons.data_object;
    if (node is PrintNode) return Icons.output;
    if (node is IfNode) return Icons.call_split;
    if (node is WhileNode || node is ForNode) return Icons.loop;
    if (node is ReturnNode) return Icons.keyboard_return;
    return Icons.code;
  }

  Color _getNodeColor(ASTNode node) {
    if (node is ClassDeclNode) return const Color(0xFFFBBF24); // Gold
    if (node is FunctionDeclNode) return const Color(0xFF60A5FA); // Blue
    if (node is VarDeclNode) return const Color(0xFF34D399); // Green
    if (node is PrintNode) return const Color(0xFF38BDF8); // Cyan
    if (node is IfNode) return const Color(0xFFF43F5E); // Rose
    if (node is WhileNode || node is ForNode) return const Color(0xFFA78BFA); // Purple
    return theme.primary;
  }
}
