class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`My name is a ${this.name}. It is a ${this.type} instrument.`);
  }
}

class Strings extends Instrument {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Wooow! The ${this.name} sounds just like a ${this.type}`);
  }
}
const piano = new Strings("piano", "string");
const drums = new Instrument("drum", "percussion");
console.log(drums.introduce());
