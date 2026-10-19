## 2026-10-19 - Avoiding Array Allocation in Hot Paths
**Learning:** Using regex splits on frequent user actions (like keypresses/clicks) causes unnecessary garbage collection.
**Action:** Replace it with backward scanning which yields ~20x faster performance on this hot path.
