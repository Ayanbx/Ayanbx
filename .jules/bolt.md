## 2024-05-24 - Avoid array allocations in hot paths
**Learning:** Using regex `.split()` on strings creates unnecessary array allocations which can be severely detrimental to performance in hot paths (like input validation event handlers).
**Action:** Prefer backward string scanning (loops) for validating trailing string segments over splitting the entire string into an array.
