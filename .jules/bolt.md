## 2024-06-07 - Avoid array allocations via regex split
**Learning:** Using regex `.split(/[+\-*/]/)` in a hot path or frequently triggered input handler (like appending a decimal point) incurs unnecessary overhead by allocating an array and evaluating regex, making it roughly 20x slower than a manual string iteration.
**Action:** When validating single character constraints based on preceding string context, prefer backward index traversal (`for (let i = str.length - 1; i >= 0; i--)`) over `.split().at(-1)` to eliminate object creation overhead and improve evaluation speed.
