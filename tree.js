//tree
// value 
// node left
// node right 

// properties
// size = total number of nodes
// child : any nodes have same parent sibling
// Edge two node connecting by line
// nodes : 
// height : maximum number of edges between tewo nodes/ from the node 
// leaf buttom node
// level : height height of root - node
// ancestor 
// decendent

// type of binary tree
// complete binary tree : all the levels full L to R apart from the last level
// full bt / strict binary tree : each has zero or 2 children  compression - huffman algorithm
// perfect binary tree :- two nodes al level 

// height balanced tree : o(log(n))
// skewed BT (has only one child)
// ordered binary tree : every nide as some property : Binary search treee
// totalProperties
// perfect BT height = h
// total node 2 ^(n+1) - 1 : 2 ^ height
// n umber of nodes : k Level = log N + 1

// strict binart tree : number of internal nods + 1
// degree : 0 and 1
// number of leaf nodes


// Implementation 
// Linked Represtentation
// sequentail Representation


// time complexi : 
//  n = 2 ^ n
// h = log(n)
// insert (left , right)

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(value < root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }

            if(curr.right){
                queue.push(curr.right);
            }
        }

    }

    min(root){
        if(!root.left){
            return root.value;
        }
        return this.min(root.left);
    }

    max(root){
        if(!root.right){
            return root.value;
        }

        return this.max(root.right);
    }

    delete(value){
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root,value){
        if(root === null){
            return root;
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        }else if (value > root.value){
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            } else if (!root.right){
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;

    }


}

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

// preorder : Node -L Left -> Right copy of tree   or math expression and serialization
// inorder = > Left -> Node -> Right : sorted order
// post order : L - right - Node : Delete a binary tree and Height of three
// Breadth first search
// Dfs Depth first search


class BinarySearchTreeSec {

}


























