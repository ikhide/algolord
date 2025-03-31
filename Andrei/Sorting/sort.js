const array = Array(10001)
  .fill(0)
  .map((_, index) => index);
const list = [
  ...array.reverse(),
  3,
  4,
  6,
  2,
  33,
  1,
  5,
  ...array,
  5,
  7,
  7,
  8,
  9,
  0,
  10,
];
// Sorting algorithms implementations

const test1 = (arr) => {
  const sorted = [];

  while (arr.length) {
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
    let min = { value: arr[i], index: i };

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min.value) {
        min = { value: arr[j], index: j };
      }
    }

    arr[min.index] = arr[i];
    arr[i] = min.value;
  }
  return arr;
}

let t4 = process.hrtime();
console.log("test1 ", test1([...list]));
let t5 = process.hrtime(t4);

let t0 = process.hrtime();
console.log("bubble ", bubbleSort([...list]));
let t1 = process.hrtime(t0);

let t2 = process.hrtime();
console.log("selectionSort ", selectionSort([...list]));
let t3 = process.hrtime(t2);

console.log("bubble took " + t1[1] / 1000000 + "ms ");
console.log("selectionSort took " + t3[1] / 1000000 + "ms ");
console.log("test1 took " + t5[1] / 1000000 + "ms ");

function insertionSort(arr) {}

function mergeSort(arr) {}

function quickSort(arr) {}

function heapSort(arr) {}

function radixSort(arr) {}

function countingSort(arr) {}

function bucketSort(arr) {}

function shellSort(arr) {}
