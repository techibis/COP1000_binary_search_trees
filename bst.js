class BST {
  constructor(value){
    this.left  = null;
    this.right = null;
    this.value = value;
  }

  put(value) {
    if (this.contains(value)) {
      return alert('value alredy exits');
    }
    else {
      this.insert(value);
    }
  }

  insert(value){
    if(value < this.value){
      if(this.left){
        this.left.insert(value);
      }
      else{
        this.left = new BST(value);
      }
    }
    else if(value > this.value){
      if(this.right){
        this.right.insert(value);
      }
      else{
        this.right = new BST(value);
      }
    }
    return this;
  }

  contains(value){
    if(value === this.value){
      return true;
    }
    else if(value < this.value && this.left){
      return this.left.contains(value);
    }
    else if(value > this.value && this.right){
      return this.right.contains(value);
    }
    return false;
  }

  traverseDepthFirst_inOrder(fn){
    if(!this.left && !this.right){
      return fn(this);
    }

    if(this.left){
      this.left.traverseDepthFirst_inOrder(fn);
    }

    fn(this);

    if(this.right){
      this.right.traverseDepthFirst_inOrder(fn)
    };
  }

  traverseDepthFirst_preOrder(fn){
    fn(this);

    if(this.left){
      this.left.traverseDepthFirst_preOrder(fn);
    }

    if(this.right){
      this.right.traverseDepthFirst_preOrder(fn);
    }
  }

  traverseDepthFirst_postOrder(fn){
    
    if(this.left){
      this.left.traverseDepthFirst_postOrder(fn);
    }

    if(this.right){
      this.right.traverseDepthFirst_postOrder(fn);
    }

    fn(this);
  }

  findMin() {
    if (!this.left && !this.right) {
      return this;
    }

    if(this.left) {
      return this.left.findMin();
    }
  }

  findMax() {
    if (!this.right && !this.left) {
      return this;
    }

    if (this.right) {
      return this.right.findMax();
    }
  }

  deleteMin(){
    if (this.left) {
      if (!this.left.left && !this.left.right) {
        let min = this.left;
        this.left = null;
        return min;
      }

      return this.left.deleteMin();
    }
  }

  deleteMax(){
    if (this.right) {
      if (!this.right.right && !this.right.left) {
        let max = this.right;
        this.right = null;
        return max;
      }

      return this.right.deleteMax();
    }
  }
}

var mybst = new BST(30);

mybst.put(45);
mybst.put(15);
mybst.put(10);
mybst.put(50);
mybst.put(40);
mybst.put(20);
mybst.put(27);

//               30
//       15               45
//   10     20        40      50
//              27


// mybst.traverseDepthFirst_inOrder(node => console.log(node.value));
// mybst.traverseDepthFirst_preOrder(node => console.log(node.value));
// mybst.traverseDepthFirst_postOrder(node => console.log(node.value));

// let min = mybst.deleteMin();
// console.log('min >>>>> ', min);

// let max = mybst.deleteMax();
// console.log('max >>>>> ', max);