## 2024-05-27 - [Array Instantiation in Hot Paths]
**Learning:** Creating arrays on every keystroke in event handlers (like `["+", "-", "*", "/"].includes(char)`) introduces unnecessary memory allocation and garbage collection overhead in hot paths.
**Action:** Use string inclusion (`"+-*/".includes(char)`) or extract array definitions outside of frequently executed functions to improve performance.

## 2024-05-27 - [DOM Write Early Return]
**Learning:** Unnecessary DOM writes, even if assigning the same value (e.g. `display.value = expression`), can trigger layout and repaint overhead.
**Action:** Add early returns (`if (display.value !== expression)`) before modifying DOM elements to prevent redundant updates.
