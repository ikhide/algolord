// determine number of valid BSTs for a given integer that can be created from 1 to n
function numBST(nodeValues) {
  let numBSTs = [];
  for (let i = 0; i < nodeValues.length; i++) {
    numBSTs.push(numBSTHelper(nodeValues[i]));
  }
  return numBSTs;
}

function numBSTHelper(n) {
  if (n === 1) {
    return 1;
  }
  let numBSTs = 0;
  for (let i = 1; i <= n; i++) {
    numBSTs += numBSTHelper(i - 1) * numBSTHelper(n - i);
  }
  return numBSTs;
}
