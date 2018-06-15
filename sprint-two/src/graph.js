

// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
  this.edgeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //if nodeList does not have node
  if (!this.contains(node)) {
    //add node to nodeList
    this.nodeList.push(node);
    this.edgeList[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { 
  //check if nodeList includes node
  return this.nodeList.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if nodeList contains node
  if (this.contains(node)) {
    var toNodes = this.edgeList[node];

    toNodes.forEach(elem => {
      this.removeEdge(elem, node);
    });

    this.nodeList.splice(this.nodeList.indexOf(node), 1);
    delete this.edgeList[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if graph doesnt include fromNode break
  if (!this.contains(fromNode)) {
    return;
  }
  //return whether toNode is included in the fromNode's key
  return this.edgeList[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if graph doesnt include fromNode break
  if (Object.keys(this.edgeList).includes(fromNode)) {
    return;
  }
  //push toNode to fromNode's key
  this.edgeList[toNode].push(fromNode);
  this.edgeList[fromNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //if fromNode is in toNode and toNode is in fromNode
  if (this.contains(fromNode) && this.contains(toNode)) {
    //remove from edgelist
    this.edgeList[fromNode].splice(this.edgeList[fromNode].indexOf(toNode), 1);
    this.edgeList[toNode].splice(this.edgeList[toNode].indexOf(fromNode), 1);
  }
  //print error message
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodeList.forEach(node => {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


