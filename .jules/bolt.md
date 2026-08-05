## 2024-08-05 - Array Allocation Overhead in Hot Paths
**Learning:** Found a performance bottleneck where executing `expression.split(/[+\-*/]/)` in an event handler allocated unnecessary arrays and executed regex operations repeatedly. This was exceptionally slow in benchmarks (900ms vs 30ms for 1M ops).
**Action:** Replace `split` and regex usage with backward string scanning loops when validating characters at the tail of a string, specifically avoiding array and regex allocation overhead on hot paths.
