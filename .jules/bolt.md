## 2024-10-24 - String Parsing Allocation Optimization
**Learning:** Using regex `.split()` on string inputs in frequent event handlers (like every keypress) allocates arrays and incurs a ~10x performance penalty compared to backward character loops, which is especially noticeable in vanilla JS environments without build steps.
**Action:** Always prefer reverse character iteration or `lastIndexOf` over regex-based `split()` when validating the trailing segments of a string in hot paths.
