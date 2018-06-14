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
  children.push(Tree(value));
};

treeMethods.contains = function(target) {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
