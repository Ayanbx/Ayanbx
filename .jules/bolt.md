## 2026-10-21 - Prevent array allocation on decimal check
**Learning:** Found an array allocation using string splitting with regular expressions inside the `appendValue` function, creating unnecessary overhead on frequent key presses. Array allocations in hot paths like frequent user input can introduce notable performance penalties.
**Action:** Replaced the array allocation with a simple backward string traversal (`while` loop checking characters) to determine if the current number already has a decimal point. This pattern should be favored for hot paths instead of relying on regex splits.
