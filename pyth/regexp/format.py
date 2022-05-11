# name = input("your name? ").strip()

# if "," in name:
#     last, first = name.split(", ")
#     name = f"{first} {last}"

# print(f"hello {name}")

import re

# name = input("your name? ").strip()
# matches = re.search("^(.+), *(.+)$", name)
# if matches:
#     name = f"{matches.group(2)} {matches.group(1)}"
# print(f"sup {name}")

name = input("your name? ").strip()

if matches := re.search("^(.+), *(.+)$", name):
    name = f"{matches.group(2)} {matches.group(1)}"
print(f"sup {name}")