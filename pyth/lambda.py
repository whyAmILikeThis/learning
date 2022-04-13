people = [
    {"name": "harry", "house": "griff"},
    {"name": "draco", "house":"ryven"},
    {"name": "cho", "house":"something"}
]

# def f(person):
#     return person["house"]

people.sort(key= lambda person: person["name"])

print(people)