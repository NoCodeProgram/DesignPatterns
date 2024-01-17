# Normal class, objects
class Cat:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(self.name, 'meow')

kitty = Cat('kitty')
nabi = Cat('nabi')
kitty.speak()
nabi.speak()

if kitty == nabi:
    print('they are same')
else:
    print('they are not same')

# Singleton Pattern
class Singleton:
    _instance = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()

if s1 == s2:
    print('they are same, Singleton!')
else:
    print('they are not same')

# Singleton Cat
class SingleCat:
    _instance = None

    def __new__(cls, name):
        if not cls._instance:
            cls._instance = super(SingleCat, cls).__new__(cls)
            cls._instance.name = name
        return cls._instance

    def speak(self):
        print(self.name, 'meow')

sKitty = SingleCat('kitty')
sNabi = SingleCat('nabi')
sKitty.speak()
sNabi.speak()

if sKitty == sNabi:
    print('they are same')
else:
    print('they are not same')
