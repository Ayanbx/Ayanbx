## 2026-11-04 - Prevent array allocations in hot paths
**Learning:** Found an issue where the calculator allocates an array on every key press when checking for a valid decimal point by splitting the expression string. Array allocations inside hot paths (event listeners) trigger garbage collection which can cause jank on lower-end devices.
**Action:** When validating a trailing segment of a string in a hot path, use a backward scanning loop instead of string splitting to prevent temporary array allocations.
