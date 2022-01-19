// sum of all left node in a binary tree
function sumOfLeftLeaves(root) {
  if (!root) return 0;
  let sum = 0;
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }
  sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  return sum;
}
