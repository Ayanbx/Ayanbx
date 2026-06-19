## 2024-05-24 - Avoid regex array allocations for string queries
**Learning:** Checking for substrings or specific characters in the last segment of a string (like a number in an arithmetic expression) using `string.split(regex).at(-1)` is extremely inefficient because it forces string allocation for an array and heavily utilizes regex matching on every call.
**Action:** Replace `split()` calls in hot paths with simple backward-iterating `for` loops that terminate early to avoid memory allocation and regex overhead completely (~20x faster).
