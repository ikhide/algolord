class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    let currentIndex = 0;
    let objHead = this.head;
    while (currentIndex < index && objHead !== null) {
      objHead = objHead.next;
      currentIndex++;
    }
    let newItem = { value: value, next: objHead };

    return console.log(currentIndex, newItem);
  }
}

const myLinkedList = new LinkedList("Chicken");
myLinkedList.append("yogurt");
myLinkedList.append("Fish");
myLinkedList.prepend("Beef");
myLinkedList.insert(2, "bread");
console.log(myLinkedList.printList());
