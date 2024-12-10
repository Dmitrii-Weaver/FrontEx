//Given an array of positive numbers find the greatest sum that can be generated without adding 2 numbers positioned next to each other.

const MSSNA = (arr) => {
    if (!arr.length) return 0
    if (arr.length === 1) return arr[0]

    let maxSubarraySum = []
    maxSubarraySum[0] = arr[0]
    maxSubarraySum[1] = Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
        let max = Math.max(maxSubarraySum[i - 1], maxSubarraySum[i - 2] + arr[i])
        maxSubarraySum.push(max)
    }
    return maxSubarraySum[maxSubarraySum.length - 1]
}

const arr = [7, 10, 12, 7, 9, 14]
console.log(MSSNA(arr));