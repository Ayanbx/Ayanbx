## 2026-11-09 - Avoid Array Allocations in String Validation Hot Paths
**Learning:** Using string splitting with regex to validate the end of a string causes significant performance overhead due to unnecessary array allocations in hot paths. In benchmarks, backward string scanning was >10x faster.
**Action:** Replace string split array allocations with backward string iteration or direct character scanning for basic validation in frequent operations.
