## 2024-06-20 - String Split Operations Create Measurable Bottlenecks in Event Listeners
**Learning:** Using regex-based string splitting (`expression.split(/[+\-*/]/).at(-1)`) to detect the last number segment on every key press introduces significant allocation and regex execution overhead, acting as a performance bottleneck when responding to rapid events.
**Action:** Replace string allocations and regex parsing on hot paths with manual backward loops to inspect string contents character-by-character.
