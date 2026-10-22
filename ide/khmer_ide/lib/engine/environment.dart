import 'dart:math' as math;
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

String fromKhmerDigits(String s) {
  final buffer = StringBuffer();
  for (var i = 0; i < s.length; i++) {
    final c = s[i];
    buffer.write(khmerDigits[c] ?? c);
  }
  return buffer.toString();
}

num? parseKhmerNumber(dynamic val) {
  if (val is num) return val;
  if (val is String) {
    final converted = fromKhmerDigits(val.trim());
    return num.tryParse(converted);
  }
  return null;
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
    return '<អនុគមន៍ ${val.name}>';
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
          "អនុគមន៍ '$name' ត្រូវការប៉ារ៉ាម៉ែត្រចំនួន ${params.length} ប៉ុន្តែទទួលបាន ${args.length} / Function '$name' expected ${params.length} arguments, got ${args.length}");
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
  String toString() => '<អនុគមន៍ $name>';
}

class KhmerClass {
  final String name;
  final KhmerClass? parent;
  final Map<String, KhmerFunction> methods;
  final Map<String, KhmerFunction> getters;
  final Map<String, KhmerFunction> setters;

  KhmerClass(
    this.name,
    this.parent,
    this.methods, {
    Map<String, KhmerFunction>? getters,
    Map<String, KhmerFunction>? setters,
  })  : getters = getters ?? {},
        setters = setters ?? {};

  KhmerFunction? findMethod(String methodName) {
    if (methods.containsKey(methodName)) {
      return methods[methodName];
    }
    if (parent != null) {
      return parent!.findMethod(methodName);
    }
    return null;
  }

  KhmerFunction? findGetter(String getterName) {
    if (getters.containsKey(getterName)) {
      return getters[getterName];
    }
    if (parent != null) {
      return parent!.findGetter(getterName);
    }
    return null;
  }

  KhmerFunction? findSetter(String setterName) {
    if (setters.containsKey(setterName)) {
      return setters[setterName];
    }
    if (parent != null) {
      return parent!.findSetter(setterName);
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

  dynamic get(String memberName, [dynamic interpreter]) {
    // 1. Check if there is a getter
    final getter = khmerClass.findGetter(memberName);
    if (getter != null) {
      final boundGetter = getter.bind(this);
      if (interpreter != null) {
        return boundGetter.call(interpreter, []);
      }
      return boundGetter;
    }

    // 2. Check instance fields
    if (fields.containsKey(memberName)) {
      return fields[memberName];
    }

    // 3. Check methods
    final method = khmerClass.findMethod(memberName);
    if (method != null) {
      return method.bind(this);
    }

    throw RuntimeError(
        "មិនស្គាល់សមាជិក ឬអនុគមន៍ '$memberName' ក្នុងថ្នាក់ '${khmerClass.name}' / Undefined property or method '$memberName'");
  }

  void set(String memberName, dynamic value, [dynamic interpreter]) {
    // 1. Check if there is a setter
    final setter = khmerClass.findSetter(memberName);
    if (setter != null) {
      final boundSetter = setter.bind(this);
      if (interpreter != null) {
        boundSetter.call(interpreter, [value]);
        return;
      }
    }

    // 2. Set field
    fields[memberName] = value;
  }

  @override
  String toString() => '<វត្ថុនៃថ្នាក់ ${khmerClass.name}>';
}

Environment createGlobalEnvironment({
  void Function(String text)? stdoutWrite,
  String Function(String prompt)? stdinRead,
}) {
  final env = Environment();
  final randomGen = math.Random();

  // 1. I/O & Core
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
      throw RuntimeError("អនុគមន៍ 'ប្រវែង' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ / 'ប្រវែង' requires 1 argument");
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

  // 2. Math Functions (គណិតវិទ្យា)
  dynamic builtinAbs(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'ដាច់ខាត' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ");
    final n = parseKhmerNumber(args[0]);
    if (n == null) throw RuntimeError("អនុគមន៍ 'ដាច់ខាត' ត្រូវការតម្លៃជាលេខ");
    return n.abs();
  }

  dynamic builtinSqrt(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'ឬសការ៉េ' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ");
    final n = parseKhmerNumber(args[0]);
    if (n == null) throw RuntimeError("អនុគមន៍ 'ឬសការ៉េ' ត្រូវការតម្លៃជាលេខ");
    if (n < 0) throw RuntimeError("មិនអាចរកឬសការ៉េនៃលេខអវិជ្ជមានបានទេ");
    final res = math.sqrt(n);
    return res == res.roundToDouble() ? res.toInt() : res;
  }

  dynamic builtinPow(List<dynamic> args) {
    if (args.length < 2) throw RuntimeError("អនុគមន៍ 'ស្វ័យគុណ' ត្រូវការ ២ ប៉ារ៉ាម៉ែត្រ (គោល, ស្វ័យគុណ)");
    final base = parseKhmerNumber(args[0]);
    final exp = parseKhmerNumber(args[1]);
    if (base == null || exp == null) throw RuntimeError("អនុគមន៍ 'ស្វ័យគុណ' ត្រូវការតម្លៃជាលេខ");
    final res = math.pow(base, exp);
    if (res is double && res == res.roundToDouble()) return res.toInt();
    return res;
  }

  dynamic builtinRound(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'បង្គត់' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ");
    final n = parseKhmerNumber(args[0]);
    if (n == null) throw RuntimeError("អនុគមន៍ 'បង្គត់' ត្រូវការតម្លៃជាលេខ");
    return n.round();
  }

  dynamic builtinFloor(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'បង្គត់ចុះ' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ");
    final n = parseKhmerNumber(args[0]);
    if (n == null) throw RuntimeError("អនុគមន៍ 'បង្គត់ចុះ' ត្រូវការតម្លៃជាលេខ");
    return n.floor();
  }

  dynamic builtinCeil(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'បង្គត់ឡើង' ត្រូវការប៉ារ៉ាម៉ែត្រមួយ");
    final n = parseKhmerNumber(args[0]);
    if (n == null) throw RuntimeError("អនុគមន៍ 'បង្គត់ឡើង' ត្រូវការតម្លៃជាលេខ");
    return n.ceil();
  }

  dynamic builtinMax(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'អតិបរមា' ត្រូវការប៉ារ៉ាម៉ែត្រយ៉ាងតិចមួយ");
    List<dynamic> items = args;
    if (args.length == 1 && args[0] is List) {
      items = args[0] as List;
    }
    if (items.isEmpty) throw RuntimeError("បញ្ជីទទេ");
    num highest = parseKhmerNumber(items[0]) ?? (throw RuntimeError("ធាតុទាំងអស់ត្រូវតែជាលេខ"));
    for (var i = 1; i < items.length; i++) {
      final val = parseKhmerNumber(items[i]);
      if (val == null) throw RuntimeError("ធាតុទាំងអស់ត្រូវតែជាលេខ");
      if (val > highest) highest = val;
    }
    return highest;
  }

  dynamic builtinMin(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'អប្បបរមា' ត្រូវការប៉ារ៉ាម៉ែត្រយ៉ាងតិចមួយ");
    List<dynamic> items = args;
    if (args.length == 1 && args[0] is List) {
      items = args[0] as List;
    }
    if (items.isEmpty) throw RuntimeError("បញ្ជីទទេ");
    num lowest = parseKhmerNumber(items[0]) ?? (throw RuntimeError("ធាតុទាំងអស់ត្រូវតែជាលេខ"));
    for (var i = 1; i < items.length; i++) {
      final val = parseKhmerNumber(items[i]);
      if (val == null) throw RuntimeError("ធាតុទាំងអស់ត្រូវតែជាលេខ");
      if (val < lowest) lowest = val;
    }
    return lowest;
  }

  dynamic builtinRandom(List<dynamic> args) {
    if (args.isEmpty) {
      return randomGen.nextDouble();
    }
    if (args.length == 1) {
      final max = parseKhmerNumber(args[0])?.toInt() ?? 1;
      return randomGen.nextInt(max <= 0 ? 1 : max);
    }
    final min = parseKhmerNumber(args[0])?.toInt() ?? 0;
    final max = parseKhmerNumber(args[1])?.toInt() ?? 1;
    if (max <= min) return min;
    return min + randomGen.nextInt(max - min + 1);
  }

  // 3. Type Conversion
  dynamic builtinToNum(List<dynamic> args) {
    if (args.isEmpty) return 0;
    final val = args[0];
    final parsed = parseKhmerNumber(val);
    if (parsed == null) {
      throw RuntimeError("មិនអាចបម្លែង '$val' ទៅជាលេខបានទេ");
    }
    return parsed;
  }

  dynamic builtinToStr(List<dynamic> args) {
    if (args.isEmpty) return '';
    return formatKhmerValue(args[0]);
  }

  dynamic builtinToBool(List<dynamic> args) {
    if (args.isEmpty) return false;
    final val = args[0];
    if (val == null || val == false || val == 0 || val == '' || val == 'មិនពិត') return false;
    return true;
  }

  // 4. String Utilities
  dynamic builtinSplit(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'ពុះ' ត្រូវការប៉ារ៉ាម៉ែត្រ");
    final str = args[0].toString();
    final delim = args.length > 1 ? args[1].toString() : ' ';
    return str.split(delim);
  }

  dynamic builtinSubstr(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'កាត់' ត្រូវការប៉ារ៉ាម៉ែត្រ");
    final str = args[0].toString();
    final start = parseKhmerNumber(args.length > 1 ? args[1] : 0)?.toInt() ?? 0;
    if (start < 0 || start > str.length) {
      throw RuntimeError("សន្ទស្សន៍ចាប់ផ្តើមក្រៅដែនកំណត់: $start");
    }
    if (args.length > 2) {
      final end = parseKhmerNumber(args[2])?.toInt() ?? str.length;
      final safeEnd = end.clamp(start, str.length);
      return str.substring(start, safeEnd);
    }
    return str.substring(start);
  }

  dynamic builtinReplace(List<dynamic> args) {
    if (args.length < 3) throw RuntimeError("អនុគមន៍ 'ជំនួស' ត្រូវការ ៣ ប៉ារ៉ាម៉ែត្រ (អត្ថបទ, ពាក្យចាស់, ពាក្យថ្មី)");
    final str = args[0].toString();
    final from = args[1].toString();
    final to = args[2].toString();
    return str.replaceAll(from, to);
  }

  dynamic builtinTrim(List<dynamic> args) {
    if (args.isEmpty) return '';
    return args[0].toString().trim();
  }

  dynamic builtinUpper(List<dynamic> args) {
    if (args.isEmpty) return '';
    return args[0].toString().toUpperCase();
  }

  dynamic builtinLower(List<dynamic> args) {
    if (args.isEmpty) return '';
    return args[0].toString().toLowerCase();
  }

  // 5. Array Utilities
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

  dynamic builtinInsert(List<dynamic> args) {
    if (args.length < 3) throw RuntimeError("អនុគមន៍ 'បញ្ចូល' ត្រូវការ ៣ ប៉ារ៉ាម៉ែត្រ (បញ្ជី, ទីតាំង, ធាតុ)");
    final arr = args[0];
    if (arr is! List) throw RuntimeError("អនុគមន៍ 'បញ្ចូល' ប្រើបានតែជាមួយបញ្ជីប៉ុណ្ណោះ");
    final idx = parseKhmerNumber(args[1])?.toInt() ?? 0;
    if (idx < 0 || idx > arr.length) throw RuntimeError("ទីតាំងក្រៅដែនកំណត់: $idx");
    arr.insert(idx, args[2]);
    return arr;
  }

  dynamic builtinPop(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'ដកចេញ' ត្រូវការបញ្ជី");
    final arr = args[0];
    if (arr is! List) throw RuntimeError("អនុគមន៍ 'ដកចេញ' ប្រើបានតែជាមួយបញ្ជីប៉ុណ្ណោះ");
    if (arr.isEmpty) throw RuntimeError("មិនអាចដកចេញពីបញ្ជីទទេបានទេ");
    if (args.length > 1) {
      final idx = parseKhmerNumber(args[1])?.toInt() ?? (arr.length - 1);
      if (idx < 0 || idx >= arr.length) throw RuntimeError("ទីតាំងក្រៅដែនកំណត់: $idx");
      return arr.removeAt(idx);
    }
    return arr.removeLast();
  }

  dynamic builtinRemove(List<dynamic> args) {
    if (args.length < 2) throw RuntimeError("អនុគមន៍ 'លុប' ត្រូវការ ២ ប៉ារ៉ាម៉ែត្រ (បញ្ជី, ធាតុ)");
    final arr = args[0];
    if (arr is! List) throw RuntimeError("អនុគមន៍ 'លុប' ប្រើបានតែជាមួយបញ្ជីប៉ុណ្ណោះ");
    return arr.remove(args[1]);
  }

  dynamic builtinJoin(List<dynamic> args) {
    if (args.isEmpty) return '';
    final arr = args[0];
    if (arr is! List) return arr.toString();
    final delim = args.length > 1 ? args[1].toString() : '';
    return arr.map((e) => formatKhmerValue(e)).join(delim);
  }

  dynamic builtinSort(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'តម្រៀប' ត្រូវការបញ្ជី");
    final arr = args[0];
    if (arr is! List) throw RuntimeError("អនុគមន៍ 'តម្រៀប' ប្រើបានតែជាមួយបញ្ជីប៉ុណ្ណោះ");
    final copy = List<dynamic>.from(arr);
    copy.sort((a, b) {
      if (a is num && b is num) return a.compareTo(b);
      return a.toString().compareTo(b.toString());
    });
    return copy;
  }

  dynamic builtinReverse(List<dynamic> args) {
    if (args.isEmpty) throw RuntimeError("អនុគមន៍ 'ត្រឡប់បញ្ជី' ត្រូវការប៉ារ៉ាម៉ែត្រ");
    final val = args[0];
    if (val is List) {
      return List<dynamic>.from(val.reversed);
    }
    if (val is String) {
      return val.split('').reversed.join();
    }
    throw RuntimeError("អនុគមន៍ 'ត្រឡប់បញ្ជី' ប្រើបានតែជាមួយបញ្ជី ឬអក្សរប៉ុណ្ណោះ");
  }

  dynamic builtinIndexOf(List<dynamic> args) {
    if (args.length < 2) throw RuntimeError("អនុគមន៍ 'ស្វែងរក' ត្រូវការ ២ ប៉ារ៉ាម៉ែត្រ (បញ្ជី/អក្សរ, ធាតុ)");
    final target = args[0];
    final item = args[1];
    if (target is List) {
      return target.indexOf(item);
    }
    if (target is String) {
      return target.indexOf(item.toString());
    }
    return -1;
  }

  dynamic builtinContains(List<dynamic> args) {
    if (args.length < 2) throw RuntimeError("អនុគមន៍ 'មាន' ត្រូវការ ២ ប៉ារ៉ាម៉ែត្រ");
    final target = args[0];
    final item = args[1];
    if (target is List) {
      return target.contains(item);
    }
    if (target is String) {
      return target.contains(item.toString());
    }
    if (target is Map) {
      return target.containsKey(item);
    }
    return false;
  }

  // 6. System & Time Utilities
  dynamic builtinNow(List<dynamic> args) {
    return DateTime.now().millisecondsSinceEpoch;
  }

  dynamic builtinInput(List<dynamic> args) {
    final prompt = args.isNotEmpty ? args.map((e) => formatKhmerValue(e)).join(' ') : '';
    if (stdinRead != null) {
      return stdinRead(prompt);
    }
    return '';
  }

  // Register Built-in Functions with Khmer and English aliases
  // I/O & Core
  env.define('បង្ហាញ', BuiltinFunction('បង្ហាញ', builtinPrint));
  env.define('print', BuiltinFunction('print', builtinPrint));
  env.define('ប្រវែង', BuiltinFunction('ប្រវែង', builtinLen));
  env.define('len', BuiltinFunction('len', builtinLen));
  env.define('ប្រភេទ', BuiltinFunction('ប្រភេទ', builtinType));
  env.define('type', BuiltinFunction('type', builtinType));

  // Math
  env.define('ដាច់ខាត', BuiltinFunction('ដាច់ខាត', builtinAbs));
  env.define('abs', BuiltinFunction('abs', builtinAbs));
  env.define('ឬសការ៉េ', BuiltinFunction('ឬសការ៉េ', builtinSqrt));
  env.define('sqrt', BuiltinFunction('sqrt', builtinSqrt));
  env.define('ស្វ័យគុណ', BuiltinFunction('ស្វ័យគុណ', builtinPow));
  env.define('pow', BuiltinFunction('pow', builtinPow));
  env.define('បង្គត់', BuiltinFunction('បង្គត់', builtinRound));
  env.define('round', BuiltinFunction('round', builtinRound));
  env.define('បង្គត់ចុះ', BuiltinFunction('បង្គត់ចុះ', builtinFloor));
  env.define('floor', BuiltinFunction('floor', builtinFloor));
  env.define('បង្គត់ឡើង', BuiltinFunction('បង្គត់ឡើង', builtinCeil));
  env.define('ceil', BuiltinFunction('ceil', builtinCeil));
  env.define('អតិបរមា', BuiltinFunction('អតិបរមា', builtinMax));
  env.define('max', BuiltinFunction('max', builtinMax));
  env.define('អប្បបរមា', BuiltinFunction('អប្បបរមា', builtinMin));
  env.define('min', BuiltinFunction('min', builtinMin));
  env.define('ចៃដន្យ', BuiltinFunction('ចៃដន្យ', builtinRandom));
  env.define('random', BuiltinFunction('random', builtinRandom));

  // Type Conversions
  env.define('ជាលេខ', BuiltinFunction('ជាលេខ', builtinToNum));
  env.define('toNum', BuiltinFunction('toNum', builtinToNum));
  env.define('toInt', BuiltinFunction('toInt', builtinToNum));
  env.define('ជាអក្សរ', BuiltinFunction('ជាអក្សរ', builtinToStr));
  env.define('toStr', BuiltinFunction('toStr', builtinToStr));
  env.define('ជាតក្ក', BuiltinFunction('ជាតក្ក', builtinToBool));
  env.define('toBool', BuiltinFunction('toBool', builtinToBool));

  // String
  env.define('ពុះ', BuiltinFunction('ពុះ', builtinSplit));
  env.define('split', BuiltinFunction('split', builtinSplit));
  env.define('កាត់', BuiltinFunction('កាត់', builtinSubstr));
  env.define('substr', BuiltinFunction('substr', builtinSubstr));
  env.define('ជំនួស', BuiltinFunction('ជំនួស', builtinReplace));
  env.define('replace', BuiltinFunction('replace', builtinReplace));
  env.define('សម្អាត', BuiltinFunction('សម្អាត', builtinTrim));
  env.define('trim', BuiltinFunction('trim', builtinTrim));
  env.define('អក្សរធំ', BuiltinFunction('អក្សរធំ', builtinUpper));
  env.define('upper', BuiltinFunction('upper', builtinUpper));
  env.define('អក្សរតូច', BuiltinFunction('អក្សរតូច', builtinLower));
  env.define('lower', BuiltinFunction('lower', builtinLower));

  // Array
  env.define('បន្ថែម', BuiltinFunction('បន្ថែម', builtinAppend));
  env.define('append', BuiltinFunction('append', builtinAppend));
  env.define('បញ្ចូល', BuiltinFunction('បញ្ចូល', builtinInsert));
  env.define('insert', BuiltinFunction('insert', builtinInsert));
  env.define('ដកចេញ', BuiltinFunction('ដកចេញ', builtinPop));
  env.define('pop', BuiltinFunction('pop', builtinPop));
  env.define('លុប', BuiltinFunction('លុប', builtinRemove));
  env.define('remove', BuiltinFunction('remove', builtinRemove));
  env.define('ភ្ជាប់', BuiltinFunction('ភ្ជាប់', builtinJoin));
  env.define('join', BuiltinFunction('join', builtinJoin));
  env.define('តម្រៀប', BuiltinFunction('តម្រៀប', builtinSort));
  env.define('sort', BuiltinFunction('sort', builtinSort));
  env.define('ត្រឡប់បញ្ជី', BuiltinFunction('ត្រឡប់បញ្ជី', builtinReverse));
  env.define('reverse', BuiltinFunction('reverse', builtinReverse));
  env.define('ស្វែងរក', BuiltinFunction('ស្វែងរក', builtinIndexOf));
  env.define('indexOf', BuiltinFunction('indexOf', builtinIndexOf));
  env.define('មាន', BuiltinFunction('មាន', builtinContains));
  env.define('contains', BuiltinFunction('contains', builtinContains));

  // System & Time
  env.define('ពេលនេះ', BuiltinFunction('ពេលនេះ', builtinNow));
  env.define('now', BuiltinFunction('now', builtinNow));
  env.define('អាន', BuiltinFunction('អាន', builtinInput));
  env.define('input', BuiltinFunction('input', builtinInput));

  return env;
}
