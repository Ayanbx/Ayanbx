## 2024-05-24 - Avoid array allocations in hot paths
**Learning:** The codebase relies on vanilla JS event handlers where frequent string manipulations can become a bottleneck. Using `.split()` with regex to parse the expression allocates new arrays on every call, which is ~10x slower than scanning the string directly.
**Action:** Prefer string scanning (like backward loops) for validating trailing segments instead of splitting arrays to prevent performance penalties in hot paths.
