function minimumSwaps(arr) {
  let count = 0;
  const sortedArray = [...arr].sort();

  for (let i = sortedArray.length - 1; i >= 0; i--) {
    currentValue = i + 1;
    currentPosition = arr.indexOf(currentValue);
    if (currentPosition !== i) {
      let prevValue = arr[i];
      arr.splice(i, 1, currentValue);
      arr.splice(currentPosition, 1, prevValue);
      count++;
    }
  }
  return count;
}

console.log(minimumSwaps([4, 3, 1, 2]));
