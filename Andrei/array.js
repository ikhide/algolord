class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data = { ...this.data, [this.length]: value };
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    let item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new MyArray();
array.push("godson");
array.push("atakpu");
array.push("atakpu");
array.push("atakpu");
array.push("abigail");
array.deleteAtIndex(0);
array.deleteAtIndex(0);

console.log(array);
