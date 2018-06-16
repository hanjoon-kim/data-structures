class BinarySearchTree {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    //if left and right is null do this
    //if parent node is greater than input
    if (this.value > value) {
      //input is set to parent node's left
      if (this.left === null) {
        this.left = new BinarySearchTree(value);  
      } else {
        this.left.insert(value);
      }
      
    }
    //if parent node is less than input
    if (this.value < value) {
      //input is set to parent node's right
      if (this.right === null) {
        this.right = new BinarySearchTree(value);  
      } else {
        this.right.insert(value);
      }
    }
      
    //if parent node equals input
    if (this.value === value) {
      //do nothing
    }

  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    
    if (this.value < value && this.right !== null) {
      return this.right.contains(value);
    }

    if (this.value > value && this.left !== null) {
      return this.left.contains(value);
    }

    if (this.left === null || this.right === null) {
      return false;
    }

  }

  depthFirstLog(cb) {
    this.value = cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
    
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
