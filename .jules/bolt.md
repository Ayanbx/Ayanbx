## 2024-05-24 - Avoid Array Allocation in Hot Event Handlers
**Learning:** In string-heavy parsing like calculator expressions, using `.split()` with regex during frequent events (like key presses) creates unnecessary array allocations and garbage collection overhead.
**Action:** Replace `.split()` array allocations in hot paths with backward string scanning logic (e.g. `while` loops from the end of the string) when checking trailing character segments.
