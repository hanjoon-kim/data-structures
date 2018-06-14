var Queue = function() {
  this.someInstance = {};
  this.storage = {};
  this.first = 1;
  this.last = 1;
};

Queue.prototype.enqueue = function(value) {
  this[this.last] = value;
  this.storage = JSON.parse(JSON.stringify(this));
  this.last++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    this.storage = JSON.parse(JSON.stringify(this));
    delete this[this.first];
    this.first++;
    return this.storage[this.first - 1];
  }
};

Queue.prototype.size = function () {
  return this.last - this.first;
};