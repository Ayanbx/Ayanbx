## 2024-06-24 - Avoid regex and split in hot loops
**Learning:** Using `String.prototype.split` with a RegExp inside a frequently called function (like `appendValue` on every keystroke/click) is significantly slower (e.g. ~14x slower) than a simple backwards `for` loop that checks characters sequentially.
**Action:** When parsing the end of a string to find a specific condition (like checking if the current number has a decimal), use a simple backward traversal loop instead of creating temporary arrays with regex `split`.
