# THIS PROGRAM RETURNS 
# 1. Random color hex 
# 2. random alphabetical string 
# 3. Random value between to integers 
# 4. Random multiple of 7 between 0 and 70

import random
import string

r = lambda: random.randint(0,255)
print("Random Hex Color: "+'#%02X%02X%02X' % (r(),r(),r()))# SOLUTION 1

alphabets = list(string.ascii_lowercase)
randomString=''
i = 10
while i >= 0:
    randomString = randomString + alphabets[random.randint(0,25)]  
    i = i - 1

print("Random String: "+randomString)  # SOLUTION 2


randomValue= random.randint(1,10)

print('Random value between 1 and 10 inclusive: '+ str(randomValue)) # SOLUTION 3

multipleOf7=[]
for x in range(7,71):
    if x % 7 == 0:
        multipleOf7.append(x)

randomMultiple = multipleOf7[random.randint(0,len(multipleOf7)-1)]

print("Random multiple of 7 between 0 and 70: "+str(randomMultiple)) # SOLUTION 4