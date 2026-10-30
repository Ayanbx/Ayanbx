## 2026-10-30 - Avoid array allocations in hot paths
**Learning:** Using .split() with regex inside frequent operations like input handlers causes unnecessary array allocations. Backward string scanning is significantly faster (~37x in this case).
**Action:** Check string manipulation in hot paths. Prefer backward loops or string scanning methods over creating new arrays when validating trailing segments.
