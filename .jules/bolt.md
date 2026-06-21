## 2026-06-21 - String.split() Performance Bottleneck
**Learning:** Using `String.split(/[+\-*/]/)` for suffix checking on every keystroke allocates temporary arrays and executes regex unnecessarily, making it very slow (e.g. ~450ms for 1M iterations). A simple backwards loop avoids allocation and regex entirely, running in ~37ms (over 10x faster).
**Action:** For simple string suffix scanning or checking the last chunk delimited by specific characters, use a reverse `for` loop instead of `split()` or regex, especially in hot paths like event handlers.
