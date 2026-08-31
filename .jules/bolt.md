## 2024-05-24 - String scanning vs array allocation
**Learning:** Using `String.prototype.split()` with a regular expression creates an array allocation on every call. In frequent operations (like validating input in a hot path), this can cause a significant performance penalty (~25x slower).
**Action:** Prefer reverse string scanning (backward loops) for validating trailing segments to avoid unnecessary array allocations and improve execution speed.
