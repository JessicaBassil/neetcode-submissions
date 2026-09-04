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
            numbersMap[nums[i]] = i
        }

        for (let j=0; j<nums.length; j+= 1){
            let left = target - nums[j]
            if(numbersMap[left] !== undefined && numbersMap[left] !== j){
                return [numbersMap[left], j]
            }
        }

        return []
    }
}
