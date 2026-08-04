## 2024-08-04 - Optimize decimal check performance
**Learning:** Using regex and array allocations like `expression.split(/[+\-*/]/).at(-1)` on hot paths (e.g. every keypress for decimal validation) creates unnecessary garbage collection overhead and slows down execution.
**Action:** Replace string segmentation and array allocations with backward-scanning loops when checking properties of the current operand segment. It's significantly faster (~10x) and maintains correct logic.
