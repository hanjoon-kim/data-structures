var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = 'value';
};

setPrototype.contains = function(item) {
  return !!this.storage[item];
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
   Everything is O(1)
 */
