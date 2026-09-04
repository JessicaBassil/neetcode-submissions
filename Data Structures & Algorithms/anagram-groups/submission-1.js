class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let i=0; i<strs.length; i++){
            const curr = (strs[i]).split("").sort().join("")
            if(res[curr] == undefined) res[curr] = [strs[i]]
            else res[curr] = [...res[curr], strs[i]]
        }

        return Object.values(res)
    }
}
