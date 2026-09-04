class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const cMap = {} // key is num, val is count
        for(let i=0; i<nums.length; i++){
            if(cMap[nums[i]] == undefined) cMap[nums[i]] = 1
            else cMap[nums[i]] += 1
        }

        const res = []
        const entries = Object.entries(cMap).sort((entry1, entry2) =>{
            return entry2[1] - entry1[1]
        })

        let i = 0;
        while (i !== k){
            res.push(entries[i][0])
            i++
        }

        return res
    }
}
