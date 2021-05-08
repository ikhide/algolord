//Create a function that returns true when two arrays
//Contains common items.

const array1 = ["a", "b", "c", "d"];
const array2 = ["x", "y", "z", "a"];

//Solution 1
function containsCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

// console.log(containsCommonItems(array1, array2));

//This is the brute force approach
//You may not code this but explain why it works and why it is not the best solution
//time complexity is too high for large inputs - O(n*m)
//Space complexity - O(1)

//Solution 2

function containsCommonItems2(arr1, arr2) {
  // convert first array to object using for loop
  map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) map[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) return true;
  }
  return false;

  // check if items in second loop is equal to object key using for loop
}

// console.log(containsCommonItems2(array1, array2));
//This is a better solution as regards time complexity but not space complexity
//time complexity - O(n+m)
//space complexity = O(n+1) = O(n)

//Solution 3
function containsCommonItems3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

// console.log(containsCommonItems3(array1, array2));
// Most advanced solution
// Using inbuilt javascript array methods
