## 2024-06-11 - Optimize decimal validation by avoiding array allocation
**Learning:** Using regex `.split()` on every character input for string validation causes unnecessary array allocations, introducing performance overhead (~25x slower in synthetic benchmarks). This is a common performance anti-pattern in hot paths like event handlers.
**Action:** Replace string-splitting logic with precise backward-scanning loops for validating trailing segments to avoid array allocations entirely.
