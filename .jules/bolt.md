## 2023-10-27 - [Avoid Array Allocation in Hot Path]
**Learning:** Using `.split()` with a regex inside the `appendValue` function creates unnecessary array allocations for every character typed, causing a performance hit in the hot path.
**Action:** Replace `.split()` with a backward loop string scan to check for decimal points in the current number segment to avoid array allocation overhead.
