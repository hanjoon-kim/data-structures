var Stack = function() {
  this.someInstance = {};
  this.storage = {};
  this.key = 1;
};

Stack.prototype.push = function(value) {
  this[this.key] = value;
  this.storage = JSON.parse(JSON.stringify(this));
  this.key++;
};

Stack.prototype.pop = function() {
  if (this.size() > 0) {
    this.storage = JSON.parse(JSON.stringify(this));
    delete this[this.key];
    this.key--;
    return this.storage[this.key];
  }
};

Stack.prototype.size = function() {
  return this.key - 1;
}
