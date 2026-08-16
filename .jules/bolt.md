## 2024-05-24 - Array Allocations in Hot Paths
**Learning:** Using `.split(regex)` with regular expressions for simple string validation (e.g. checking if the last number in an expression contains a decimal) causes unnecessary array allocations and regex overhead. In hot paths like continuous event handling, this results in significant performance degradation compared to manual string scanning.
**Action:** When validating trailing segments of a string in a hot path, always prefer a backward loop over using `split()` and array methods to avoid performance penalties.
