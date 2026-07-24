## 2024-05-24 - Optimize decimal check to avoid array allocations
**Learning:** Frequent small string allocations from `.split()` combined with array destructuring (`.at(-1)`) in a tight event loop (keypress/clicks) causes unnecessary overhead. A simple string scan is significantly faster and uses less memory.
**Action:** When validating a trailing part of a string for a simple condition (like checking for decimals), prefer scanning backwards manually rather than creating temporary arrays via `split()`.
