//Given a binary tree, compute the sum of all the branches in the tree. 1 branch is the path from the root to a leaf.

class BinaryTree {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

const branchSums = (tree) => {
    let sums = [];
    branchSumsHelper(tree, 0, sums);
    return sums;
};
const branchSumsHelper = (tree, runningSum, sumsArray) => {
    if (!tree) return;

    newRunningSum = runningSum + tree.value;
    if (!tree.left && !tree.right) {
        sumsArray.push(newRunningSum);
        return;
    }
    branchSumsHelper(tree.left, newRunningSum, sumsArray);
    branchSumsHelper(tree.right, newRunningSum, sumsArray);
};

const tree = new BinaryTree(10);
console.log(branchSums(tree));