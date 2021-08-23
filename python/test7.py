# THIS PROGRAM RETURNS SUM, AVERAGE HIGHEST AND LOWEST VALUE

n = 20
 
# Below line read inputs from user using map() function
initial = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]

inputLength = len(initial)

if inputLength  < 20 :
    print('Please enter 20 digits')
else:
    initial.sort()

    smallest = str(initial[0])
    largest = str(initial[inputLength-1])
    sumTotal = 0

    for x in initial:
        sumTotal = sumTotal + x

    average = sumTotal/inputLength
        
    print("Sum: " + str(sumTotal) +"\nAverage: "+str(average)+"\nSmallest number: "+smallest+"\nlargest number: "+largest)
            