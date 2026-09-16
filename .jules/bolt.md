## 2024-05-24 - Avoid array allocations in hot paths
**Learning:** Using regex and `.split()` on strings creates unnecessary array allocations and is significantly slower (~30x in benchmarks) compared to simple backward string scanning.
**Action:** Prefer reverse loops over regex `.split()` when validating or finding the last segment of a string.
