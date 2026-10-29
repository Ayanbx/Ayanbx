## 2026-10-29 - Avoid Array Allocations in Frequent Operations

**Learning:** When validating strings in hot paths like event handlers, using regex `.split()` creates unnecessary array allocations which causes performance penalties.
**Action:** Use string scanning like backward loops to find characters, rather than splitting the entire string into arrays, especially for trailing validations.
