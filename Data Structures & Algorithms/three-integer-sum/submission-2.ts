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
            while (l< r){
                const sum = sortedNums[l] + sortedNums[r] + sortedNums[i]
                if(sum == 0){
                    const resToAdd = [sortedNums[i], sortedNums[l], sortedNums[r]].sort()
                    if(!res.find(p => p.every((n:number, i:number) => n== resToAdd[i]))) {
                        res.push(resToAdd)
                    }
                    l++
                    r--
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
