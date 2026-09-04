class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length == 2){
            return [0,1]
        }

        let numbersMap = {}
        for (let i=0; i<nums.length; i+= 1){
            let left = target - nums[i]
            if(numbersMap[left] !== undefined && numbersMap[left] !== i){
                return [numbersMap[left], i]
            }
            numbersMap[nums[i]] = i
        }

        return []
    }
}
