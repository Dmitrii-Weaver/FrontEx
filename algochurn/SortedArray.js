const sortedSquaredArray = (array) => {
    let squaredArray = array.map(num => num * num);
    return squaredArray.sort((a, b) => a - b);
}

console.log(sortedSquaredArray([-6, -4, 1, 2, 3, 5]));