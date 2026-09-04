class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // 1, 2, 4, 6 
        // [1, 2, 8, 24] ; [48,48,24,6]
        // [48 (a2[1]) , 24*1 = 24 (a1[0] * a2[2]) , 6*2 = 12 ,  8 ]
        const suffix = [...nums]
        const prefix = [...nums]
        for(let i=0; i<nums.length; i++){
            prefix[i] = prefix[i] * (prefix[i-1] ?? 1)            
            const j = nums.length - i - 1;
            suffix[j] = (suffix[j] * (suffix[j+1] ?? 1))
        }


        const res = []

        for(let i=0; i<nums.length; i++){
            res.push((prefix[i-1] ?? 1) * (suffix[i+1] ?? 1))
        }

        return res
    }
}
