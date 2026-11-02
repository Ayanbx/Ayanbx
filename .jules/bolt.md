## 2026-11-02 - Avoiding Array Allocations in Validations
**Learning:** Using methods that allocate new arrays (like string splitting) to extract string segments inside hot paths or frequent events is a significant performance bottleneck. In this codebase's calculator logic, backward-scanning loops validate trailing constraints much faster by eliminating memory allocation entirely.
**Action:** Always favor reverse string scanning (e.g., looping backward until a condition is met) over array allocation methods when checking end-of-string rules or validations on every input.
