## 2024-05-24 - Avoiding regex split in decimal checking
**Learning:** Using `String.split()` with a regex to find the last number in an expression before checking for a decimal point (`expr.split(/[+\-*/]/).at(-1).includes(".")`) is an expensive anti-pattern because it causes intermediate array allocations and regex evaluation.
**Action:** Replace `split().at(-1)` with a backward loop starting from the end of the string, stopping at the first operator, which operates in O(k) time and O(1) space and avoids allocations entirely, making it significantly faster.
