## 2026-11-05 - Prevent array allocations in hot paths
**Learning:** Using regex and `split` on strings in frequently called functions (like input event handlers) creates unnecessary array allocations that impact performance. Scanning backward is a much faster pattern.
**Action:** Prefer manual string scanning loops (`for` with `break`) over array-allocating methods like `split` or `match` for simple validation tasks, especially in hot paths.
