## 2024-09-27 - Optimize decimal validation with backward string scan
**Learning:** Using regex `.split()` on every input allocation creates an array, which is inefficient. A backward string scan to find the current number and check for decimals is much faster.
**Action:** Prefer primitive string scanning operations (like backward loops) over array allocations in hot paths like event handlers.
