## 2026-10-02 - Avoiding regex split in hot paths
**Learning:** Using `.split()` with regex inside a frequently called function creates a new array and incurs significant parsing overhead, making it inefficient for hot paths like validating input keys.
**Action:** Replace regex splitting with backward string scanning to look for specific characters, preventing unnecessary array allocations and boosting performance significantly.
