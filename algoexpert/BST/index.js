class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      searchTree(node);
    }
  }

  findClosestValueInBst(tree, target) {
    let closest = null;
    let closestDiff = Infinity;
    const traverse = function (node) {
      if (node.data === target) {
        return node.data;
      }
      if (Math.abs(node.data - target) < closestDiff) {
        closest = node.data;
        console.log({ closest });
        closestDiff = Math.abs(node.data - target);
      }
      if (node.data < target && node.right !== null) {
        return traverse(node.right);
      } else if (node.data > target && node.left !== null) {
        return traverse(node.left);
      }
    };
    traverse(this.root);
    return closest;
  }

  view() {
    return this.root;
  }
}

let bst = new BST();
bst.add(10);
bst.add(5);
bst.add(3);
bst.add(11);
// console.log(bst.view());
console.log(bst.findClosestValueInBst(null, 2));
