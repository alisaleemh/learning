
a = '12345678'
b = '12345687'

def anagrams(str1, str2):
  
  
  if len(str1) != len(str2):  return False 
  
  i = 0
  str1 = sorted(str1)
  str2 = sorted(str2)
  
  while i < len(str1):
    if str1[i] != str2[i]: return False
    i += 1

  return True
print anagrams(a,b)  
  
    
  
 
def ana(str1, str2):
  return sorted(str1) == sorted(str2)    

print ana(a,b) 
