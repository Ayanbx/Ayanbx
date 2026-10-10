## 2026-10-10 - Avoiding Array Allocations in String Parsing
**Learning:** Using regex `.split()` on every keystroke to validate decimal placement creates unnecessary array allocations in hot paths. The `appendValue` method was doing this on every input.
**Action:** Replace string-splitting logic with backward scanning (e.g., looping backward to find the last operator or decimal) to prevent array allocations.
