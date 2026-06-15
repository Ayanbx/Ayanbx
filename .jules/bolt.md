## 2024-05-24 - Avoiding Array Allocations in String Parsing
**Learning:** In a frequently called event handler (like appending numbers in a calculator), operations like `.split(/[+\-*/]/)` on a growing string create unnecessary array allocations and invoke expensive regular expression engines, creating a measurable performance bottleneck.
**Action:** When searching for characters relative to the end of a string (like finding the last decimal point before an operator), a simple reverse `while` or `for` loop is significantly faster and avoids memory allocations entirely.
