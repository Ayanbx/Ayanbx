## 2024-05-18 - Avoid Regex and Array Allocation in Event Handlers
**Learning:** String `split` combined with Regex execution inside hot paths like user input parsing (in vanilla JS without virtual DOM) creates unnecessary garbage collection overhead and is significantly slower (25x) than a simple backward iterating loop to check string conditions.
**Action:** Always prefer basic loops over `.split(/.../)` when parsing inputs or expressions linearly backward or forward, especially when avoiding array creation is simple.
