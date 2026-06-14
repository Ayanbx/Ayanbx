## 2026-06-14 - Optimize decimal validation string split
**Learning:** Using `String.prototype.split` with Regex to find the last token in a string allocates an array and executes a regex engine, which is slow for repeated keystrokes. Backward iteration is 5-40x faster and avoids allocations.
**Action:** Avoid `split` with Regex for simple last-token lookups. Use a backward `for` loop stopping at target delimiters instead.
