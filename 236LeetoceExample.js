// time complexity : )(Log(n))
// space O(1)

const lowestCommonAncestor = (node, p ,q) => {
    // let curr = node;

    // while(curr){
    //     if(p.val > curr.val && q.val > curr.val){
    //         curr = curr.right
    //     } else if(p.val < curr.val && q.val < curr.val){
    //         curr = curr.left;
    //     } else {
    //         return curr
    //     }
    // }
    if(root == null){
        return null;
    }

    if(root == p || root == q){
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(left != null && rightm!== null){
        return root;
    }

    return left == null ? right : left;

}