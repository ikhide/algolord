# THIS PROGRAM RETURNS THE FACTORIAL OF A NON NEGATIVE NUMBER

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

n = int(input("Input a number to compute the factorial : "))

if n<1:
    print("Please Enter a positive integer")
else:
    print(factorial(n))
