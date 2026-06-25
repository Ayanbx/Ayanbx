## 2024-06-25 - Regex parsing overhead on keystrokes
**Learning:** Using regex like `split(/[+\-*/]/)` in an event loop or keypress handler creates unnecessary array allocations and regex matching overhead.
**Action:** Replace regex-based string parsing with simple backward `for` loops in key handlers to optimize simple operations like checking for characters in the last number token.
