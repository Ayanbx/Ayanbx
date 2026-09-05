## 2024-05-24 - Avoid Array Allocations in String Validation
**Learning:** Using `.split()` with a regular expression (e.g., `expression.split(/[+\-*/]/)`) to check the last segment of a string is a significant performance bottleneck in hot paths (like input handlers). It forces an array allocation on every call.
**Action:** Replace `.split()` with manual string scanning (e.g., backward `for` loops) for validating trailing segments to prevent unnecessary memory allocations and improve execution time significantly.
