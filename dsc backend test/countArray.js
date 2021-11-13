function numberOfItems(arr, item) {
  let totalCount = 0; // totalCount is now local
  for (let i = 0; i < arr.length; i++) {
    // iterate on arr
    let isArray = arr[i].constructor === Array; // if the element is a nested array
    if (isArray) {
      totalCount += numberOfItems(arr[i], item);
    } // recursion, using the return value

    let isInArray = arr[i] === item; // ELSE if the item is in the arr
    if (isInArray) {
      totalCount++;
    }
  }
  return totalCount; // the length of the sum array show how many items founded
}

var arr = [25, "apple", ["banana", "strawberry", "apple", "apple", 25]];

console.log(numberOfItems(arr, "apple"));
