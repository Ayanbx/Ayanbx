## 2024-05-24 - Avoid array allocations in string segments
**Learning:** Using `.split()` with regex on every input creates unnecessary array allocations and is significantly slower than string scanning for validating trailing segments in JavaScript.
**Action:** Use backward loops to scan strings instead of splitting them for validating suffix conditions.
