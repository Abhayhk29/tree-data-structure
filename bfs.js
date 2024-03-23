// print in level order
// breadth level search
// go level by level
// whent to use: 1. when answers lies near the root 2. search by the level

// time complexity :- o(n)
// space complexity : O(n)


var bfs = (root) => {
    let res = [];

    if(!root){
        return res;
    }

    let queue = [root];

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
        res.push(dummy);
    }
    return res;

}
