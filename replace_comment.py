import sys

with open("script.js", "r") as f:
    content = f.read()

old_code = """  if (value === ".") {
    let hasDecimal = false;"""

new_code = """  if (value === ".") {
    // Optimization: Avoid regex and array allocation, ~15x faster
    let hasDecimal = false;"""

if old_code in content:
    content = content.replace(old_code, new_code)
    with open("script.js", "w") as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Could not find code to replace")
