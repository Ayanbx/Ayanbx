## 2024-06-12 - Avoid array allocations in frequent events
**Learning:** Using `String.prototype.split()` with a regular expression creates an array allocation on every keystroke when checking if a number already has a decimal. In a hot path like an event listener, this array allocation can cause unnecessary memory overhead and GC pressure.
**Action:** Replace `split` and array extraction with simple backward string scanning loops when validating segments of a string in high-frequency event handlers.
