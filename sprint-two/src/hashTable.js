

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if key in storage exists
  var innerArray = this._storage.get(index); 
  //use limitedArray to set value at the index
  if (!Array.isArray(innerArray)) {
    this._storage.set(index, []);
  }
  if (Array.isArray(innerArray)) {
    innerArray.forEach(elem => {
      if (elem[0] === k) {
        elem[1] = v;
        return;
      }
    });
  }
  this._storage.get(index).push([...arguments]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if key is equal to 
  var innerArray = this._storage.get(index);
  //pass the key into the storage(limited array) and get the value;
  var val;

  if (Array.isArray(innerArray)) {
    innerArray.forEach(elem => {
      if (elem[0] === k) {
        val =  elem[1];
      }
    });
  }
  
  return val;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var removeHelper = function(index) {
    var key = index;
    
    return function(elem, i, storage) {
      if (i === key) {
        storage[i] = undefined;
      }
    }; 
  };

  var deleter = removeHelper(index);
  this._storage.each(deleter);
};



/*
 * Complexity: What is the time complexity of the above functions?
   Insert and retrieve are O(1) and remove is O(n)
 */


