const array = Array(10001)
  .fill(0)
  .map((_, index) => index);

const bruteForce = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [i, j];
      }
    }
  }
  return "not found";
};

const optimized = (arr, sum) => {
  const map = {};
  arr.forEach((item, i) => (map[item] = i));
  for (let i = 0; i < arr.length; i++) {
    const diff = sum - arr[i];
    if (map[diff]) {
      return [i, map[diff]];
    }
  }
  return "not found";
};

let t0 = process.hrtime();
// console.log(bruteForce(array, 1999));

console.log(optimized(array, 20000));

let t1 = process.hrtime(t0);

console.log("Loop took " + t1[1] / 1000000 + "ns");
