array = '3456'
hashMap = {}


def tellUnique(array):
    hashMap = {}
    for letter in array:
        if letter not in hashMap:
            hashMap[letter] = True

        else:
            return "does have unique characters"
    return "does not have unique characters"


print tellUnique(array)
