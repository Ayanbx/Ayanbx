
## 2024-05-24 - Array Allocation in Hot Paths
**Learning:** Using regex and `.split()` (which allocates a new array) in frequently called event handlers (like keystrokes or button clicks for decimal validation) creates unnecessary overhead and Garbage Collection pressure in this vanilla JS app.
**Action:** Replace string segmentation allocations with backward string scanning logic for validating trailing conditions when processing inputs.
