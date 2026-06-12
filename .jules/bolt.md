## 2024-05-24 - Avoiding Array Allocations in String Parsing
**Learning:** Using `String.prototype.split` with a regular expression to parse the end of a string (e.g., `expression.split(/[+\-*/]/).at(-1)`) creates unnecessary array allocations and is significantly slower (~35x slower) than iterating backward through the string with a simple `for` loop.
**Action:** When extracting or checking characters at the end of a string segment separated by delimiters, use a backward `for` loop to check characters in place rather than splitting the string.
