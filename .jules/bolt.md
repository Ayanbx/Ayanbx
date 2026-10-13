## 2026-10-13 - Avoid array allocation in hot paths
**Learning:** Using string splitting on every character append in a calculator app forces continuous array allocation, creating unnecessary overhead in the UI hot path.
**Action:** Use a backward string scan instead to check the last segment without allocating intermediate structures.
