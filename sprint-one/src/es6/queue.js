class Queue {
  
  constructor() {
    this.someInstance = {};
    this.storage = {};
    this.first = 1;
    this.last = 1;
  }

  enqueue(value) {
    this[this.last] = value;
    this.storage = JSON.parse(JSON.stringify(this));
    this.last++;
  }

  dequeue() {
    if (this.size() > 0) {
      this.storage = JSON.parse(JSON.stringify(this));
      delete this[this.first]
      this.first++;
      return this.storage[this.first -1];
    };
  }

  size() {
    return this.last - this.first;
  }
}