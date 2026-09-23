## 2024-05-15 - [Optimization] Avoid Regex Split for Decimal Checking
**Learning:** The calculator app was using `expression.split(/[+\-*/]/)` on every decimal point press just to check if the current number segment already contained a decimal. This caused unnecessary array allocations and regex evaluation on every keypress. Using a simple backward loop to scan for decimals or operators is much faster and avoids creating intermediate objects.
**Action:** When validating input segments, prefer string scanning (loops/`lastIndexOf`) over `.split()` if only the final segment is relevant.
