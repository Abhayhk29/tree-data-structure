var levelOrderBottom = function(root) {
    let curr = root;
    let nxt = root ? root.left : null;
    while (curr && nxt) {
        curr.left.next = curr.right;
        if (curr.next) {
            curr.right.next = curr.next.left;
        }
        curr = curr.next;
        if (!curr) {
            curr = nxt;
            nxt = curr.left;
        }
    }
    return root;
};