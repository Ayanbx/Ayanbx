## 2023-10-24 - Array allocation during character validation in JavaScript
**Learning:** String splits (`.split()`) combined with regex allocations inside frequently called event handlers (like keystroke validation in calculators) create significant overhead and unnecessary garbage collection.
**Action:** When validating trailing character constraints (like avoiding multiple decimal points), use an O(K) backward `for` loop traversal on the string rather than an O(N) array allocation via regex splitting.
