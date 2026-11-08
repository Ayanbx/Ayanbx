## 2026-11-08 - Regex split array allocation in hot paths
**Learning:** Using regex `.split()` in frequent event handlers (like keypresses) forces unnecessary array allocations and regex engine execution, causing significant overhead compared to simple string scanning.
**Action:** When parsing trailing segments of strings for validation, prefer backward loop scanning over `.split()` to prevent allocations and improve performance, especially in hot paths.
