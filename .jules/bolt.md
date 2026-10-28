## 2026-10-28 - Avoid array allocations in hot paths
**Learning:** Using array allocations in frequently called functions creates unnecessary overhead. String scanning (like a backward loop) is significantly faster for validating trailing segments.
**Action:** Use backward loops instead of array allocating functions when checking the last segment of a string in high-frequency event handlers.
