# names = []

# for _ in range(3):
#     names.append(input("what is your name? "))

# for name in sorted(names):
#     print(f"hello {name}!")
#################################################

# name = input("what is your name ")

# file = open("names.txt", "a")
# file.write(f"{name}\n")
# file.close()
#################################################

# name = input("what is your name ")

# with open("names.txt", "a") as file:
#     file.write(f"{name}\n")
##############write to file##################

# with open("names.txt", "r") as file:
#     for line in file:
#         print("hello ", line.rstrip()) # strips from end of line the whitespaces
# ######## print unsorted array ##########


##     lines = file.readlines()

## for line in lines:
##     print("hello ", line.rstrip())
#############read from file###########

names = []

with open("names.txt") as file:
    for line in file:
        names.append(line.rstrip())

for name in sorted(names, reverse=True):
    print(f"hello {name}")

####### print sorted array ###########