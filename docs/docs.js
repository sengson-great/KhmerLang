/**
 * KhmerLang (ភាសាខ្មែរ) Documentation Website Interactive Scripts
 * Handles runner hooks, playground, theme switching, search modal, and scrollspy.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // 1. Theme Management (Dark / Light)
    // ===================================================================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIconMoon = document.getElementById('theme-icon-moon');
    const themeIconSun = document.getElementById('theme-icon-sun');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('khmerlang-doc-theme', theme);
        if (theme === 'light') {
            themeIconMoon.style.display = 'none';
            themeIconSun.style.display = 'block';
        } else {
            themeIconMoon.style.display = 'block';
            themeIconSun.style.display = 'none';
        }
    }

    const savedTheme = localStorage.getItem('khmerlang-doc-theme') || 'dark';
    applyTheme(savedTheme);

    themeToggleBtn?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // ===================================================================
    // 2. Mobile Drawer Navigation
    // ===================================================================
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const docsSidebar = document.getElementById('docs-sidebar');

    mobileToggleBtn?.addEventListener('click', () => {
        docsSidebar.classList.toggle('mobile-open');
    });

    // Close mobile menu when clicking outside or clicking any nav link
    document.addEventListener('click', (e) => {
        if (!docsSidebar.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
            docsSidebar.classList.remove('mobile-open');
        }
    });

    docsSidebar?.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                docsSidebar.classList.remove('mobile-open');
            }
        });
    });

    // ===================================================================
    // 3. Code Snippet Copy Buttons
    // ===================================================================
    document.querySelectorAll('.btn-copy-code').forEach(button => {
        button.addEventListener('click', async () => {
            let codeText = button.getAttribute('data-code');
            if (!codeText) {
                const card = button.closest('.code-card');
                const codeBlock = card ? card.querySelector('.code-block code') : null;
                codeText = codeBlock ? codeBlock.textContent : '';
            }
            if (!codeText) return;

            try {
                await navigator.clipboard.writeText(codeText);
                const originalText = button.textContent;
                button.textContent = '✓ បានចម្លង!';
                button.style.borderColor = '#34d399';
                button.style.color = '#34d399';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.borderColor = '';
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        });
    });

    // ===================================================================
    // 4. In-Doc Snippet Run Buttons (Instant Execution via Engine)
    // ===================================================================
    document.querySelectorAll('.btn-code-run').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.code-card');
            if (!card) return;

            const codeElement = card.querySelector('.snippet-source');
            if (!codeElement) return;

            const drawer = card.querySelector('.code-output-drawer');
            const outputBody = card.querySelector('.code-output-body');
            const outputTime = card.querySelector('.code-output-time');
            if (!drawer || !outputBody) return;

            const sourceCode = codeElement.textContent;

            button.disabled = true;
            button.textContent = '⏳ កំពុងដំណើរការ...';

            setTimeout(() => {
                const result = window.runKhmerCode ? window.runKhmerCode(sourceCode) : {
                    status: 'error',
                    stdout: '',
                    error: 'KhmerLang engine not loaded.',
                    duration: 0
                };

                drawer.classList.add('visible');
                if (outputTime) outputTime.textContent = `${result.duration}ms`;

                if (result.status === 'success') {
                    outputBody.classList.remove('has-error');
                    outputBody.textContent = result.stdout || '(គ្មានលទ្ធផលបង្ហាញទេ — No output)';
                } else {
                    outputBody.classList.add('has-error');
                    outputBody.textContent = (result.stdout ? result.stdout + '\n' : '') + result.error;
                }

                button.disabled = false;
                button.textContent = '▷ រ៉ាន់កូដ';
            }, 10);
        });
    });

    // ===================================================================
    // 5. Interactive Live Playground
    // ===================================================================
    const PLAYGROUND_SAMPLES = {
        hello: `# កម្មវិធីសួស្តីពិភពលោក (Hello World)
បង្ហាញ("ជម្រាបសួរពិភពលោក!")
បង្ហាញ("សូមស្វាគមន៍មកកាន់ភាសាខ្មែរ (KhmerLang) v1.0")

តាំង អ្នកអភិវឌ្ឍន៍ = "សហគមន៍កម្ពុជា"
បង្ហាញ("បង្កើតឡើងដោយ:", អ្នកអភិវឌ្ឍន៍)
`,
        math: `# គណនាផលបូក និងប្រមាណវិធីលេខខ្មែរ
តាំង ក = ២៥
តាំង ខ = ១០

បង្ហាញ("ក =", ក)
បង្ហាញ("ខ =", ខ)
បង្ហាញ("ផលបូក ក + ខ =", ក + ខ)
បង្ហាញ("ផលដក ក - ខ =", ក - ខ)
បង្ហាញ("ផលគុណ ក * ខ =", ក * ខ)
បង្ហាញ("ផលចែក ក / ខ =", ក / ខ)
បង្ហាញ("សំណល់ ក % ខ =", ក % ខ)
`,
        fibo: `# កូដរកលេខ Fibonacci ដោយប្រើ Recursion
អនុគមន៍ ហ្វីបូណាឈី(n) {
    បើ (n <= ០) {
        ត្រឡប់ ០
    }
    បើ (n == ១) {
        ត្រឡប់ ១
    }
    ត្រឡប់ ហ្វីបូណាឈី(n - ១) + ហ្វីបូណាឈី(n - ២)
}

បង្ហាញ("--- តារាង Fibonacci ពី ០ ដល់ ៨ ---")
សម្រាប់ (តាំង i = ០; i <= ៨; i = i + ១) {
    បង្ហាញ("Fibonacci(", i, ") =", ហ្វីបូណាឈី(i))
}
`,
        oop: `# កូដ Object-Oriented Programming (OOP)
ថ្នាក់ សត្វ {
    បង្កើត(ឈ្មោះ) {
        នេះ.ឈ្មោះ = ឈ្មោះ
    }

    វិធី ធ្វើសំឡេង() {
        បង្ហាញ(នេះ.ឈ្មោះ, "កំពុងធ្វើសំឡេង...")
    }
}

ថ្នាក់ ឆ្កែ បន្តពី សត្វ {
    វិធី ព្រុស() {
        បង្ហាញ(នេះ.ឈ្មោះ, "ព្រុស: វូស! វូស!")
    }
}

តាំង គូគី = ថ្មី ឆ្កែ("គូគី")
គូគី.ធ្វើសំឡេង()
គូគី.ព្រុស()
`,
        grades: `# កម្មវិធីគណនាពិន្ទុ និងនិទ្ទេសសិស្ស
តាំង ពិន្ទុ = ៨៦

បង្ហាញ("ពិន្ទុសិស្សទទួលបាន:", ពិន្ទុ)

បើ (ពិន្ទុ >= ៩០) {
    បង្ហាញ("និទ្ទេស: A (ល្អប្រសើរ)")
} ឬបើ (ពិន្ទុ >= ៨០) {
    បង្ហាញ("និទ្ទេស: B (ល្អណាស់)")
} ឬបើ (ពិន្ទុ >= ៧០) {
    បង្ហាញ("និទ្ទេស: C (ល្អ)")
} ឬបើ (ពិន្ទុ >= ៦០) {
    បង្ហាញ("និទ្ទេស: D (មធ្យម)")
} ឬបើ (ពិន្ទុ >= ៥០) {
    បង្ហាញ("និទ្ទេស: E (ខ្សោយ)")
} ផ្សេងទៀត {
    បង្ហាញ("និទ្ទេស: F (ធ្លាក់)")
}
`
    };

    const playgroundEditor = document.getElementById('playground-editor');
    const playgroundOutput = document.getElementById('playground-output');
    const playgroundExecTime = document.getElementById('playground-exec-time');
    const sampleSelect = document.getElementById('playground-sample-select');
    const btnPlaygroundRun = document.getElementById('btn-playground-run');
    const btnPlaygroundClear = document.getElementById('btn-playground-clear');

    if (playgroundEditor && sampleSelect) {
        // Load initial sample
        playgroundEditor.value = PLAYGROUND_SAMPLES.hello;

        sampleSelect.addEventListener('change', () => {
            const selected = sampleSelect.value;
            if (PLAYGROUND_SAMPLES[selected]) {
                playgroundEditor.value = PLAYGROUND_SAMPLES[selected];
                playgroundOutput.style.color = 'var(--console-text)';
                playgroundOutput.textContent = 'បានប្តូរកូដគំរូ។ សូមចុច "▷ ដំណើការកូដ" ដើម្បីរ៉ាន់...';
                playgroundExecTime.textContent = 'រួចរាល់';
            }
        });
    }

    function runPlayground() {
        if (!playgroundEditor || !playgroundOutput) return;
        const code = playgroundEditor.value;

        btnPlaygroundRun.disabled = true;
        btnPlaygroundRun.innerHTML = '<span>⏳ កំពុងដំណើរការ...</span>';

        setTimeout(() => {
            const result = window.runKhmerCode ? window.runKhmerCode(code) : {
                status: 'error',
                stdout: '',
                error: 'KhmerLang engine not initialized.',
                duration: 0
            };

            playgroundExecTime.textContent = `${result.duration}ms`;

            if (result.status === 'success') {
                playgroundOutput.style.color = 'var(--console-text)';
                playgroundOutput.textContent = result.stdout || '(គ្មានលទ្ធផលបង្ហាញទេ — No output)';
            } else {
                playgroundOutput.style.color = 'var(--console-error)';
                playgroundOutput.textContent = (result.stdout ? result.stdout + '\n' : '') + result.error;
            }

            btnPlaygroundRun.disabled = false;
            btnPlaygroundRun.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>▷ ដំណើការកូដ (Run)</span>';
        }, 15);
    }

    btnPlaygroundRun?.addEventListener('click', runPlayground);

    btnPlaygroundClear?.addEventListener('click', () => {
        if (playgroundOutput) {
            playgroundOutput.textContent = 'បានលុបលទ្ធផលរួចរាល់។';
            playgroundExecTime.textContent = '០ms';
        }
    });

    // Virtual Khmer Keyboard Keypad in Playground
    document.querySelectorAll('.vk-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!playgroundEditor) return;
            const insertText = btn.getAttribute('data-insert');
            if (!insertText) return;

            const start = playgroundEditor.selectionStart;
            const end = playgroundEditor.selectionEnd;
            const text = playgroundEditor.value;

            playgroundEditor.value = text.substring(0, start) + insertText + text.substring(end);
            playgroundEditor.focus();
            playgroundEditor.selectionStart = playgroundEditor.selectionEnd = start + insertText.length;
        });
    });

    // Allow Ctrl+Enter or Cmd+Enter to run playground
    playgroundEditor?.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runPlayground();
        }
    });

    // ===================================================================
    // 6. Search Modal (Cmd+K / Ctrl+K)
    // ===================================================================
    const searchModal = document.getElementById('search-modal-backdrop');
    const searchTriggerBtn = document.getElementById('search-trigger-btn');
    const searchInput = document.getElementById('search-modal-input');
    const searchResultsList = document.getElementById('search-results-list');

    const SEARCH_INDEX = [
        { title: 'សេចក្តីផ្តើម (Introduction)', desc: 'ទស្សនវិស័យ និងលក្ខណៈទូទៅនៃភាសាខ្មែរ', target: '#intro' },
        { title: 'ការដំឡើង & ការចាប់ផ្តើម (Installation)', desc: 'ការដំឡើង CLI Tool, ការបង្កើតឯកសារ .khmer, REPL, និង IDE', target: '#install' },
        { title: 'កម្មវិធីដំបូង (Hello World)', desc: 'កូដសួស្តីពិភពលោក និងការប្រើប្រាស់ពាក្យ បង្ហាញ(...)', target: '#hello-world' },
        { title: 'អថេរ & ប្រភេទតម្លៃ (Variables)', desc: 'ការប្រកាសអថេរដោយពាក្យគន្លឹះ តាំង, Strings, Booleans, Null', target: '#variables' },
        { title: 'លេខខ្មែរ & ប្រមាណវិធី (Math)', desc: 'លេខ ០-៩, បូក ដក គុណ ចែក, Modulo, ប្រៀបធៀប', target: '#numerals' },
        { title: 'សញ្ញាវណ្ណយុត្តិ (Punctuations)', desc: 'ការប្រើប្រាស់សញ្ញាខណ្ឌ (។), បរិយោសាន (៕), និង Semicolon', target: '#punctuations' },
        { title: 'លក្ខខណ្ឌ បើ / ឬបើ / ផ្សេងទៀត', desc: 'ការសម្រេចចិត្តក្នុងកូដ Conditionals (if, else if, else)', target: '#conditionals' },
        { title: 'រង្វិលជុំ ខណៈ (While Loops)', desc: 'ការដំណើរការកូដដដែលៗតាមលក្ខខណ្ឌ', target: '#while-loop' },
        { title: 'រង្វិលជុំ សម្រាប់ (For Loops)', desc: 'ការរាប់ចំនួនជុំកំណត់ច្បាស់លាស់ (For Loop)', target: '#for-loop' },
        { title: 'ការបង្កើតអនុគមន៍ (Functions)', desc: 'ពាក្យគន្លឹះ អនុគមន៍ និង ត្រឡប់ (return)', target: '#functions' },
        { title: 'Recursion (កូដ Fibonacci)', desc: 'អនុគមន៍ហៅខ្លួនឯង និងការគណនាក្បួនដោះស្រាយ', target: '#recursion' },
        { title: 'ថ្នាក់ & Constructor (OOP)', desc: 'ការប្រកាស ថ្នាក់, បង្កើត(), នេះ (this), និង ថ្មី (new)', target: '#classes' },
        { title: 'ការបន្តវេនថ្នាក់ (Inheritance)', desc: 'ការបន្តពូជដោយពាក្យគន្លឹះ បន្តពី (extends)', target: '#inheritance' },
        { title: 'អនុគមន៍ស្ដង់ដារ (Builtins)', desc: 'បង្ហាញ(), ប្រវែង(), ប្រភេទ(), បន្ថែម()', target: '#builtins' },
        { title: 'ឧបករណ៍អភិវឌ្ឍន៍ (Tools & IDEs)', desc: 'Flutter IDE, Web Playground, CLI REPL', target: '#ides' },
        { title: 'តារាងពាក្យគន្លឹះ (Cheat Sheet)', desc: 'តារាងសង្ខេបពាក្យគន្លឹះ និងវេយ្យាករណ៍ទាំងអស់', target: '#cheat-sheet' },
        { title: '🎮 ស្ថានីយសាកល្បងកូដ (Playground)', desc: 'សរសេរ និងរ៉ាន់កូដផ្ទាល់លើ Web Browser', target: '#playground' }
    ];

    function openSearchModal() {
        if (!searchModal) return;
        searchModal.classList.add('open');
        renderSearchResults('');
        setTimeout(() => {
            searchInput?.focus();
            searchInput?.select();
        }, 50);
    }

    function closeSearchModal() {
        if (!searchModal) return;
        searchModal.classList.remove('open');
        if (searchInput) searchInput.value = '';
    }

    function renderSearchResults(query) {
        if (!searchResultsList) return;
        const q = query.trim().toLowerCase();
        const filtered = SEARCH_INDEX.filter(item => {
            return !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
        });

        if (filtered.length === 0) {
            searchResultsList.innerHTML = `<li style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.875rem;">រកមិនឃើញលទ្ធផលសម្រាប់ "${query}" ឡើយ</li>`;
            return;
        }

        searchResultsList.innerHTML = filtered.map((item, index) => `
            <li class="search-result-item ${index === 0 ? 'selected' : ''}" data-target="${item.target}">
                <div class="search-result-title">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span>${item.title}</span>
                </div>
                <div class="search-result-desc">${item.desc}</div>
            </li>
        `).join('');

        searchResultsList.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const target = el.getAttribute('data-target');
                closeSearchModal();
                if (target) {
                    const elTarget = document.querySelector(target);
                    elTarget?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    searchTriggerBtn?.addEventListener('click', openSearchModal);

    searchModal?.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearchModal();
    });

    searchInput?.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
    });

    // Keyboard navigation (Cmd+K / Ctrl+K, Escape, Arrows, Enter)
    window.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (searchModal.classList.contains('open')) {
                closeSearchModal();
            } else {
                openSearchModal();
            }
        } else if (e.key === 'Escape' && searchModal.classList.contains('open')) {
            closeSearchModal();
        } else if (searchModal.classList.contains('open')) {
            const items = Array.from(searchResultsList.querySelectorAll('.search-result-item'));
            if (!items.length) return;
            let currentIndex = items.findIndex(item => item.classList.contains('selected'));

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                items[currentIndex]?.classList.remove('selected');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex]?.classList.add('selected');
                items[currentIndex]?.scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                items[currentIndex]?.classList.remove('selected');
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                items[currentIndex]?.classList.add('selected');
                items[currentIndex]?.scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (currentIndex >= 0 && items[currentIndex]) {
                    items[currentIndex].click();
                }
            }
        }
    });

    // ===================================================================
    // 7. Scrollspy & Table of Contents Active Link Highlighter
    // ===================================================================
    const sections = Array.from(document.querySelectorAll('.doc-section'));
    const sidebarLinks = Array.from(document.querySelectorAll('.sidebar-nav-link'));
    const tocLinks = Array.from(document.querySelectorAll('.toc-link'));

    function onScrollSpy() {
        const scrollY = window.scrollY + 120;
        let currentSectionId = '';

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.offsetTop <= scrollY) {
                currentSectionId = section.getAttribute('id');
                break;
            }
        }

        if (!currentSectionId && sections.length > 0) {
            currentSectionId = sections[0].getAttribute('id');
        }

        // Update sidebar links
        sidebarLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update TOC links
        tocLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', onScrollSpy, { passive: true });
    onScrollSpy();

});
