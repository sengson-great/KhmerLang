abstract class ASTNode {
  const ASTNode();
}

// Expressions

class NumberNode extends ASTNode {
  final num value;
  const NumberNode(this.value);

  @override
  String toString() => 'NumberNode($value)';
}

class StringNode extends ASTNode {
  final String value;
  const StringNode(this.value);

  @override
  String toString() => 'StringNode("$value")';
}

class BooleanNode extends ASTNode {
  final bool value;
  const BooleanNode(this.value);

  @override
  String toString() => 'BooleanNode($value)';
}

class NullNode extends ASTNode {
  const NullNode();

  @override
  String toString() => 'NullNode()';
}

class ArrayNode extends ASTNode {
  final List<ASTNode> elements;
  const ArrayNode(this.elements);

  @override
  String toString() => 'ArrayNode($elements)';
}

class ObjectNode extends ASTNode {
  final List<MapEntry<String, ASTNode>> pairs;
  const ObjectNode(this.pairs);

  @override
  String toString() => 'ObjectNode($pairs)';
}

class IdentifierNode extends ASTNode {
  final String name;
  const IdentifierNode(this.name);

  @override
  String toString() => 'IdentifierNode($name)';
}

class ThisNode extends ASTNode {
  const ThisNode();

  @override
  String toString() => 'ThisNode()';
}

class UnaryOpNode extends ASTNode {
  final String op;
  final ASTNode operand;
  const UnaryOpNode(this.op, this.operand);

  @override
  String toString() => 'UnaryOpNode($op, $operand)';
}

class BinaryOpNode extends ASTNode {
  final ASTNode left;
  final String op;
  final ASTNode right;
  const BinaryOpNode(this.left, this.op, this.right);

  @override
  String toString() => 'BinaryOpNode($left, $op, $right)';
}

class AssignmentNode extends ASTNode {
  final String name;
  final ASTNode value;
  const AssignmentNode(this.name, this.value);

  @override
  String toString() => 'AssignmentNode($name, $value)';
}

class MemberAccessNode extends ASTNode {
  final ASTNode target;
  final String member;
  const MemberAccessNode(this.target, this.member);

  @override
  String toString() => 'MemberAccessNode($target.$member)';
}

class MemberAssignmentNode extends ASTNode {
  final ASTNode target;
  final String member;
  final ASTNode value;
  const MemberAssignmentNode(this.target, this.member, this.value);

  @override
  String toString() => 'MemberAssignmentNode($target.$member = $value)';
}

class IndexAccessNode extends ASTNode {
  final ASTNode target;
  final ASTNode index;
  const IndexAccessNode(this.target, this.index);

  @override
  String toString() => 'IndexAccessNode($target[$index])';
}

class IndexAssignmentNode extends ASTNode {
  final ASTNode target;
  final ASTNode index;
  final ASTNode value;
  const IndexAssignmentNode(this.target, this.index, this.value);

  @override
  String toString() => 'IndexAssignmentNode($target[$index] = $value)';
}

class FunctionCallNode extends ASTNode {
  final ASTNode callee;
  final List<ASTNode> args;
  const FunctionCallNode(this.callee, this.args);

  @override
  String toString() => 'FunctionCallNode($callee, $args)';
}

class NewNode extends ASTNode {
  final String className;
  final List<ASTNode> args;
  const NewNode(this.className, this.args);

  @override
  String toString() => 'NewNode($className, $args)';
}

// Statements

class VarDeclNode extends ASTNode {
  final String name;
  final ASTNode? value;
  const VarDeclNode(this.name, this.value);

  @override
  String toString() => 'VarDeclNode($name, $value)';
}

class PrintNode extends ASTNode {
  final List<ASTNode> expressions;
  const PrintNode(this.expressions);

  @override
  String toString() => 'PrintNode($expressions)';
}

class BlockNode extends ASTNode {
  final List<ASTNode> statements;
  const BlockNode(this.statements);

  @override
  String toString() => 'BlockNode($statements)';
}

class IfNode extends ASTNode {
  final ASTNode condition;
  final ASTNode thenBranch;
  final ASTNode? elseBranch;
  const IfNode(this.condition, this.thenBranch, [this.elseBranch]);

  @override
  String toString() => 'IfNode($condition, $thenBranch, else: $elseBranch)';
}

class WhileNode extends ASTNode {
  final ASTNode condition;
  final ASTNode body;
  const WhileNode(this.condition, this.body);

  @override
  String toString() => 'WhileNode($condition, $body)';
}

class ForNode extends ASTNode {
  final ASTNode? initializer;
  final ASTNode? condition;
  final ASTNode? increment;
  final ASTNode body;
  const ForNode(this.initializer, this.condition, this.increment, this.body);

  @override
  String toString() => 'ForNode(init: $initializer, cond: $condition, inc: $increment, body: $body)';
}

class FunctionDeclNode extends ASTNode {
  final String name;
  final List<String> params;
  final BlockNode body;
  const FunctionDeclNode(this.name, this.params, this.body);

  @override
  String toString() => 'FunctionDeclNode($name($params), $body)';
}

class ClassDeclNode extends ASTNode {
  final String name;
  final String? parentName;
  final List<FunctionDeclNode> methods;
  const ClassDeclNode(this.name, this.parentName, this.methods);

  @override
  String toString() => 'ClassDeclNode($name extends $parentName, methods: $methods)';
}

class ReturnNode extends ASTNode {
  final ASTNode? value;
  const ReturnNode([this.value]);

  @override
  String toString() => 'ReturnNode($value)';
}

class ExpressionStmtNode extends ASTNode {
  final ASTNode expression;
  const ExpressionStmtNode(this.expression);

  @override
  String toString() => 'ExpressionStmtNode($expression)';
}
