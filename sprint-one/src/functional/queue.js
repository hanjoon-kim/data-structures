var Queue = function() {
  var someInstance = {};
  var storage = {};
  var last = 1;
  var first = 1

  someInstance.enqueue = function(value) {
    someInstance[last] = value;
    storage = JSON.parse(JSON.stringify(someInstance));
    last++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      storage = JSON.parse(JSON.stringify(someInstance));
      delete someInstance[first]
      first++;
      return storage[first -1];
    };
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
