## 2024-05-24 - Array allocation overhead in input handlers
**Learning:** String `split` with Regex (`expression.split(/[+\-*/]/)`) inside frequently called event handlers (like hot path input validators) causes unnecessary array allocation overhead. Benchmarks showed it was ~25x slower than a simple backward scanning loop.
**Action:** Replace `String.split()` array allocations in hot paths with backward index loops (e.g. `for (let i = length - 1; i >= 0; i--)`) to optimize performance and reduce garbage collection, while being careful not to sacrifice readability.
