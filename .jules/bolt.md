## 2026-11-07 - Avoid Regex Splits for Trailing String Validation
**Learning:** Using regex `.split()` to validate the trailing segment of a string (like checking if the last number in an expression contains a decimal) causes unnecessary array allocations and entire string traversal. In JavaScript, a simple backward loop is over 12x faster and avoids allocations entirely.
**Action:** Use backward scanning (`for (let i = str.length - 1; i >= 0; i--)`) to validate trailing segments instead of splitting the entire string.
