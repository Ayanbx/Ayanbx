## 2024-05-24 - Avoid Array Allocations for String Validation
**Learning:** Using `.split()` with regex to check the trailing segment of a string allocates unnecessary arrays and incurs regex compilation overhead, causing measurable performance penalties in event handlers.
**Action:** Prefer backwards string scanning (loops) when validating trailing segments of expressions to avoid garbage collection pressure and improve execution speed.
