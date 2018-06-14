var Queue = function() {
  var someInstance = {
    storage: {},
    last: 1,
    first: 1
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.last] = value;
    this.storage = JSON.parse(JSON.stringify(this));
    this.last++;
  },
  dequeue: function() {
    if (this.size() > 0) {
      this.storage = JSON.parse(JSON.stringify(this));
      delete this[this.first];
      this.first++;
      return this.storage[this.first - 1];
    }
  },
  size: function() {
    return this.last - this.first;
  }
};
