class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // sum of all prices --> ? not needed
        // find the number that has the maximum - another nb after it
        let maxProfit = 0
        for(let r=prices.length-1; r>0; r--){
            let l=0
            while(l<r){
                maxProfit = Math.max(maxProfit, prices[r]-prices[l])
                l+=1
            }
        }

        return maxProfit
    }
}
