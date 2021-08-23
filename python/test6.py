# THIS PROGRAM RETURNS  HIGHEST AND LOWEST VALUE

n = 10
 
# Below line read inputs from user using map() function
initial = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]

inputLength = len(initial)

if inputLength  < 10 :
    print('Please enter 10 digits')
else:
    initial.sort()

smallest = str(initial[0])
largest = str(initial[inputLength-1])
    
print("Smallest number: "+smallest+"\nlargest number: "+largest)
        