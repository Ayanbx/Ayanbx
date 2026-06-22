## 2024-06-22 - Optimize decimal check
**Learning:** Found a performance bottleneck in the calculator logic where `expression.split(/[+\-*/]/).at(-1)` caused regex evaluation and array/string allocation on every decimal key press. Replaced it with a backward loop lookup which was significantly faster and memory efficient.
**Action:** Always consider using native string loops for simple character checking instead of regex and `split` operations when building UI interactions that happen frequently.
