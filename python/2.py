import sys

array = []
count = 0

for line in sys.stdin:

    if line != '\n':
        line = line.strip('\n')
        array.append(line)

        match = array[len(array)-1]

    for item in array:
        item = str(item)
        if item.startswith(match) and count <= 3:
            count += 1
            print (item)
