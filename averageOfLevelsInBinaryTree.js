var averageOfLevel = (root) => {
    let res = [];

    if(!root){
        return res;
    }

    let queue = [root];

    while(queue.length > 0){
        let average = 0;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const pop = queue.shift();
            average += pop.val;
            if(pop.left){
                queue.push(pop.left)
            }            

            if(pop.right){
                queue.push(pop.right);
            }
        }
        average = average / size;
        res.push(average);
    }
    return res;

}