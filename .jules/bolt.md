## 2024-05-24 - Avoid string split with regex for simple scans
**Learning:** String `split` with regex is very slow compared to manual iteration, especially if you only need information about the end of the string.
**Action:** Use a backwards-scanning `for` loop instead of `.split(regex).at(-1)` when trying to parse the last token in a simple expression string. This prevents array allocations and regex execution overhead.
