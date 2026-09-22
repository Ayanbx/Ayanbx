## 2023-10-25 - Avoid array allocations in hot paths
**Learning:** Using regex `.split()` for string parsing in frequently called event handlers creates unnecessary array allocations that cause performance overhead.
**Action:** Replace `.split()` with backward string scanning loops to avoid allocations when validating trailing string segments in high-frequency functions.
