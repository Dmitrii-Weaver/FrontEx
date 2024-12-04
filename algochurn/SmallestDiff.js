//Smallest Difference
//Given two arrays of integers, find the pair of values (one value in each array) with the smallest (non-negative) difference.


const smallestDifference = (arr1, arr2) => {
    let diff = Math.Max
    let int1 
    let int2
  
    for (let i in arr1) {
      for (let l in arr2) {
        if (arr1[i] - arr2[l] < diff && arr1[i] - arr2[l] >= 0)  {
          diff = arr1[i] - arr2[l]
          int1 = arr1[i]
          int2 = arr2[l]
        }
        else if (arr2[l] - arr1[i] < diff && arr2[l] - arr1[i] >= 0){
          diff = arr2[l] - arr1[i]
          int1 = arr1[i]
          int2 = arr2[l]
        }
      }
    }
    return [int1, int2]
  }
  const arr1 = [1, 2, 3, 4, 5, 6]
  const arr2 = [12, 13, 14, 15, 16, 17]
  
  console.log(smallestDifference(arr1, arr2))
  