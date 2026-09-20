## 2024-05-18 - Avoid array allocation in hot string processing paths
**Learning:** Using `.split()` with regular expressions to process string segments creates unnecessary array allocations and processes the full string length, causing significant performance overhead in frequent string validations. Backward string scanning with loop primitives is ~8x faster.
**Action:** Replace string segmentation logic like `.split().at(-1)` with backward loops when validating trailing string contents on hot paths.
