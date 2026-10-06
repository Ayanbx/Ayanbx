## 2026-10-06 - Avoid Regex Split for String Scanning
**Learning:** Scanning backwards for a character in a string is significantly faster and allocates less memory than using String.prototype.split() with a regular expression, especially in frequently called event handlers like appendValue.
**Action:** Always prefer basic string scanning (like a backward loop) for validating trailing segments to prevent array allocations and performance penalties.
