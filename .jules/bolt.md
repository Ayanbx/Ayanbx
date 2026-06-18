## 2024-06-18 - Avoid array allocation on hot paths
**Learning:** Checking for decimal points using `expression.split(/[+\-*/]/).at(-1).includes(".")` creates unnecessary string arrays and regex matches on every dot keystroke, acting as a micro-bottleneck.
**Action:** Replace string splits and array manipulations on hot paths (like keypress handlers) with basic reverse loop traversals to avoid intermediate object allocation overhead.
