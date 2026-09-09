## 2024-05-30 - Optimize decimal check to avoid array allocations
**Learning:** The array allocation using split and regex was significantly slowing down the frequent append operation.
**Action:** Use backward string scanning for validating trailing segments to prevent performance penalties.
