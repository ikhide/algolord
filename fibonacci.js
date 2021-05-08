const iterative = (n) => {
  if (n < 2) {
    return n;
  }
  let n1 = 0;
  let n2 = 1;
  let total = 0;
  for (let i = 1; i < n; i++) {
    total = n1 + n2;
    n1 = n2;
    n2 = total;
  }
  return total;
};

function iterative2(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

const recursive = (n) => {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return recursive(n - 1) + recursive(n - 2);
};

console.log(iterative2(8));
