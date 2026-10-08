## 2026-10-08 - Optimize array allocation in hot paths
**Learning:** Using string `.split()` with regular expressions inside event handlers or frequent operations causes unnecessary array allocations, introducing performance penalties and garbage collection overhead.
**Action:** Always prefer primitive string operations like backward scanning via a `for` loop to extract or validate trailing segments without memory allocation in hot paths.
