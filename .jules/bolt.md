## 2024-05-24 - Avoid array allocations with regex split in hot paths
**Learning:** Using `.split(/[+\-*/]/)` on a string for scanning a segment creates unnecessary array allocations. In frequent operations (like input handling in a calculator), this approach carries a significant performance penalty (e.g., taking ~516ms for 1,000,000 ops vs ~33ms using a backward loop).
**Action:** Prefer string scanning, such as backward loops, over array splitting with regular expressions when validating trailing segments of strings in hot paths.
