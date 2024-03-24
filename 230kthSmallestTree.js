// inorder lowest user
const kthLowest = (root, k) => {
    let counter = 0;
    const helper = (root, k) => {
        if(root == null){
            return null;
        }

        let left = helper(root.left, k);

        if(left != null){
            return left;
        }

        counter++;

        if(counter == k){
            return root;
        }

        return helper(root.right, k)
    }

    return helper(root, k).val

}