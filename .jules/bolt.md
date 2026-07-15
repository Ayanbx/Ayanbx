## 2025-02-20 - String Splitting vs Backward Scanning
**Learning:** Checking for decimals using `string.split(/[+\-*/]/).at(-1).includes('.')` on every keypress causes a significant performance bottleneck due to continuous O(N) array allocation. On large string expressions, it slows down parsing linearly.
**Action:** Replace string parsing with O(1) space backward-scanning loops for validating constraints (like preventing multiple decimals per number). A simple reverse loop to check the last numerical block is about 25x faster and produces no garbage collection overhead.
