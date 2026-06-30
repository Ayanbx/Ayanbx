## 2024-06-30 - Regex Split vs Manual Loop for String Scanning
**Learning:** In hot paths (like keypress handlers), replacing `string.split(regex).at(-1)` with a manual backward loop avoids regex engine overhead and array allocation, resulting in ~7x faster execution in simple JS benchmarks.
**Action:** When scanning strings for a single character (like a decimal point) bounded by delimiters, prefer a backward `for` loop over creating temporary arrays or using regex, especially in vanilla JS performance-critical paths.
