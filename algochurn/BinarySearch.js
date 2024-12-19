//Given an array of sorted integers in ascending order, and a target integer, write a function to search target in nums array. 
//If target exists, return the index of the target in the array, otherwise return -1.

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
    }
    return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));