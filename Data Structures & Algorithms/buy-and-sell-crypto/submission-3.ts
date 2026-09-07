class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // sum of all prices --> ? not needed
        // find the number that has the maximum - another nb after it
        let maxProfit = 0
        let l=0
        let r=1
        while(r<prices.length){
            maxProfit = Math.max(prices[r]-prices[l], maxProfit)
            if(prices[l] > prices[r]){
                l=r
            }
            r++
        }

        return maxProfit
    }
}
