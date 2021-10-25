const max = (A, k) => {
  let sumArr = [];
  for (i = 0; i < A.length; i++) {
    for (j = 0; j < A.length; j++) {
      sumArr.push([A[i] + A[j]]);
    }
  }

  let sorted = sumArr.sort().reverse();

  for (let i = 0; i < sorted.length; i++)
    if (sorted[i] < k) return sorted[i][0];

  return -1;
};

console.log(max([10, 20, 30], 31));
