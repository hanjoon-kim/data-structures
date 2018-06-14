class Stack {
  
  constructor() {
    this.someInstance = {};
    this.storage = {};
    this.key = 1;
  }

  push(value) {
    this[this.key] = value;
    this.storage = JSON.parse(JSON.stringify(this));
    this.key++;
  }

  pop () {
    if (this.size() > 0) {
      this.storage = JSON.parse(JSON.stringify(this));
      delete this[this.key];
      this.key--;
      return this.storage[this.key];
    }
  }

  size() {
    return this.key - 1;
  }
}