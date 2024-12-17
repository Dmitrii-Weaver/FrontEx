const depthFirstSearch = (tree) => {
    const finalArray = []
    depthFirstSearchHelper(tree, finalArray)
    return finalArray
}
const depthFirstSearchHelper = (tree, array) => {
    if (!tree) return
    array.push(tree.value)
    depthFirstSearchHelper(tree.left, array)
    depthFirstSearchHelper(tree.right, array)
}

class BST {
    constructor(value) {
        this.left = null
        this.value = value
        this.right = null
    }
}

const tree = new BST(1)
tree.left = new BST(2)
tree.right = new BST(3)

tree.left.left = new BST(4);
tree.left.right = new BST(5);
tree.right.right = new BST(7);

console.log('DFS: ', depthFirstSearch(tree, 12))