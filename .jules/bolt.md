## 2024-05-24 - String Scanning vs Array Allocations
**Learning:** Using regex `.split()` for trailing segment validation in hot paths (like event handlers) incurs significant performance penalties due to array allocation.
**Action:** Prefer backward string scanning (loops) when validating the last segment of a string, which can be up to 16x faster.
