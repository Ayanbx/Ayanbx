## 2024-07-02 - Avoid split() for simple char checks
**Learning:** Using `expression.split(/[+\-*/]/)` on every keystroke allocates arrays unnecessarily and scales poorly with expression length. Checking characters via a backward loop is ~17-25x faster.
**Action:** Replace full string/regex splits with allocation-free backward loops for targeted character lookups.
