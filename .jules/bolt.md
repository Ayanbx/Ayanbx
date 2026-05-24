## 2024-05-24 - Avoiding Array Allocations & Regex in String Scanning
**Learning:** Checking character properties (like `.` placement in a math expression) by creating full regex splits (e.g. `expression.split(/[+\-*/]/)`) allocates unneeded memory and arrays. Scanning a string backwards for a delimiter requires O(1) memory and is significantly faster for simple validations.
**Action:** Always prefer basic string indexing or loops (`for`, `includes()`) over regex, `.split()`, or array allocations (`["+", "-"]`) when performing high-frequency, simple character checks in JavaScript.
