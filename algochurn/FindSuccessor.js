//Given the root of a binary tree and a node in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree, return null

function findSuccessor(tree, targetNode) {
    let arr = []
    inorderTraverse(tree, arr)

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === targetNode.val) return arr[i + 1] || null
    return null
}
function inorderTraverse(tree, arr) {
    if (!tree) return
    inorderTraverse(tree.left, arr)
    arr.push(tree.val)
    inorderTraverse(tree.right, arr)
}


class BinaryTree {
    constructor(val) {
        this.left = null
        this.right = null
        this.val = val
    }
}

let tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.right = new BinaryTree(3)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.left.left.left = new BinaryTree(6)
tree.right = new BinaryTree(3)


let targetNode = tree.left.right; // node 5
console.log(findSuccessor(tree, targetNode))
