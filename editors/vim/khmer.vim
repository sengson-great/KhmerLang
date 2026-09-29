" Vim syntax file for KhmerLang (ភាសាខ្មែរ)
" Language: KhmerLang
" Filenames: *.khmer, *.km

if exists("b:current_syntax")
  finish
endif

syn keyword khmerKeyword តាំង អនុគមន៍ ថ្នាក់ វិធី បង្កើត ថ្មី បន្តពី
syn keyword khmerConditional បើ ឬបើ ផ្សេងទៀត
syn keyword khmerRepeat ខណៈ សម្រាប់
syn keyword khmerStatement ត្រឡប់
syn keyword khmerBoolean ពិត មិនពិត
syn keyword khmerNull ទទេ
syn keyword khmerOperator និង ឬ មិន
syn keyword khmerThis នេះ ខ្លួនវា
syn keyword khmerBuiltin បង្ហាញ ប្រវែង ប្រភេទ បន្ថែម

syn match khmerNumber "\v[0-9]+(\.[0-9]+)?"
syn match khmerKhmerNumber "\v[០-៩]+(\.[០-៩]+)?"

syn region khmerString start=+"+ skip=+\\\"+ end=+"+
syn region khmerString start=+'+ skip=+\\\'+ end=+'+

syn match khmerComment "#.*$"
syn match khmerComment "//.*$"
syn region khmerComment start="/\*" end="\*/"

syn match khmerPunctuation "[។៕៖;]"
syn match khmerFunction "\v([\u1780-\u17FFa-zA-Z_][\u1780-\u17FFa-zA-Z0-9_]*)\s*\("he=e-1

hi def link khmerKeyword Keyword
hi def link khmerConditional Conditional
hi def link khmerRepeat Repeat
hi def link khmerStatement Statement
hi def link khmerBoolean Boolean
hi def link khmerNull Constant
hi def link khmerOperator Operator
hi def link khmerThis Special
hi def link khmerBuiltin Function
hi def link khmerNumber Number
hi def link khmerKhmerNumber Number
hi def link khmerString String
hi def link khmerComment Comment
hi def link khmerPunctuation Delimiter
hi def link khmerFunction Function

let b:current_syntax = "khmer"
