/**
 * @param {number[]} arr
 */

function quickSort(arr, l = 0, r = arr.length - 1) {
    if (l > r) return;
    const i = partition(arr, l, r);
    quickSort(arr, l, i - 1);
    quickSort(arr, i + 1, r);
}

function partition(arr, l, r) {
    const pivot = l++;
    while (l <= r) {
        if (arr[l] <= arr[pivot])
            l++;
        else {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            r--;
        }
    }
    [arr[pivot], arr[r]] = [arr[r], arr[pivot]];
    return r;
}