## 2026-09-30 - Optimize decimal validation in hot path
**Learning:** Array allocations (like using `.split()` with regex) in frequent operations or hot paths (e.g., event handlers) cause significant performance penalties in this codebase.
**Action:** Prefer string scanning (like backward loops) for validating trailing segments to prevent performance penalties.
