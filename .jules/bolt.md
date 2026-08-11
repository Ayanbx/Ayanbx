## 2024-05-18 - String Scanning vs Array Allocation
**Learning:** Using `.split(regex)` in frequent operations (like input event handlers) creates unnecessary array allocations that can cause performance penalties and garbage collection overhead.
**Action:** Prefer string scanning (like backward loops) for validating trailing segments to prevent performance penalties.
