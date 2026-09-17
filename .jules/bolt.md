## 2024-05-23 - Avoid .split() with regex in trailing segment validation
**Learning:** Using string.split() with a regex to check a trailing segment (like the current number being typed) creates unnecessary array allocations and parses the entire string every time, which scales poorly as the string grows.
**Action:** Replace .split() validations with simple backward string scanning (for loops checking characters from the end) to avoid allocations and reduce time complexity in hot paths.
