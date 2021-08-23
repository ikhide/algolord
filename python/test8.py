# THIS PROGRAM CHECKS IF A STRING AND ITS REVERSE ARE THE SAME
initialList = [1,2,3,2,1]
reverseList = initialList[:]
reverseList.reverse()

if initialList == reverseList:
    print("List and its reverse are the same")
else:
    print("List and its reverse are not same")