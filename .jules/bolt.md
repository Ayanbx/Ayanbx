## 2024-07-18 - Avoid Regex/Array Allocations in Hot Paths
**Learning:** Regex parsing and array allocation (like `split()`) in frequently called input handlers (like keydown/click events appending digits) introduce unnecessary GC pressure and latency. In vanilla JS, simple backward string iteration is an order of magnitude faster.
**Action:** Before reaching for `.split().at(-1)` to find local string context, consider whether a basic O(n) backward loop will suffice, especially when modifying a running expression.
