class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    console.log({ address });
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    let currentAddress = this.data[address];
    if (currentAddress) {
      for (let i = 0; i < currentAddress.length; i++) {
        if (currentAddress[i][0] === key) return currentAddress[i][1];
      }
    }
  }

  keys() {
    let keysArray = [];
    let keysArray2 = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", "bread");
myHashTable.set("orange", 300);
myHashTable.get("orange");
console.log(myHashTable.data);
// myHashTable.get("apples");
