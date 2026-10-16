## 2026-10-16 - Optimization pattern: Avoid array allocation with `.split` inside hot path
**Learning:** Checking properties of the current segment of a string sequence using `expression.split().at(-1)` is convenient, but allocating an entire array of string segments inside a highly-called operation (like a keystroke handler or validation logic) is memory-inefficient and impacts performance.
**Action:** Replace `.split()` with an equivalent optimized string scan (such as a backwards loop starting from the end of the string) when parsing a simple mathematical expression to find bounds.
