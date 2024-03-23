/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return [];
    }
    
    let queue = [root];
    let zigzag = true;
    let res = []
    while(queue.length > 0){
        let dummy = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const pop = queue.shift();
            dummy.push(pop.val);
            if(pop.left){
                queue.push(pop.left)
            }            

            if(pop.right){
                queue.push(pop.right);
            }
        }
        if(zigzag){
            res.push(dummy);
            zigzag = false;
        }else{
            res.push(dummy.reverse());    
            zigzag = true;
        }
        
        
    }
    
    return res;
};