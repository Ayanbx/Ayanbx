## 2026-10-09 - Optimize decimal point check to prevent array allocation
**Learning:** Using .split() with regex creates new array allocations and string copies. In hot paths like keyboard event handlers, scanning the string backwards is ~25x faster.
**Action:** Avoid array allocations for simple string validations. Use loops or string primitives (like lastIndexOf) instead.
