## 2024-05-24 - Array Allocations in Event Handlers
**Learning:** Using `split()` with regex inside frequently called event handlers (like keystrokes or button clicks) causes unnecessary array allocations and is significantly slower (10x-25x) than a backward character scan in hot paths.
**Action:** When validating trailing segments of a string (e.g., checking for decimals in a typed number), prefer string scanning (`for` loops searching backwards) over allocating arrays via `.split()` or regex matching.
