## 2024-06-25 - Avoid array allocation in inner loops
**Learning:** Using `String.prototype.split` with regex creates a new array on every call, which creates garbage collection pressure. This was being done on every decimal check in the calculator app.
**Action:** Use manual loops (like backward iteration) to avoid allocations entirely in frequently called paths. Benchmark showed this was roughly 10-12x faster in this specific scenario.
