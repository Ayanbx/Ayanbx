## 2024-05-24 - Avoid Array Allocations in Event Handlers
**Learning:** Using `.split()` with regexes creates new array allocations on every key press in the calculator. In hot paths like continuous event handlers, scanning the string backward manually to validate trailing segments is ~10x faster and avoids garbage collection overhead.
**Action:** When validating segments of strings inside frequent event handlers, prefer backward string loops over array-allocating methods like `.split()` and regexes.
