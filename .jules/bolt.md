## 2024-08-15 - Array Allocation Overhead in Hot Paths
**Learning:** Using `.split()` with regular expressions to validate trailing segments (e.g., checking for decimals) incurs a significant performance penalty due to unnecessary array allocations on every user keystroke.
**Action:** Avoid array allocations in hot paths like event handlers. Prefer direct string scanning (like backward loops) which are significantly faster (e.g., 64ms vs 742ms in benchmarks) for parsing mathematical expressions.
