// going from top to bottom
// dfs
// post order


function diameter(node){
    let dia = 0;

    function height(node){
        if (!node){
            return 0;
        }

        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        let diam = leftHeight + rightHeight + 1;
        dia = Math.max(dia, diam);
        return Math.max(leftHeight, rightHeight) + 1;

    }

    height(node);

    return dia - 1;
}