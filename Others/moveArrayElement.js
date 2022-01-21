// move all instances of a number to the end of the array
function moveArrayElement(array, element) {
  newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === element) {
      newArray.push(array[i]);
    } else {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}

const moveElementToEnd = (array, toMove) => {
  let startPointer = 0;
  let endPointer = array.length - 1;
  while (startPointer < endPointer) {
    while (startPointer < endPointer && array[endPointer] === toMove)
      endPointer--;
    if (array[startPointer] === toMove) {
      const temp = array[endPointer];
      array[endPointer] = array[startPointer];
      array[startPointer] = temp;
    }
    startPointer++;
  }
  return array;
};

console.log(moveElementToEnd([1, 2, 3, 4, 4, 5], 4));
