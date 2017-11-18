import random

size = 5*1000000
list = random.sample(range(1,size),size-1)

  
def count_list (list):
  count = 0
  for element in list:
    count += 1
  return count


print count_list(list)
