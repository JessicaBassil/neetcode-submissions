class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l=0
        let r=heights.length -1
        let max = 0
        while(l<r){
            const width = r-l
            const height = Math.min(heights[r], heights[l])

            max = Math.max(width*height, max)
            if(heights[l] < heights[r]){
                l+=1
            } else {
                r-=1
            }
        }

        return max
    }
}
