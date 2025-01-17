//Given a 2D matrix of numbers, return a spiral traversal of the matrix in the clockwise direction.

const spiralTraversal = (arr) => {
    let result = [];
    let startRow = 0;
    let endRow = arr.length - 1;
    let startCol = 0;
    let endCol = arr[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            result.push(arr[startRow][i]);
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result.push(arr[i][endCol]);
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result.push(arr[endRow][i]);
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result.push(arr[i][startCol]);
        }
        startCol++;
    }

    return result;
};

const arr = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

console.log(spiralTraversal(arr));