# functions are themself a values
# they can be used and worked with as values
# so we cen use function as input or output of diff function

def announce(f):
    def wrapper():
        print("about to run the function...")
        f()
        print("done with the function")
    return wrapper

@announce
def hello():
    print("hello world")

hello()
