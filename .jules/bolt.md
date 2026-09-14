## 2024-05-24 - Avoid array allocations in hot paths
**Learning:** Using regex `.split()` on strings to extract substrings during frequent operations (like validating inputs on key presses) causes unnecessary array allocations, slowing down execution significantly (e.g., ~25x slower in benchmarks).
**Action:** Use backward scanning loops (`for (let i = length - 1; i >= 0; i--)`) to check for characters in strings when validating trailing segments to avoid allocating arrays and improve performance.
