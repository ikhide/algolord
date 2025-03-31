const list = [3, 4, 6, 2, 33, 1, 5, 5, 7, 7, 8, 9, 0, 10];
// Sorting algorithms implementations

const test1 = (arr) => {
  const sorted = [];

  while (list.length) {
    const lowest = Math.min(...arr);
    const lowestPosition = arr.indexOf(lowest);

    sorted.push(lowest);
    arr.splice(lowestPosition, 1);
  }
  return sorted;
};

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = { value: arr[i], index: i };

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < temp.value) {
        temp = { value: arr[j], index: j };
      }
    }
    arr.splice(arr.indexOf(temp.index), 1, arr[i]);
    arr[i] = temp.value;
  }
  return arr;
}

console.log(selectionSort(list));

function insertionSort(arr) {}

function mergeSort(arr) {}

function quickSort(arr) {}

function heapSort(arr) {}

function radixSort(arr) {}

function countingSort(arr) {}

function bucketSort(arr) {}

function shellSort(arr) {}
