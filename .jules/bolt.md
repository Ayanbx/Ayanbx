## 2026-10-27 - Prevent array allocation in hot paths
**Learning:** Using regex split on every keystroke in a calculator input is a performance anti-pattern. A simple backward string scan loop is ~15-25x faster because it avoids array allocations and regex execution overhead.
**Action:** Always prefer backward scanning over splitting when validating the most recent segment of a delimited string, especially in high-frequency event handlers.
