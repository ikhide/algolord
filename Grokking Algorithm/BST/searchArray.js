const array = Array.from({ length: 2000000 }, (_, i) => i + 1);

const findNumber = (array, number) => {
  return array.findIndex((item) => {
    return item === number;
  });
};

const findNumberBst = (
  array,
  number,
  lowestIndex = 0,
  highestIndex = array.length - 1
) => {
  const midIndex = Math.floor((highestIndex + lowestIndex) / 2);

  if (lowestIndex <= highestIndex) {
    const searchValue = array[midIndex];
    if (number === searchValue) {
      return midIndex;
    } else if (number < searchValue) {
      return findNumberBst(array, number, lowestIndex, midIndex - 1);
    } else {
      return findNumberBst(array, number, midIndex + 1, highestIndex);
    }
  }

  return -1;
};

console.time("findNumberBst");
console.log(findNumberBst(array, 1999999));
console.timeEnd("findNumberBst");

console.time("findNumber");
console.log(findNumber(array, 1999999));
console.timeEnd("findNumber");
