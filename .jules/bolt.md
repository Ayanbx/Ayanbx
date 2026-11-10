## 2026-11-10 - Prevent array allocations in frequent operations
**Learning:** Using regex and split to validate strings on every keystroke in hot paths causes unnecessary array allocations, slowing down execution significantly (e.g. 600ms vs 40ms for 1M iterations).
**Action:** Use backward scanning loops or simple string indexing (like lastIndexOf) instead of allocating arrays when validating trailing segments in frequent event handlers.
