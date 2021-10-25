countEle = (arr) => {
  let freq = {};
  let result = 0;

  for (let i = 0; i < arr.length; i++) freq[arr[i]] = (freq[arr[i]] || 0) + 1;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + 1;
    freq[sum] && result++;
  }

  return result;
};

// console.log(countEle([1, 1, 2, 2]));

function countE(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (arr.includes(val + 1)) {
      res += 1;
    }
    return res;
  }
}
