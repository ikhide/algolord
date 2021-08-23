# THIS PROGRAM REVERSES A LIST OF NUMBERS

n = 10
 
# Below line read inputs from user using map() function
initial = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]

inputLength = len(initial)
reversedList = initial

if inputLength  < 10 :
    print('Please enter 10 digits')
else:
    reversedList.reverse()
    
print(reversedList)
        