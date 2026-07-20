## 2024-07-20 - String Split vs Backward Loop
**Learning:** Using `expression.split(/[+\-*/]/).at(-1)` is extremely inefficient for checking conditions within a continuous string segment. It allocates memory for an array and applies an expensive regex engine, making it ~10x slower than a manual backward `for` loop (O(1) space) to achieve the same result.
**Action:** When validating single characters or looking for specific tokens (like a decimal dot) near the end of an ever-growing string, prefer manual backward loops over `split` and Regex, especially when called repeatedly per keystroke.
