const SAMPLE_CODES = {
    hello: `# ឧទាហរណ៍ 1: ជម្រាបសួរ (Hello World)

តាំង សារ = "ជម្រាបសួរ ពិភពលោក!"
បង្ហាញ(សារ)

តាំង ឈ្មោះ = "វ៉េងឈួង"
តាំង អាយុ = ២១

បង្ហាញ("ខ្ញុំឈ្មោះ:", ឈ្មោះ)
បង្ហាញ("អាយុរបស់ខ្ញុំគឺ:", អាយុ, "ឆ្នាំ")
`,
    numerals: `# ឧទាហរណ៍ 2: លេខខ្មែរ (Khmer Numerals)

តាំង ក = ១០
តាំង ខ = ២៥.៥
តាំង ផលបូក = ក + ខ

បង្ហាញ("ក =", ក)
បង្ហាញ("ខ =", ខ)
បង្ហាញ("ផលបូក ក + ខ =", ផលបូក)

តាំង គុណ = ក * ៣
បង្ហាញ("ក * ៣ =", គុណ)
`,
    control: `# ឧទាហរណ៍ 3: លក្ខខណ្ឌ និងរង្វិលជុំ (Control Flow)

តាំង ពិន្ទុ = ៨៥

បើ (ពិន្ទុ >= ៩០) {
    បង្ហាញ("និទ្ទេស A - ល្អប្រសើរណាស់!")
} ឬបើ (ពិន្ទុ >= ៨០) {
    បង្ហាញ("និទ្ទេស B - ល្អណាស់!")
} ឬបើ (ពិន្ទុ >= ៧០) {
    បង្ហាញ("និទ្ទេស C - ល្អ")
} ផ្សេងទៀត {
    បង្ហាញ("ត្រូវខិតខំប្រឹងប្រែងបន្ថែមទៀត")
}

បង្ហាញ("--- រង្វិលជុំ ខណៈ (While Loop) ---")
តាំង រាប់ = ១
ខណៈ (រាប់ <= ៥) {
    បង្ហាញ("លេខរាប់:", រាប់)
    រាប់ = រាប់ + ១
}
`,
    functions: `# ឧទាហរណ៍ 4: អនុគមន៍ និង Fibonacci (Functions)

អនុគមន៍ បូក(a, b) {
    ត្រឡប់ a + b
}

តាំង លទ្ធផល = បូក(១៥, ៣៥)
បង្ហាញ("១៥ + ៣៥ =", លទ្ធផល)

អនុគមន៍ ហ្វីបូណាស៊ី(n) {
    បើ (n <= ១) {
        ត្រឡប់ n
    }
    ត្រឡប់ ហ្វីបូណាស៊ី(n - ១) + ហ្វីបូណាស៊ី(n - ២)
}

បង្ហាញ("--- ស៊េរី ហ្វីបូណាស៊ី ---")
សម្រាប់ (តាំង i = ០; i <= ៧; i = i + ១) {
    បង្ហាញ("Fibonacci(" + i + ") =", ហ្វីបូណាស៊ី(i))
}
`,
    calculator: `# ឧទាហរណ៍ 5: កម្មវិធីគណនាអាយុ (Age Calculator)

អនុគមន៍ គណនាអាយុ(ឆ្នាំកើត, ឆ្នាំបច្ចុប្បន្ន) {
    ត្រឡប់ ឆ្នាំបច្ចុប្បន្ន - ឆ្នាំកើត
}

តាំង ឆ្នាំកើត = ១៩៩៨
តាំង ឆ្នាំនេះ = ២០២៦
តាំង អាយុ = គណនាអាយុ(ឆ្នាំកើត, ឆ្នាំនេះ)

បង្ហាញ("ឆ្នាំកើត:", ឆ្នាំកើត)
បង្ហាញ("ឆ្នាំបច្ចុប្បន្ន:", ឆ្នាំនេះ)
បង្ហាញ("អាយុរបស់អ្នកគឺ:", អាយុ, "ឆ្នាំ")
`,
    oop: `# ឧទាហរណ៍ 6: OOP និង ថ្នាក់/Class (Object-Oriented Programming)

ថ្នាក់ មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
    }

    វិធី ណែនាំខ្លួន() {
        បង្ហាញ("ជម្រាបសួរ! ខ្ញុំឈ្មោះ", នេះ.ឈ្មោះ, "អាយុ", នេះ.អាយុ, "ឆ្នាំ")
    }

    វិធី ខួបកំណើត() {
        នេះ.អាយុ = នេះ.អាយុ + ១
        បង្ហាញ(នេះ.ឈ្មោះ, "អាយុឡើងដល់:", នេះ.អាយុ, "ឆ្នាំ")
    }
}

# ថ្នាក់ សិស្ស បន្តពី មនុស្ស (Inheritance)
ថ្នាក់ សិស្ស បន្តពី មនុស្ស {
    បង្កើត(ឈ្មោះ, អាយុ, សាលា) {
        នេះ.ឈ្មោះ = ឈ្មោះ
        នេះ.អាយុ = អាយុ
        នេះ.សាលា = សាលា
    }

    វិធី បង្ហាញព័ត៌មានសិស្ស() {
        បង្ហាញ("សិស្សឈ្មោះ:", នេះ.ឈ្មោះ, "រៀននៅ:", នេះ.សាលា)
    }
}

បង្ហាញ("--- ការបង្កើត Object មនុស្ស ---")
តាំង មនុស្ស១ = ថ្មី មនុស្ស("វ៉េងឈួង", ២១)
មនុស្ស១.ណែនាំខ្លួន()
មនុស្ស១.ខួបកំណើត()

បង្ហាញ("--- ការបង្កើត Object សិស្ស (Inheritance) ---")
តាំង សិស្ស១ = ថ្មី សិស្ស("ដារ៉ា", ១៨, "វិទ្យាល័យសិស្សពូកែ")
សិស្ស១.ណែនាំខ្លួន()
សិស្ស១.បង្ហាញព័ត៌មានសិស្ស()
`
};

document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('codeEditor');
    const highlighting = document.getElementById('highlightingContent');
    const lineNumbers = document.getElementById('lineNumbers');
    const lineColInfo = document.getElementById('lineColInfo');
    const runBtn = document.getElementById('runBtn');
    const clearBtn = document.getElementById('clearBtn');
    const exampleSelect = document.getElementById('exampleSelect');
    const terminalOutput = document.getElementById('terminalOutput');
    const statusIndicator = document.getElementById('statusIndicator');
    const docsHeader = document.getElementById('docsHeader');
    const docsBody = document.getElementById('docsBody');
    const docsArrow = document.getElementById('docsArrow');

    // Load initial sample
    editor.value = SAMPLE_CODES.hello;
    updateEditor();

    // Editor sync & line numbers
    editor.addEventListener('input', updateEditor);
    editor.addEventListener('scroll', syncScroll);
    editor.addEventListener('click', updateCursorPos);
    editor.addEventListener('keyup', updateCursorPos);

    // Tab key handling for indentation in code editor
    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            if (e.shiftKey) {
                // Shift + Tab: Outdent (Remove up to 4 spaces or tab)
                const textBefore = editor.value.substring(0, start);
                const textAfter = editor.value.substring(end);
                if (textBefore.endsWith('    ')) {
                    editor.value = textBefore.substring(0, textBefore.length - 4) + textAfter;
                    editor.selectionStart = editor.selectionEnd = start - 4;
                } else if (textBefore.endsWith('\t')) {
                    editor.value = textBefore.substring(0, textBefore.length - 1) + textAfter;
                    editor.selectionStart = editor.selectionEnd = start - 1;
                }
            } else {
                // Tab: Indent (Insert 4 spaces)
                const indent = '    ';
                editor.value = editor.value.substring(0, start) + indent + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + indent.length;
            }

            updateEditor();
            updateCursorPos();
        }
    });

    function updateEditor() {
        const text = editor.value;
        
        // Line numbers
        const lines = text.split('\n').length;
        lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');

        // Syntax Highlighting with Khmer CSS classes (មតិពន្យល់, ពាក្យគន្លឹះ, អក្សរ, លេខ)
        highlighting.innerHTML = highlightKhmerCode(escapeHTML(text)) + '\n';
        syncScroll();
    }

    function syncScroll() {
        const pre = document.getElementById('highlighting');
        pre.scrollTop = editor.scrollTop;
        pre.scrollLeft = editor.scrollLeft;
        lineNumbers.scrollTop = editor.scrollTop;
    }

    function updateCursorPos() {
        const text = editor.value.substring(0, editor.selectionStart);
        const lines = text.split('\n');
        const line = lines.length;
        const col = lines[lines.length - 1].length + 1;
        lineColInfo.textContent = `បន្ទាត់ ${line}, ជួរ ${col}`;
    }

    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function highlightKhmerCode(code) {
        const keywords = [
            'តាំង', 'បង្ហាញ', 'បើ', 'ឬបើ', 'ផ្សេងទៀត', 'ខណៈ', 'សម្រាប់',
            'អនុគមន៍', 'ត្រឡប់', 'ថ្នាក់', 'វិធី', 'បង្កើត', 'នេះ', 'ខ្លួនវា',
            'ថ្មី', 'បន្តពី', 'ពិត', 'មិនពិត', 'ទទេ', 'និង', 'ឬ', 'មិន'
        ];
        const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');

        return code
            // មតិពន្យល់ (Comments)
            .replace(/(#.*|\/\/.*)/g, '<span class="មតិពន្យល់">$1</span>')
            // អក្សរ (Strings)
            .replace(/(".*?"|'.*?')/g, '<span class="អក្សរ">$1</span>')
            // លេខ (Khmer & ASCII Numbers)
            .replace(/([០-៩0-9]+(?:\.[០-៩0-9]+)?)/g, '<span class="លេខ">$1</span>')
            // ពាក្យគន្លឹះ (Keywords)
            .replace(kwRegex, '<span class="ពាក្យគន្លឹះ">$1</span>');
    }

    // Quick Insert Keyword Buttons
    const kwButtons = document.querySelectorAll('.kw-btn');
    kwButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const textToInsert = btn.getAttribute('data-insert');
            insertTextAtCursor(textToInsert);
        });
    });

    function insertTextAtCursor(text) {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const currentText = editor.value;

        // Raw text insertion into textarea
        const rawInsert = text.replace(/\\n/g, '\n');

        editor.value = currentText.substring(0, start) + rawInsert + currentText.substring(end);
        
        // Move cursor right after inserted text
        const newCursorPos = start + rawInsert.length;
        editor.selectionStart = newCursorPos;
        editor.selectionEnd = newCursorPos;

        editor.focus();
        updateEditor();
        updateCursorPos();
    }

    // Load example
    exampleSelect.addEventListener('change', (e) => {
        const key = e.target.value;
        if (SAMPLE_CODES[key]) {
            editor.value = SAMPLE_CODES[key];
            updateEditor();
        }
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
        editor.value = '';
        updateEditor();
        terminalOutput.innerHTML = '<div class="terminal-welcome">លុបសម្អាតរួចរាល់។ សរសេរកូដថ្មីរួចចុច **"រ៉ាន់កូដ"**...</div>';
    });

    // Toggle docs
    let docsOpen = true;
    docsHeader.addEventListener('click', () => {
        docsOpen = !docsOpen;
        docsBody.style.display = docsOpen ? 'block' : 'none';
        docsArrow.textContent = docsOpen ? '▼' : '▲';
    });

    // Keyboard shortcut (Ctrl/Cmd + Enter)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
    });

    runBtn.addEventListener('click', runCode);

    async function runCode() {
        const code = editor.value;
        if (!code.trim()) {
            terminalOutput.innerHTML = '<div class="output-error">❌ សូមបញ្ចូលកូដមុននឹងរ៉ាន់ / Please write code before running!</div>';
            return;
        }

        statusIndicator.className = 'status-running';
        statusIndicator.textContent = 'សភាព: កំពុងរ៉ាន់...';
        terminalOutput.innerHTML = '<div class="terminal-welcome">⏳ កំពុងដំណើការកូដ...</div>';

        try {
            const response = await fetch('/api/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: code })
            });

            const data = await response.json();

            if (data.status === 'success') {
                statusIndicator.className = 'status-ready';
                statusIndicator.textContent = 'សភាព: ជោគជ័យ (0s)';
                
                let outStr = data.stdout ? escapeHTML(data.stdout) : '(គ្មានលទ្ធផលបង្ហាញទេ / No output returned)';
                terminalOutput.innerHTML = `<div class="output-success">${outStr}</div>`;
            } else {
                statusIndicator.className = 'status-error';
                statusIndicator.textContent = 'សភាព: មានកំហុស';
                terminalOutput.innerHTML = `<div class="output-error">❌ ${escapeHTML(data.error)}\n\n${escapeHTML(data.stdout || '')}</div>`;
            }
        } catch (err) {
            statusIndicator.className = 'status-error';
            statusIndicator.textContent = 'សភាព: កំហុសម៉ាស៊ីនបម្រើ';
            terminalOutput.innerHTML = `<div class="output-error">❌ មិនអាចភ្ជាប់ទៅកាន់ Server បានទេ / Cannot connect to server: ${escapeHTML(err.message)}</div>`;
        }
    }
});
