## 2024-05-24 - Avoid Array Allocation in Hot Paths
**Learning:** Using `.split()` with regular expressions inside frequently called functions (like event handlers) causes unnecessary array allocations, which degrades performance significantly (~25x slower) compared to simple backward string scanning.
**Action:** Prefer reverse string scanning (e.g., loops) over array allocations (`.split()`, `.match()`) when validating trailing string segments in high-frequency operations.
