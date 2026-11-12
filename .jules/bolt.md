## 2026-11-12 - Avoid array allocations in hot paths by backward scanning
**Learning:** In highly called functions like `appendValue` for the calculator, using regex to split strings (e.g., `expression.split`) causes unnecessary array allocations, which is a performance bottleneck.
**Action:** Use backward loop scanning (e.g., iterating backwards over the string to check for operators and decimals) instead of regex splitting in hot paths to improve execution speed.
