import 'tokens.dart';
import 'errors.dart';
import 'ast_nodes.dart';

String toKhmerDigits(dynamic val) {
  final s = val.toString();
  final buffer = StringBuffer();
  for (var i = 0; i < s.length; i++) {
    final c = s[i];
    buffer.write(asciiToKhmerDigits[c] ?? c);
  }
  return buffer.toString();
}

String formatKhmerValue(dynamic val) {
  if (val == null) {
    return 'ទទេ';
  }
  if (val is bool) {
    return val ? 'ពិត' : 'មិនពិត';
  }
  if (val is double) {
    final numStr = val == val.roundToDouble() ? val.toInt().toString() : val.toString();
    return toKhmerDigits(numStr);
  }
  if (val is int) {
    return toKhmerDigits(val.toString());
  }
  if (val is List) {
    final items = val.map((e) => formatKhmerValue(e)).join(', ');
    return '[$items]';
  }
  if (val is Map) {
    final pairs = val.entries
        .map((e) => '"${e.key}": ${formatKhmerValue(e.value)}')
        .join(', ');
    return '{$pairs}';
  }
  if (val is KhmerInstance) {
    return '<វត្ថុនៃថ្នាក់ ${val.khmerClass.name}>';
  }
  if (val is KhmerClass) {
    return '<ថ្នាក់ ${val.name}>';
  }
  if (val is KhmerFunction) {
    return '<អនុគមន៍/វិធី ${val.name}>';
  }
  if (val is BuiltinFunction) {
    return '<អនុគមន៍បង្កើតស្រេច ${val.name}>';
  }
  return val.toString();
}

class Environment {
  final Map<String, dynamic> values = {};
  final Environment? parent;

  Environment([this.parent]);

  void define(String name, dynamic value) {
    values[name] = value;
  }

  dynamic get(String name) {
    if (values.containsKey(name)) {
      return values[name];
    }
    if (parent != null) {
      return parent!.get(name);
    }
    throw RuntimeError(
        "មិនស្គាល់អថេរ ឬអនុគមន៍ '$name' / Undefined variable or function '$name'");
  }

  void assign(String name, dynamic value) {
    if (values.containsKey(name)) {
      values[name] = value;
      return;
    }
    if (parent != null) {
      parent!.assign(name, value);
      return;
    }
    throw RuntimeError(
        "អថេរមិនទាន់បានប្រកាស '$name' / Cannot assign to undeclared variable '$name'");
  }
}

class BuiltinFunction {
  final String name;
  final dynamic Function(List<dynamic> args) func;

  BuiltinFunction(this.name, this.func);

  dynamic call(List<dynamic> args) => func(args);

  @override
  String toString() => '<អនុគមន៍បង្កើតស្រេច/BuiltinFunction $name>';
}

class KhmerFunction {
  final String name;
  final List<String> params;
  final BlockNode body;
  final Environment closureEnv;

  KhmerFunction(this.name, this.params, this.body, this.closureEnv);

  KhmerFunction bind(KhmerInstance instance) {
    final boundEnv = Environment(closureEnv);
    boundEnv.define('នេះ', instance);
    boundEnv.define('ខ្លួនវា', instance);
    return KhmerFunction(name, params, body, boundEnv);
  }

  dynamic call(dynamic interpreter, List<dynamic> args) {
    if (args.length != params.length) {
      throw RuntimeError(
          "អនុគមន៍/វិធី '$name' ត្រូវការប៉ារ៉ាម៉ែត្រចំនួន ${params.length} ប៉ុន្តែទទួលបាន ${args.length} / Method '$name' expected ${params.length} arguments, got ${args.length}");
    }

    final localEnv = Environment(closureEnv);
    for (var i = 0; i < params.length; i++) {
      localEnv.define(params[i], args[i]);
    }

    try {
      interpreter.executeBlock(body.statements, localEnv);
    } on ReturnException catch (ret) {
      return ret.value;
    }
    return null;
  }

  @override
  String toString() => '<អនុគមន៍/វិធី $name>';
}

class KhmerClass {
  final String name;
  final KhmerClass? parent;
  final Map<String, KhmerFunction> methods;

  KhmerClass(this.name, this.parent, this.methods);

  KhmerFunction? findMethod(String methodName) {
    if (methods.containsKey(methodName)) {
      return methods[methodName];
    }
    if (parent != null) {
      return parent!.findMethod(methodName);
    }
    return null;
  }

  KhmerInstance instantiate(dynamic interpreter, List<dynamic> args) {
    final instance = KhmerInstance(this);
    final initializer = findMethod('បង្កើត'); // Constructor
    if (initializer != null) {
      final boundInit = initializer.bind(instance);
      boundInit.call(interpreter, args);
    } else if (args.isNotEmpty) {
      throw RuntimeError(
          "ថ្នាក់ '$name' គ្មានវិធីសាស្ត្របង្កើត (Constructor) / Class '$name' has no constructor taking arguments");
    }
    return instance;
  }

  @override
  String toString() => '<ថ្នាក់ $name>';
}

class KhmerInstance {
  final KhmerClass khmerClass;
  final Map<String, dynamic> fields = {};

  KhmerInstance(this.khmerClass);

  dynamic get(String memberName) {
    if (fields.containsKey(memberName)) {
      return fields[memberName];
    }
    final method = khmerClass.findMethod(memberName);
    if (method != null) {
      return method.bind(this);
    }
    throw RuntimeError(
        "មិនស្គាល់សមាជិក ឬវិធីសាស្ត្រ '$memberName' ក្នុងថ្នាក់ '${khmerClass.name}' / Undefined property or method '$memberName'");
  }

  void set(String memberName, dynamic value) {
    fields[memberName] = value;
  }

  @override
  String toString() => '<វត្ថុនៃថ្នាក់ ${khmerClass.name}>';
}

Environment createGlobalEnvironment({void Function(String text)? stdoutWrite}) {
  final env = Environment();

  dynamic builtinPrint(List<dynamic> args) {
    final outStr = args.map((arg) => formatKhmerValue(arg)).join(' ');
    if (stdoutWrite != null) {
      stdoutWrite('$outStr\n');
    } else {
      // ignore: avoid_print
      print(outStr);
    }
    return null;
  }

  dynamic builtinLen(List<dynamic> args) {
    if (args.isEmpty) {
      throw RuntimeError("អនុគមន៍ 'ប្រវែង' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ");
    }
    final val = args[0];
    if (val is String) return val.length;
    if (val is List) return val.length;
    if (val is Map) return val.length;
    throw RuntimeError(
        "អនុគមន៍ 'ប្រវែង' ប្រើបានតែជាមួយអក្សរ បញ្ជី ឬវត្ថុប៉ុណ្ណោះ / 'ប្រវែង' requires string, array, or object");
  }

  dynamic builtinType(List<dynamic> args) {
    if (args.isEmpty) return 'ទទេ';
    final val = args[0];
    if (val == null) return 'ទទេ';
    if (val is bool) return 'តក្កវិទ្យា';
    if (val is num) return 'លេខ';
    if (val is String) return 'អក្សរ';
    if (val is List) return 'បញ្ជី';
    if (val is Map) return 'វត្ថុ';
    if (val is KhmerInstance) return 'ថ្នាក់(${val.khmerClass.name})';
    if (val is KhmerClass) return 'ថ្នាក់(${val.name})';
    return 'អនុគមន៍';
  }

  dynamic builtinAppend(List<dynamic> args) {
    if (args.length < 2) {
      throw RuntimeError("អនុគមន៍ 'បន្ថែម' ត្រូវការ ២ ប៉ារ៉ាម៉ែត្រ (បញ្ជី, ធាតុ)");
    }
    final arr = args[0];
    final elem = args[1];
    if (arr is List) {
      arr.add(elem);
      return arr;
    }
    throw RuntimeError(
        "អនុគមន៍ 'បន្ថែម' ប្រើបានតែជាមួយបញ្ជី (Array) ប៉ុណ្ណោះ / 'បន្ថែម' requires array");
  }

  env.define('បង្ហាញ', BuiltinFunction('បង្ហាញ', builtinPrint));
  env.define('print', BuiltinFunction('print', builtinPrint));
  env.define('ប្រវែង', BuiltinFunction('ប្រវែង', builtinLen));
  env.define('len', BuiltinFunction('len', builtinLen));
  env.define('ប្រភេទ', BuiltinFunction('ប្រភេទ', builtinType));
  env.define('type', BuiltinFunction('type', builtinType));
  env.define('បន្ថែម', BuiltinFunction('បន្ថែម', builtinAppend));
  env.define('append', BuiltinFunction('append', builtinAppend));

  return env;
}
