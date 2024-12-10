//Given an array of coins or denominations and a target sum, calculate the minimum number of coins required to match the target.

const CoinsChangeCount = (coins, target) => {
    const ways = new Array(target + 1).fill(Infinity)
    ways[0] = 0

    for (let i = 0; i < coins.length; i++) {
        for (let amount = 0; amount < ways.length; amount++) {
            if (coins[i] <= amount) {
                ways[amount] = Math.min(ways[amount], 1 + ways[amount - coins[i]])
            }
        }
    }
    return ways[target] !== Infinity ? ways[target] : -1
}

const coins = [1, 2, 4]
const target = 6
console.log(CoinsChangeCount(coins, target))