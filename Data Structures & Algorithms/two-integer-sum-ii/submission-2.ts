class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // asc order so if sum is bigger than target we can go down from the right pointer and if it's smaller go up from the left pointer
        let l=0
        let r=numbers.length - 1

        while(l<r){
            const sum = numbers[l] + numbers[r]
            if(sum === target) {
                return [l+1, r+1]
            } else if(sum < target){
                l+=1
            } else if(sum > target){
                r-=1
            }
        }
    }
}
