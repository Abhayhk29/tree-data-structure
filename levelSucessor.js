const levelSucessor = (root, key) => {
    let res = [];

    if(!root){
        return res;
    }

    let queue = [root];

    while(queue.length > 0){
        const pop = queue.shift();
        if(pop.left){
            queue.push(pop.left)
        }            

        if(pop.right){
            queue.push(pop.right);
        }

        if(pop.val === key){
            break;
        }
    }
    return queue[0];
}