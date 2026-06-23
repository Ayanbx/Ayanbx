## 2023-10-27 - Regex Split Allocation Bottleneck
**Learning:** Using `String.split()` with a regex inside an evaluation function (like a calculator's `appendValue` on every keystroke) forces O(N) array allocation and regex evaluation simply to check the last segment of a string.
**Action:** When inspecting string ends or boundaries for simple validation (like checking if a decimal exists in the current number segment), use a reverse `for` loop to check characters iteratively backwards instead of creating new array structures, resulting in ~30x speedups.
