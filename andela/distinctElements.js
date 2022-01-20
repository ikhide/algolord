// function that returns highest difference in a array adnd the pairs themselves
// function closestNumbers(arr) {
//   highest = 0;
//   highestPairs = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let diff = arr[i + 1] - arr[i];
//     if (diff > highest) {
//       highest = diff;
//       highestPairs = [[arr[i], arr[i + 1]]];
//     } else if (diff === highest) {
//       highestPairs.push([arr[i], arr[i + 1]]);
//     }
//     console.log(highestPairs);
//   }
// }

function closestNumbers(arr) {
  let lowest = 1000000000000;
  let lowestPairs = [];
  arr = arr.sort((a, b) => a - b);
  arr = [...new Set(arr)];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff < lowest) {
      lowest = diff;
      lowestPairs = [arr[i], arr[i + 1]];
    } else if (diff === lowest) {
      lowestPairs.push(arr[i]);
      lowestPairs.push(arr[i + 1]);
    }
  }
  console.log(lowestPairs.join(" "));
}

closestNumbers([4, 4, 2, 1, 3]);

// function closestNumbers(array) {
//   let minDiff = 1000000000000000000;
//   for (let i = 0; i < array.length - 1; i++) {
//     let diff = array[i + 1] - array[i];
//     if (diff < minDiff) {
//       minDiff = diff;
//     }
//   }
//   let elements = [];
//   console.log({ minDiff });
//   for (let i = 0; i < array.length - 1; i++) {
//     let diff = array[i + 1] - array[i];
//     console.log(diff);
//     if (diff == minDiff) {
//       elements.push(array[i]);
//       elements.push(array[i + 1]);
//     }
//   }
//   elements = elements.sort((a, b) => a - b);
//   console.log(elements.join(" "));
// }
