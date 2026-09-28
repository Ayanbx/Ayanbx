## 2024-09-28 - Array Allocation in Frequent String Operations
**Learning:** Using regex `split()` on strings to isolate trailing segments inside hot paths or event handlers incurs significant array allocation and garbage collection overhead.
**Action:** Use backward loops to scan strings for validating trailing segments instead of converting to arrays.
