# THIS PROGRAM MULTIPLIES ALL ELEMENTS IN A LIST

n = 10
 
# Below line read inputs from user using map() function
initial = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]

inputLength = len(initial)
productTotal = 1

if inputLength  < 10 :
    print('Please enter 10 digits')
else:
    for x in initial:
        productTotal = productTotal * x
       
    
print(productTotal)
        