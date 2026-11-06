## 2026-11-06 - Optimize decimal check string scanning
**Learning:** Using regex split on strings to find the last segment causes unnecessary array allocations and is significantly slower (~20x in benchmarks) than a simple backward loop.
**Action:** Use backward loops with early breaks for finding characters in the last segment of a string instead of splitting the entire string, especially in frequently called paths like UI event handlers.
