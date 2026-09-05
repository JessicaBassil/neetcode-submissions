class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums:number[] = [...nums].sort((a, b) => a-b)

        const res:number[][] = []

        for(let i=0; i<sortedNums.length; i++){
            let l = i+1, r = sortedNums.length-1
            if(i>0 && sortedNums[i] == sortedNums[i-1]){
                continue
            }

            while (l< r){
                const sum = sortedNums[l] + sortedNums[r] + sortedNums[i]
                if(sum == 0){
                    const resToAdd = [sortedNums[i], sortedNums[l], sortedNums[r]]
                    res.push(resToAdd)
                    l+=1
                    r-=1
                    while(l< r && sortedNums[l] == sortedNums[l-1]) l+=1
                    while(l<r && sortedNums[r] == sortedNums[r+1]) r-=1
                } else if(sum < 0) {
                    l+=1
                } else {
                    r-=1
                }
            }
        }

        return res
    }

}
