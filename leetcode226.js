function invertTree(root){
    if(!root){
        return null;
    }

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// time : O(n)
// space : O(logn)


