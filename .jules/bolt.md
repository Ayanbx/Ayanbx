## 2024-05-22 - [Regex vs Manual Loops in JS]
**Learning:** Using regex like `split(/[+\-*/]/)` inside frequent keystroke handlers creates unnecessary array allocations and is much slower than a manual backward string loop, especially on strings that grow over time.
**Action:** When parsing strings backwards (like looking for the last typed word or number before a delimiter), prefer a simple backwards `for` loop over `.split()` and `.at(-1)`.
