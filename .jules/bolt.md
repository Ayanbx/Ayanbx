## 2026-10-25 - [Avoid Regex Allocation in Frequent Validation Loops]
**Learning:** Using regex `.split()` to validate trailing string segments inside hot paths (e.g., event handlers mapping to user inputs) creates an array allocation on every call and incurs a massive (~15x) performance penalty compared to manual character scanning.
**Action:** When validating segments of strings repeatedly, substitute regex-based splits with simple backward character-scanning loops.
