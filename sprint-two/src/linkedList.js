var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check if head is null
    if (list.head === null) {
      //instantiate head with value
      list.head = Node(value);
      list.tail = list.head;
      return;
    }
    //point to next new Node
    list.tail.next = Node(value);
    list.tail = list.tail.next;
  };

  list.removeHead = function() {
    //if null, error
    if (list.head === null) {
      return;
    }
    var previous = list.head.value;
    list.head = list.head.next;
    return previous;
    //point list.head to the head.next node

    
  };

  list.contains = function(target) {
    //set helper variable to equal list.head
    var finder = list.head; 
    //check head, if head.next exists, check, recurse through it
    while (finder !== null) {
      if (finder.value === target) {
        return true;
      }
      finder = finder.next;
    }
    return false;   
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   Add and remove is O(1), and contains is O(n);
 */
