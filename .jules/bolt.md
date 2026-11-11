## 2026-11-11 - Avoid array allocation in hot paths
**Learning:** Using regex string splitting for decimal validation creates unnecessary array allocations on every keystroke, which is ~8x slower than string scanning.
**Action:** Use backward scanning with a for loop and bracket notation for validating trailing segments instead of splitting the entire string into arrays.
