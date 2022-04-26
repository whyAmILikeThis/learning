# email = input("What's your email? ").strip()

# # if "@" in email and "." in email:
# #     print("Valid")
# # else:
# #     print("Invalid")

# username, domain = email.split("@")

# # if username and "." in domain:
# #     print("valid")
# # else:
# #     print("invalid")

# if username and domain.endswith(".edu"):
#     print("valid")
# else:
#     print("invalid")

import re

email = input("What's your email? ").strip()

# if re.search("^.+@.+\.edu$", email):
# if re.search("^[^@]+@[^@]+\.edu$", email):
# if re.search("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.edu$", email):
if re.search("^\w+@(\w+\.)?\w+\.edu$", email, re.IGNORECASE):  #\w means word == [a-zA-Z0-9_]
    print("valid")
else:
    print("invalid")