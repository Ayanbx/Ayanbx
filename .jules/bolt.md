## 2024-05-31 - Calculator Expression Parsing Optimization
**Learning:** In simple vanilla JS apps doing string-based expression parsing (like calculators), repeated array allocations `["+", "-"].includes()` and regex array splitting `.split(/[+\-*/]/)` on every keystroke create measurable micro-overhead.
**Action:** Replace small array `.includes` with string `.includes` (`"+-*/".includes`), and use zero-allocation backward lookups (`lastIndexOf` and `Math.max`) instead of splitting arrays when searching for character bounds.
