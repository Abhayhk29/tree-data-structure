// flattern leetcode
// using queue :
// after that form the link list O(n)

// preorder : R -> Left -> Right

function flattern(root){
    let current = node;
    while (current !== null) {
        if(current.left !== null){
            let temp = current.left;
            while(temp.right !== null){
                temp = temp.right;
            }

            temp.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;    
    }
}