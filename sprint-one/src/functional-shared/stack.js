var Stack = function() {
  var someInstance = {
    storage: {},
    key: 1
  };

  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this[this.key] = value;
    this.storage = JSON.parse(JSON.stringify(this));
    this.key++;
  },
  pop: function() {
    if (this.size() > 0) {
      this.storage = JSON.parse(JSON.stringify(this));
      delete this[this.key];
      this.key--;
      return this.storage[this.key];
    }
  },
  size: function() {
    return this.key - 1;
  }
};