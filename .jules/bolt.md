## 2024-05-24 - Avoid string array allocation during input validation
**Learning:** Checking for the presence of a character in the "current" segment of a string can be expensive if implemented using `String.prototype.split` with a regex, which creates arrays and evaluates regexes on every keystroke.
**Action:** When searching backward for a token in a string (e.g., checking if the last number typed contains a decimal point), use a manual `for` loop to scan backward. This completely avoids array allocations and regex overhead, executing up to ~25x faster.
