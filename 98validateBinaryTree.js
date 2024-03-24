// var A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// O(n)

const validate = (root) => {
    const helper = (node, low, heigh) =>{
        if(!node){
            return true;
        }

        if(low != null && node.val <= low){
            return false;
        }

        if(heigh != null && node.val >= heigh){
            return false;
        }

        let leftLow = helper(node.left,  low, node.val)
        let rightLow = helper(node.right, node.val, heigh);

        return leftLow && rightLow;
    }

    return helper(root, null, null)
}