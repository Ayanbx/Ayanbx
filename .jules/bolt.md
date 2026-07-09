## 2024-05-24 - Avoid regex splitting in tight UI event handlers
**Learning:** In vanilla JS projects without heavy frameworks, replacing `.split(regex)` with a backward-scanning `for` loop combined with `.slice()` for string parsing avoids intermediate array allocations and regex evaluation overhead, leading to ~15x faster execution in microbenchmarks for tight UI event handlers.
**Action:** When inspecting string parsing logic inside frequent event handlers (like keystrokes or button clicks), check if regex/array allocation can be replaced with simple index-based slicing and looping.
