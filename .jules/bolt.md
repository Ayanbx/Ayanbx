## 2024-05-14 - Array Allocation in Hot Paths
**Learning:** Avoid array allocations (split()) with regex matching in high-frequency event handlers like keyboard inputs. Even in simple logic, backwards string scanning is substantially faster (up to ~50x) by short-circuiting early.
**Action:** Replace string-to-array transformations (split().at(-1)) with direct index iteration or scanning (lastIndexOf()) in performance-sensitive segments.
