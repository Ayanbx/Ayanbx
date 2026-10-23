## 2026-10-23 - Avoid array allocations in hot paths
**Learning:** Using string splitting for simple character validation inside frequent operations causes unnecessary array allocations and performance penalties. A backward string scanning loop is much faster.
**Action:** Always prefer string scanning methods (like backward loops) over creating intermediate arrays for validating segments of a string in hot paths.
