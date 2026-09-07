class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLen = 0
        let l=0
        let r=0
        while(r<s.length){
            while(s.substring(l,r).includes(s[r])){
                l++
            }
            maxLen = Math.max(maxLen, r-l+1)
            r++
        }

        return maxLen
    }
}
