//A monotonic array is an array whose elements, from left to right, are entirely non increasing, or entirely non decreasing. Return true if the given array is monotonic.

const monotonicArray = (arr) => {
    let isIncreasing = true
    let isDecreasing = true
  
    isIncreasing = checkIncreasing(arr)
    isDecreasing = checkDecreasing(arr)
  
    return isIncreasing || isDecreasing
  }
  
  const checkIncreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false
      }
    }
    return true
  }
  const checkDecreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        return false
      }
    }
    return true
  }
  const arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
  console.log('Second: ', monotonicArray(arr))