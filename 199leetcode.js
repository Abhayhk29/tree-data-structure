var isCousins = function(root, x, y) {
    let xx = findNode(root, x);
    let yy = findNode(root, y);
    return (
      level(root, xx, 0) === level(root, yy, 0) && !isSibling(root, xx, yy)
    );
      
      function findNode(node, x) {
    if (node === null) {
      return null;
    }
    if (node.val === x) {
      return node;
    }
    let n = findNode(node.left, x);
    if (n !== null) {
      return n;
    }
    return findNode(node.right, x);
  }
  
  function isSibling(node, x, y) {
    if (node === null) {
      return false;
    }
    return (
      (node.left === x && node.right === y) ||
      (node.left === y && node.right === x) ||
      isSibling(node.left, x, y) ||
      isSibling(node.right, x, y)
    );
  }
  
  function level(node, x, lev) {
    if (node === null) {
      return 0;
    }
    if (node === x) {
      return lev;
    }
    let l = level(node.left, x, lev + 1);
    if (l !== 0) {
      return l;
    }
    return level(node.right, x, lev + 1);
  }
  
  };