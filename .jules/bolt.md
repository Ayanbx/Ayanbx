## 2024-05-24 - Avoid regex and split in tight loops
**Learning:** Checking for decimal points in the current number of an expression string using `split(/[+\-*/]/).at(-1)` is extremely slow due to array allocation and regex evaluation.
**Action:** Use a simple backward `for` loop to search for the decimal point, terminating early when an operator is found. This avoids all allocations and is >15x faster.
