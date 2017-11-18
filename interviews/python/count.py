filePath = "/home/alisaleemh/Development/learning/interviews/python/count.test"

count = 0
with open(filePath) as fh:
  file = fh.read()
  for letter in file:
    if letter.isupper():
      count += 1

print count
