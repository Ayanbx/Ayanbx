## 2024-08-20 - Prevent array allocation during decimal validation
**Learning:** Found an opportunity to replace a regex split and array allocation (`expression.split(/[+\-*/]/)`) with a backward scanning loop during a frequent operation (validating if a decimal point can be added).
**Action:** Replaced array allocation with string scanning on hot paths to improve performance, demonstrating the value of avoiding object creation when parsing strings for specific characters.
