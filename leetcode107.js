var levelOrderBottom = function(root) {
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
       res.unshift(dummy);
   }
   return res;
};