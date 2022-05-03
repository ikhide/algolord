//

function largestInt(arr) {
  //sort
  const sortedArray = arr.sort();
  //remove negative numbers
  const positiveArray = [];
  for (let i = 0; i < sortedArray.length; i++) {
    if (Math.sign(sortedArray[i]) > 0) {
      positiveArray.push(sortedArray[i]);
    }
  }

  //loop through to find missing int
  if (positiveArray.length === 0) return 1;
  for (let i = 1; i < positiveArray[positiveArray.length - 1]; i++) {
    if (!positiveArray.includes(i)) return i;
  }
  return positiveArray[positiveArray.length - 1] + 1;
}

console.log(largestInt([1, 2, 3]));
