// Data
// pointer to the left child
// pointer to the right child
class Node{
    constructor(item) {
        this.val = item;
        this.left = null;
        this.right = null;
    }
}

// Basic Operations on Binary Tree:--
// inserting an element
// removing an element
// searching of an element
// Deletion For an element
// Traversing an element : Four types

// Auxiliary Operations On Binary Tree:
// Finding the height of the tree
// Find the Level of the tree
// Finding the size of the entire tree


// Applications of Binary Tree:

// decision making process
// Searching Algorithm 
// Binary tree can be used implement sorting algorithm 

// Binary Tree Traversals:
// DepthFirst Search
// breadth First search level by levekl

// DFS :
// Preorder : Root -> Left -> Child
// Inorder : Left -> root -> right
// Postorder : Left -> Right -> root 

// BFS
// level order traversal

//       1
//    /      \
//    2       3
//   /  \    /  \
//  4    5   6   7

// PreOrder : 1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7
// In Order : -  4 - 2 -5 - 1- 6 - 3- 7
// Post Order : 4 -> 5 -> 2 - > 6 -> 7 -> 3 -> 1

// Level order - traversal -> 1 -> 2-> 3 -> 4 -> 5 -> 6 -> 7


// implementation Of Binary Tree :--

// Binary : at most 2 child nodes 

// Maximum numbers of nodes at level  'l' of a binary tree is 2^l

// for root L = 0 2^0 : 1
// Maximum number of nodes in a binary tree of height ‘h’ is 2h – 1:
// In a Binary Tree with N nodes, the minimum possible height or the minimum number of levels is Log2(N+1):



// height of a tree
// Height of empty tree : 0
// height of tree with single node : 1

const maxDepth = (node) => {
    if(node === null){
        return 0;
    }

    let Ldepth = maxDepth(node.left);
    let rDepth = maxDepth(node.right);

    return Math.max(Ldepth, rDepth) + 1;
}

let root = new Node(1)
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(maxDepth(root));

// time complexity : O(n)
// space O(n)

// Level Order Traversl height find

function newNode(key){
    return new Node(key);
}

const levelOrderTraversal = (root) => {
    if(root == null){
        return 0;
    }

    let depth = 0;
    let queue = [root];
    while(queue.length > 0){
        console.log(JSON.stringify(queue))
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let temp = queue.shift();
            if(temp.left != null){
                queue.push(temp.left);
            }

            if(temp.right != null){
                queue.push(temp.right);
            }
        }
        depth++;
    }

    return depth;
}

let root1 = newNode(1);
root1.left = newNode(2);
root1.right = newNode(3);
root1.left.left = newNode(4);
root1.left.right = newNode(5);


console.log(levelOrderTraversal(root))

// Time complexity : O(n)
// space Complexity : O(n)

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node,newNode){
        if(newNode.val > node.val){
            if(node.right === null){
                node.right = newNode;
            }else{
                this._insertNode(node.right, newNode);
            }
        } else if(newNode.val < node.val) {
            if(node.left === null){
                node.left = newNode;
            }else{
                this._insertNode(node.left,newNode);
            }
        }
    }

    search(value){
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value){
        if(node === null){
            return false;
        }

        if(value > node.val){
            return this._searchNode(node.right, value);
        }else if(node.val > value){
            return this._searchNode(node.left, value);
        } else{
            return true;
        }
    }

    delete(val){
        this.root = this._deleteNode(val);
    }

    _deleteNode(node,value){
        if(node === null){
            return null;
        } else if(value < node.val){
            node.left = this._deleteNode(node.left,value);
        } else if (value > node.val){
            node.right = this._deleteNode(node.right,value);
        }else{
            if(node.left === null){
                return node.right;
            } else if(node.right === null){
                return node.left;
            }

            const minRightNode = this.findMinNode(node.right);
            node.value = minRightNode.val;
            node.right = this._deleteNode(node.right, minRightNode.val);
        }

        return node;
    }

    findMinNode(node) {
        while (node.left !== null) {
          node = node.left;
        }
        return node;
      }

      inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.val)
            this.inorder(root.right)
        }
      }

      preorder(root){
        if(root){
            console.log(root.val)
            this.preorder(root.left)
            this.preorder(root.right)
        }
      }

      postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.val)
        }
      }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// console.log(JSON.stringify(tree.root))
console.log(tree.search(181))
console.log("------------------------------------------")
tree.inorder(tree.root);
console.log("------------------------------------------")
tree.preorder(tree.root);
console.log("------------------------------------------")
tree.postorder(tree.root);


// example of Inorder, PreOrder and  PostOrder

//       22
//     /   \
//   12     30
//   / \     /  \
//  8   20   25  40


// inorder (Left Current Right) : 8 -> 12 -> 20 -> 22 -> 25 -> 30 -> 40
// preorder : (Root -> Left -> Right)  22 -> 12 -> 8 -> 20 -> 30 -> 25 -> 40
// Postorer : (Left -> Right -> Current) 8 -> 20 -> 12 -> 25 -> 40 > 30 -> 22



