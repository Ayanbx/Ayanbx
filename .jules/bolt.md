## 2026-10-15 - Avoid array allocations in hot validation paths
**Learning:** Using string manipulation methods that allocate arrays (like splitting strings with regex) inside frequently called validation functions creates unnecessary overhead. In this calculator, validating a decimal point via string splitting was noticeably slower than a simple backward scan.
**Action:** Prefer scanning strings backwards for local validation to avoid the memory allocation overhead of array-returning string methods.
