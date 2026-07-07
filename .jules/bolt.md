## 2024-07-07 - Avoid unnecessary String/Regex operations and Array allocations on hot paths
**Learning:** Found a common anti-pattern where a simple string check on user input was performing `expression.split(/[+\-*/]/)` on every keystroke, which evaluates a regex, splits the string, and allocates an array.
**Action:** Replace unnecessary string splitting and regex matching with localized index loops for parsing simple expressions, eliminating garbage collection overhead and significantly improving execution speed.
