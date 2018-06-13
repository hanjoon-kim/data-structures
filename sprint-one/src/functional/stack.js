var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // storage will hold the stack
  var storage = {};

  var key = 1;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[key] = value;
    storage = JSON.parse(JSON.stringify(someInstance));
    key++;
  }

  someInstance.pop = function() {
    if (someInstance.size() > 0) {
      storage = JSON.parse(JSON.stringify(someInstance));
      delete someInstance[key];
      key--;
      return storage[key];
    }
  };

  someInstance.size = function() {
    return key - 1;
  };

  return someInstance;
};
