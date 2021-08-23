# THIS PROGRAM TAKES 10 DIGITS, REQUIRES YOU TO ADD ANOTHER AND CHECKS IF IT IS PRESENT IN THE PREVIOUS

n = 10
 
# Below line read inputs from user using map() function
initial = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]

inputLength = len(initial)
result = "No"

if inputLength  < 10 :
    print('Please enter 10 digits')
else:
    i = 0
    newInput = int(input("Enter Another Number"))
    while i<10:
        if initial[i] == newInput:
            result = "Yes"
            break
        else:
            i = i+1
    
print(result)
        


