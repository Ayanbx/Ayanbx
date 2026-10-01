## 2026-10-01 - Array Allocation in Hot Paths
**Learning:** Using regex `.split()` in frequent UI interactions (like validating decimal input on every keypress) allocates arrays unnecessarily and slows down execution (~25x slower in node benchmark). Backward looping to find the first operator is a zero-allocation alternative.
**Action:** Always scan strings from the end when validating trailing segments instead of splitting the entire string into an array.
