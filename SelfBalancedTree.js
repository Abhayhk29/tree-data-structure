// AVL
// Lots of moving parts
// small : left 
// big: Right
// define the problem
// difference height should be only <= 1 => Balanced tree 

// Algorithh :- Insert Normal n
// start from node (n) and find the node that makes the graphs unbalanced buttom up
// using number of the 4 rule to rotate

// Time Complexity :--- log(n)
// 

class BinaryTree{
    constructor() {
        this.root = null;
        // this.height = 0/;
    }

    insert(data){
        const newValue = new Node(data);

        if(!this.root){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(!node.left){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode);
            }
        } else {
            if(!node.right){
                node.right = newNode;
            } else{
                this.insertNode(node.right, newNode)
            }
        }

        return rotate(node);
    }

    rotate(node){

    }

    search(data) {
        return this.searchNode(this.root, data);
      }
    
      searchNode(node, data) {
        if (!node) {
          return false;
        }
    
        if (data < node.value) {
          return this.searchNode(node.left, data);
        } else if (data > node.value) {
          return this.searchNode(node.right, data);
        } else {
          return true;
        }
      }


      height(){
        return this.calculateHeight(this.root);
      }

      calculateHeight(node){
        if(!node){
            return -1;
        }

        const leftHeight = this.calculateHeight(node.left);
        const RightHeight = this.calculateHeight(node.right);

        return Math.max(leftHeight, RightHeight) + 1;
      }

      balanceTree(){
        return this.balancedTree(this.root);
      }

      balancedTree(node){
        if(!node){
            return true;
        }

        return Math.abs(this.height(node.left) - this.height(node.right)) <= 1 && this.balancedTree(node.left) && this.balancedTree(node.right);
      }

      preorder(){
        preorderPr(this.root);
      }


      preorderPr(node){
        if(!node){
            return;
        }
        console.log(node.value);
        this.preorderPr(node.left)
        this.preorderPr(node.right)
      }

      inorderPr(node){
        if(!node){
            return;
        }
        this.preorderPr(node.left)
        console.log(node.value);
        this.preorderPr(node.right)
      }

      postorderPr(node){
        if(!node){
            return;
        }
        this.preorderPr(node.left)
        this.preorderPr(node.right)
        console.log(node.value);
      }
      
    
}


class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
      this.height = 1;
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    height(node) {
      return node ? node.height : 0;
    }
  
    balanceFactor(node) {
      return this.height(node.left) - this.height(node.right);
    }
  
    updateHeight(node) {
      node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
  
    rotateRight(y) {
      const x = y.left;
      const T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    rotateLeft(x) {
      const y = x.right;
      const T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    insert(root, data) {
      if (!root) {
        return new Node(data);
      }
  
      if (data < root.data) {
        root.left = this.insert(root.left, data);
      } else if (data > root.data) {
        root.right = this.insert(root.right, data);
      } else {
        // Duplicate values are not allowed in this example
        return root;
      }
  
      // Update height of current node
      this.updateHeight(root);
  
      // Get the balance factor to check for rotations
      const balance = this.balanceFactor(root);
      
    //   if height of left - height of right > 1
      // Left Heavy
      if (balance > 1) {
        if (data < root.left.data) {
          // Left Left Case
          return this.rotateRight(root);
        } else {
          // Left Right Case
          root.left = this.rotateLeft(root.left);
          return this.rotateRight(root);
        }
      }
  
      // Right Heavy
      if (balance < -1) {
        if (data > root.right.data) {
          // Right Right Case
          return this.rotateLeft(root);
        } else {
          // Right Left Case
          root.right = this.rotateRight(root.right);
          return this.rotateLeft(root);
        }
      }
  
      return root;
    }
  
    insertNode(data) {
      this.root = this.insert(this.root, data);
    }
  
    inOrderTraversal(node, callback) {
      if (node !== null) {
        this.inOrderTraversal(node.left, callback);
        callback(node.data);
        this.inOrderTraversal(node.right, callback);
      }
    }
  
    inOrder(callback) {
      this.inOrderTraversal(this.root, callback);
    }
  }
  
  // Example usage:
  
  const avlTree = new AVLTree();
  
  avlTree.insertNode(10);
  avlTree.insertNode(5);
  avlTree.insertNode(15);
  avlTree.insertNode(3);
  avlTree.insertNode(7);
  avlTree.insertNode(12);
  avlTree.insertNode(18);
  
  console.log("In-order traversal of AVL tree:");
  avlTree.inOrder((data) => console.log(data));
  
