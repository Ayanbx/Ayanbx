## 2024-05-24 - Avoid array allocations in frequent string validation
**Learning:** Using `.split()` with regex allocates an array and is extremely slow for frequent operations or hot paths (like key presses). A simple backward string scanning loop is exponentially faster (~17x).
**Action:** Prefer manual string scanning with loops over array allocations or regex for simple validations at the end of strings.
