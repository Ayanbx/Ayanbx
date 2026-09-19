## 2024-05-24 - Array Allocations in Validations
**Learning:** Using regex split `split(/[+\-*/]/)` for finding the current decimal string creates unnecessary array allocations and degrades performance in hot paths.
**Action:** Replace string splits with backward string scanning to avoid array allocations when checking trailing conditions.
