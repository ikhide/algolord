// Find all pairs in an array of integers whose sum is equal to a given number
let arr = [1, 5, 6, 1, 1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];

    if (sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }

    sumsLookup[arr[i]] = true;
  }

  return output;
};
console.log(findSumPairs(arr, 6));
