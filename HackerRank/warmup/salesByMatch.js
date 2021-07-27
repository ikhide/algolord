function sockMerchant(n, ar) {
  // Write your code here
  let obj = {};
  let pairCount = 0;

  for (let i = 0; i < n; i++) {
    if (!obj[ar[i]]) {
      obj[ar[i]] = 1;
    } else if (obj[ar[i]] === 1) {
      pairCount++;
      obj[ar[i]] = false;
    }
  }

  return pairCount;
}
