// binary tree right side

var rightSide = function(root) {
    if(!root){
        return [];
    }
    
    let queue = [root];
    let res = []
    while(queue.length > 0){
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const pop = queue.shift();
            if( i == size - 1){
                res.push(pop.val)
            }
            if(pop.left){
                queue.push(pop.left)
            }            

            if(pop.right){
                queue.push(pop.right);
            }
        }        
    }
    
    return res;
};