class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let cMap = {}

        for(let i in s){
            const charS = s[i]
            const charT = t[i]
            if (cMap[charS] == undefined) cMap[charS] = 0
            if (cMap[charT] == undefined) cMap[charT] = 0
            cMap[charS] += 1
            cMap[charT] -= 1
        }

        console.log(cMap)

        // Check that all are 0
        const vals = Object.values(cMap)
        for (let j in vals){
            if (vals[j] !== 0){
                return false
            } 
        }

        return true
    }
}
