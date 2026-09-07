class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let l=0
        let r=nums.length-1
        while(l<r){
            while(l<r && nums[l] == nums[l+1]){
                nums.splice(l, 1)
                r-=1
            }
            while(l<r && nums[r] == nums[r-1]){
                nums.splice(r, 1)
                r-=1
            }

            l+=1
            r-=1
        }

        return nums.length
    }
}
