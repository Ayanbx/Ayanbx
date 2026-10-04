## 2026-10-04 - String parsing allocations
**Learning:** This codebase frequently relies on regex array allocations (like `.split()`) for validation in hot paths (like keystrokes), causing noticeable performance overhead.
**Action:** Prefer reverse string traversal loops for parsing trailing numbers or characters to avoid O(N) processing and GC pressure.
