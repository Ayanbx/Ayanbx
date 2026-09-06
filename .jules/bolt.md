## 2024-05-24 - Optimize decimal validation scan
**Learning:** Checking for an existing decimal point using regex split and array allocation in a hot path like an event listener (`expression.split(/[+\-*/]/).at(-1)`) incurs significant performance overhead. String scanning via a backward loop is significantly faster.
**Action:** When validating string suffixes or searching for characters near the end of a string in a hot path, prefer manual backward scanning over array allocation and regex matching.
