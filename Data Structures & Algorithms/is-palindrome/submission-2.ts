class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length -1
        while (l<r){
            // check if both letter
            while(!s[l]?.match(/([a-zA-Z0-9])/) && l<r){
                l+=1
            }

            while(!s[r]?.match(/([a-zA-Z0-9])/) && l<r){
                r-=1
            }

            if(s[l]?.toLowerCase() != s[r]?.toLowerCase()){
                return false
            }

            l+=1
            r-=1
        }

        return true
    }
}
