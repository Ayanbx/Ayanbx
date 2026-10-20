## 2026-10-20 - Prevent array allocations in frequent keyboard event handlers
**Learning:** Using string array splitting with regex inside frequent event handlers (like keyboard typing) creates unnecessary array and string allocation overhead on every keystroke, impacting performance.
**Action:** Use simple string scanning (like backward loops) for validating trailing segments in hot paths to prevent allocations.
