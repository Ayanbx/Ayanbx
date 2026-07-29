## 2024-07-29 - Optimize string scanning to avoid array allocation
**Learning:** Frequent array allocations via `.split()` with regex on user input hot paths (like key presses) introduce significant overhead compared to simple loop-based string scanning.
**Action:** Prefer scanning strings backwards with a `for` loop over regex splits when validating the trailing segment of a string.
