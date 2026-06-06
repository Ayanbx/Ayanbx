## 2024-06-06 - Avoid string split for simple string checks
**Learning:** Using `String.prototype.split` with regex and array allocation just to check characters at the end of a string is significantly slower than a simple reverse loop (approx 250x slower in tight loops).
**Action:** When validating trailing parts of strings (like checking for decimals in the current number being typed), use a reverse `for` loop instead of `.split().at(-1).includes()`.
