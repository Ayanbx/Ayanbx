## 2024-05-24 - Array Allocation in Hot Path
**Learning:** Checking for decimal points using `expression.split(/[+\-*/]/).at(-1).includes(".")` creates unnecessary string allocations and array overhead during every decimal input, taking ~832ms per million operations compared to ~24ms for a simple backwards iteration loop.
**Action:** Replace string-splitting regex allocations in frequent text evaluation paths with simple, backwards-iterating `for` loops that terminate early.
