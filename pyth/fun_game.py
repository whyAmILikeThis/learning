player = input("where do you wanna go? (n/e/s/w) ")

if player == 'n':
    print("go north")
elif player == 's':
    print("go south")
elif player == 'w':
    print("go west")
elif player == 'e':
    print("go east")
else:
    print("go nowhere!")