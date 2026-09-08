## 2024-09-08 - String splitting optimization

**Learning:** Avoid array allocations (like using `.split()` with regex) in frequent operations or hot paths (e.g., event handlers). It caused unnecessary overhead for something that can be handled iteratively.

**Action:** Prefer string scanning (like backward loops) for validating trailing segments to prevent performance penalties.
