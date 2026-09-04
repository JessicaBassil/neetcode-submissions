class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet = new Set()
        for(let i in nums){
            const n = nums[i]
            if(mySet.has(n)){
                return true
            }
            mySet.add(n)
        }

        return false
    }
}
