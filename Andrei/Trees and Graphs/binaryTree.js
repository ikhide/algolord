class BinaryTree {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value === null) {
      this.value = value;
    } else {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BinaryTree();
        }
        this.left.insert(value);
      } else {
        if (this.right === null) {
          this.right = new BinaryTree();
        }
        this.right.insert(value);
      }
    }
  }

  lookup(value) {
    if (this.value === null) {
      return false;
    }
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.lookup(value);
    } else {
      if (this.right === null) {
        return false;
      }
      return this.right.lookup(value);
    }
  }
  remove(value) {
    const removeNode = (node, target) => {
      if (node === null) {
        return null;
      }
      if (target === node.value) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (target < node.value) {
        node.left = removeNode(node.left, target);
        return node;
      } else {
        node.right = removeNode(node.right, target);
        return node;
      }
    };
    removeNode(this, value);
  }

  breathFirstSearch() {
    let currentNode = this;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }
    return list;
  }

  dfsPreOrder() {
    let currentNode = this;

    const dfs = (node) => {
      let list = [node.value];
      if (node.left) {
        list.push(...dfs(node.left));
      }
      if (node.right) {
        list.push(...dfs(node.right));
      }
      return list;
    };

    return dfs(currentNode);
  }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(tree.lookup(170));
// console.log(tree.breathFirstSearch());
console.log(tree.dfsPreOrder());
