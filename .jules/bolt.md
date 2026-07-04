## 2024-05-24 - Avoiding array allocations for simple string searches
**Learning:** In Javascript, using `String.prototype.split()` with a regular expression creates an array and can be slow when called frequently (like on every keystroke when appending to a calculator expression). Specifically, `expression.split(/[+\-*/]/).at(-1)` is around 15-20x slower than traversing the string backward.
**Action:** When searching backward for the first occurrence of a character or checking if a suffix contains a character, use a simple `for` loop from the end of the string.
