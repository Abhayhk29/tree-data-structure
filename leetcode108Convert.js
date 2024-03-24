// balanced binary search tree
// depth of the two sub array node never differ from 1
// concept binary search 

function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
    
    function sortedArrToBst(arr,start,end){
        if(start > end){
            return null;
        }
        
        let mid = parseInt((start + end) / 2);
        let node = new TreeNode(arr[mid]);
        
        node.left = sortedArrToBst(arr,start, mid - 1);
        node.right = sortedArrToBst(arr,mid+ 1, end);
        
        return node;
    }
    
    return sortedArrToBst(nums, 0, nums.length - 1)
};