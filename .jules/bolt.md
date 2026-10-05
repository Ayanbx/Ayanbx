## 2026-10-05 - Avoid Array Allocation in Hot Paths
**Learning:** Found a codebase-specific performance anti-pattern where `expression.split(/[+\-*/]/)` was used in the event handler (hot path) to validate trailing segments. This causes unnecessary array allocation and regex overhead.
**Action:** Prefer string scanning (like backward loops) for validating trailing segments to prevent performance penalties.
