## 2024-05-14 - Replace split and array allocation with string scan in hot paths
**Learning:** Using regex `.split()` on strings creates a new array in memory, which is an expensive operation (~25x slower). In frequent operations or hot paths, this can degrade performance significantly.
**Action:** Prefer scanning strings directly (e.g. iterating backward) to extract trailing data or check conditions over creating arrays with `split()`.
