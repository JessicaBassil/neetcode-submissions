class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l = 0
        r = len(numbers) - 1
        numbers.sort()

        while l < r:
            somme = numbers[l] + numbers[r]
            if somme == target:
                return [l+1, r+1]
            if somme > target:
                r-=1
            else:
                l+=1
        return []