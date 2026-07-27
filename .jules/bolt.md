## 2024-05-14 - Prevent array allocation in hot path
**Learning:** Using `String.prototype.split()` combined with regular expressions inside frequent event handlers (like keystrokes or button clicks for decimal validation) creates significant, unnecessary memory overhead and latency compared to a simple reverse loop.
**Action:** When validating trailing segments of strings (especially in hot paths), prefer reverse string scanning (`for` loops) over allocating new arrays via `.split()` to prevent unnecessary garbage collection and improve execution speed.
