## 2024-05-24 - Array allocation vs String scanning
**Learning:** Using regex and `.split()` (e.g., `expression.split(/[+\-*/]/)`) inside frequently called event handlers creates unnecessary array allocations that cause measurable performance overhead (~25x slower in benchmarks).
**Action:** When validating trailing segments of strings (like checking for multiple decimal points in a calculator), use backward string scanning (loops) to avoid array allocation entirely.
