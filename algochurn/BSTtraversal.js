//Given a Binary Search Tree, Traverse the tree in Preorder, Postorder, and inorder traversal.


function inOrderTraversal(tree) {
    if (!tree) return
    inOrderTraversal(tree.left)
    process.stdout.write(tree.value + ' ')
    inOrderTraversal(tree.right)
}
function preOrderTraversal(tree) {
    if (!tree) return
    process.stdout.write(tree.value + ' ')
    preOrderTraversal(tree.left)
    preOrderTraversal(tree.right)
}

function postOrderTraversal(tree) {
    if (!tree) return
    postOrderTraversal(tree.left)
    postOrderTraversal(tree.right)
    process.stdout.write(tree.value + ' ')
}

class BST {
    constructor(value) {
        this.left = null
        this.value = value
        this.right = null
    }

    insert(value) {
        let currentNode = this
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new BST(value)
                    break
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new BST(value)
                    break
                } else {
                    currentNode = currentNode.right
                }
            }
        }
        return this
    }
}

const tree = new BST(10)
tree.insert(5)
tree.insert(1)
tree.insert(7)
tree.insert(18)
tree.insert(21)

preOrderTraversal(tree)
console.log("\n");
postOrderTraversal(tree)
console.log("\n");
inOrderTraversal(tree)