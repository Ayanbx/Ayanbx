## 2026-11-01 - Optimize decimal validation by avoiding array allocation
**Learning:** In hot paths like event handlers for key presses, using regex splits and array allocations can cause unnecessary memory pressure and slowdowns for longer expressions.
**Action:** Use backward string scanning (loops) instead to validate trailing segments without allocating intermediate arrays.
