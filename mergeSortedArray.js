const mergeSortedArray = (arr1, arr2) => {
  let sortedArray = [...arr1, ...arr2].sort();
  return sortedArray;
};

const mergeSortedArray2 = (arr1, arr2) => {
  let sortedArray = [];
  array1Index = arr1[0];
  array2Index = arr2[0];
  let i = 0;
  let j = 0;

  while (array2Index || array1Index) {
    console.log([array1Index, array2Index]);

    if (!array2Index || array1Index < array2Index) {
      sortedArray.push(array1Index);
      i++;
      array1Index = arr1[i];
    } else {
      sortedArray.push(array2Index);
      j++;
      array2Index = arr2[j];
    }
  }
  return sortedArray;
};

console.log(mergeSortedArray2([0, 3, 4, 31], [4, 6, 30]));
