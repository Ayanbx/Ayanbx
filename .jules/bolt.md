## 2026-10-24 - Optimize decimal validation string parsing
**Learning:** Array allocations in frequent operations (like using split with regex in event handlers) can cause performance penalties. Backward string scanning is significantly faster.
**Action:** Avoid array allocations in hot paths by utilizing simpler string scanning loops where applicable.
