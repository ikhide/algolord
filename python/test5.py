# THIS PROGRAM PRINTS ALL LISTS PRESENT IN A LIST


a = [[1, 3, 4], [2, 5, 7],"money"]
for s in a:
  if type(s)==list:
      print(*s)