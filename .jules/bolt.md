## 2024-07-28 - Optimize array allocations in hot paths
**Learning:** Found a performance bottleneck where `.split()` with a regex was being used in a hot path (input validation during typing). This allocates a new array and parses the whole string on every keypress.
**Action:** Replace string `.split()` parsing with backward string scanning loops when we only care about validating the most recent segment of a string. This avoids O(N) memory allocations and regex overhead.
