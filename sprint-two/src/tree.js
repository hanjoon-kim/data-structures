var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  
  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  //create newTree and push to children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var contain = false;
  //check if target is equal to the value in object
  if (this.value === target) {
    return true; //contain = true;
  }
  //check if children exist
  if (this.children !== undefined && this.children.length > 0) {
    //iterate through children
    this.children.forEach(child => {
      contain = contain || child.contains(target);
    });
  }
  return contain;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
