## 2024-08-30 - Avoid Array Allocations in Hot Paths
**Learning:** Checking string conditions by splitting a string with a regular expression (e.g., `expression.split(/[+\-*/]/)`) causes significant performance penalties due to array allocation and regex processing, especially in hot paths like typing/event handlers.
**Action:** Use manual backward character scanning (loops) when checking conditions near the end of a string to avoid unnecessary array allocations and string copies.
