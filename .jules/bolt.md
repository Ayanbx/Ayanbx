## 2026-10-03 - String validation in hot paths
**Learning:** Avoid array allocations (like `.split()` with regex) in frequent operations or hot paths (e.g., event handlers or keystroke processing). In this Calculator app, allocating arrays to check the current number segment for decimals was significantly slower than a simple character scan.
**Action:** Prefer backward string scanning (like `for` loops or `lastIndexOf`) over array splits for validating trailing segments to prevent performance penalties.
