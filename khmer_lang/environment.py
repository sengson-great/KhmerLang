from typing import Dict, Any, Optional
from khmer_lang.errors import RuntimeError

ASCII_TO_KHMER_DIGITS = {
    '0': '០', '1': '១', '2': '២', '3': '៣', '4': '៤',
    '5': '៥', '6': '៦', '7': '៧', '8': '៨', '9': '៩'
}


def to_khmer_digits(val: Any) -> str:
    s = str(val)
    return s.translate(str.maketrans(ASCII_TO_KHMER_DIGITS))


class Environment:
    def __init__(self, parent: Optional['Environment'] = None):
        self.values: Dict[str, Any] = {}
        self.parent = parent

    def define(self, name: str, value: Any):
        self.values[name] = value

    def get(self, name: str) -> Any:
        if name in self.values:
            return self.values[name]
        if self.parent is not None:
            return self.parent.get(name)
        raise RuntimeError(f"មិនស្គាល់អថេរ ឬអនុគមន៍ '{name}' / Undefined variable or function '{name}'")

    def assign(self, name: str, value: Any):
        if name in self.values:
            self.values[name] = value
            return
        if self.parent is not None:
            self.parent.assign(name, value)
            return
        raise RuntimeError(f"អថេរមិនទាន់បានប្រកាស '{name}' / Cannot assign to undeclared variable '{name}'")


class BuiltinFunction:
    def __init__(self, name: str, func):
        self.name = name
        self.func = func

    def __call__(self, *args):
        return self.func(*args)

    def __repr__(self):
        return f"<អនុគមន៍បង្កើតស្រេច/BuiltinFunction {self.name}>"


def create_global_environment(stdout_write=None) -> Environment:
    env = Environment()

    def builtin_print(*args):
        out_str = " ".join(str(format_khmer_value(arg)) for arg in args)
        if stdout_write:
            stdout_write(out_str + "\n")
        else:
            print(out_str)
        return None

    def builtin_len(val):
        if isinstance(val, (str, list, dict)):
            return len(val)
        raise RuntimeError("អនុគមន៍ 'ប្រវែង' ប្រើបានតែជាមួយអក្សរ បញ្ជី ឬវត្ថុប៉ុណ្ណោះ / 'ប្រវែង' requires string, array, or object")

    def builtin_type(val):
        if val is None:
            return "ទទេ"
        if isinstance(val, bool):
            return "តក្កវិទ្យា"
        if isinstance(val, (int, float)):
            return "លេខ"
        if isinstance(val, str):
            return "អក្សរ"
        if isinstance(val, list):
            return "បញ្ជី"
        if isinstance(val, dict):
            return "វត្ថុ"
        from khmer_lang.interpreter import KhmerInstance, KhmerClass
        if isinstance(val, KhmerInstance):
            return f"ថ្នាក់({val.khmer_class.name})"
        if isinstance(val, KhmerClass):
            return f"ថ្នាក់({val.name})"
        return "អនុគមន៍"

    def builtin_append(arr, elem):
        if isinstance(arr, list):
            arr.append(elem)
            return arr
        raise RuntimeError("អនុគមន៍ 'បន្ថែម' ប្រើបានតែជាមួយបញ្ជី (Array) ប៉ុណ្ណោះ / 'បន្ថែម' requires array")

    env.define("បង្ហាញ", BuiltinFunction("បង្ហាញ", builtin_print))
    env.define("print", BuiltinFunction("print", builtin_print))
    env.define("ប្រវែង", BuiltinFunction("ប្រវែង", builtin_len))
    env.define("len", BuiltinFunction("len", builtin_len))
    env.define("ប្រភេទ", BuiltinFunction("ប្រភេទ", builtin_type))
    env.define("type", BuiltinFunction("type", builtin_type))
    env.define("បន្ថែម", BuiltinFunction("បន្ថែម", builtin_append))
    env.define("append", BuiltinFunction("append", builtin_append))

    return env


def format_khmer_value(val: Any) -> str:
    if val is None:
        return "ទទេ"
    if isinstance(val, bool):
        return "ពិត" if val else "មិនពិត"
    if isinstance(val, float):
        num_str = str(int(val)) if val.is_integer() else str(val)
        return to_khmer_digits(num_str)
    if isinstance(val, int):
        return to_khmer_digits(str(val))
    if isinstance(val, list):
        items = ", ".join(format_khmer_value(item) for item in val)
        return f"[{items}]"
    if isinstance(val, dict):
        pairs = ", ".join(f'"{k}": {format_khmer_value(v)}' for k, v in val.items())
        return f"{{{pairs}}}"
    from khmer_lang.interpreter import KhmerInstance, KhmerClass
    if isinstance(val, KhmerInstance):
        return f"<វត្ថុនៃថ្នាក់ {val.khmer_class.name}>"
    if isinstance(val, KhmerClass):
        return f"<ថ្នាក់ {val.name}>"
    return str(val)
