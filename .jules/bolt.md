## 2024-05-24 - Optimize Decimal Check
**Learning:** Avoid array allocations (like using `.split()` with regex) in frequent operations or hot paths.
**Action:** Prefer string scanning (like backward loops) for validating trailing segments to prevent performance penalties.
