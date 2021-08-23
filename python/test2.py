#PRINT NUMBER OF POSITIVE, NEGATIVE, ODD, EVEN,ZEROS

n = 20
 
# Below line read inputs from user using map() function
initial = list(map(int,input("\nEnter the numbers : ").strip().split()))[:n]


positiveCount= negativeCount= oddCount=evenCount=zeroCount = 0

if len(initial)  < 2:
    print('Please enter 20 digits')
else:
    for x in initial:
        if x > 0:
            positiveCount+=1
        if x < 0:
            negativeCount+=1
        if x % 2==0 and x != 0:
            evenCount+=1
        if x % 2 !=0:
            oddCount+=1
        if x == 0:
            zeroCount +=1

print('Positive count: '+ str(positiveCount)+"\nNegative Count: "+ 
     str(negativeCount)+"\nEven Count: "+ 
    str(evenCount)+"\nOdd Count: "+ 
    str(oddCount)+"\nZero Count: "+ 
    str(zeroCount))




