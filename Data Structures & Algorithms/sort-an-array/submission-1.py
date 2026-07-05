class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        sortedArr = []

        for n in nums:
            l, r = 0, len(sortedArr)
            i = 0

            while l < r and i < 10:
                i+=1
                mid = ((r-l) // 2 ) + l

                # find where it fits
                if n < sortedArr[mid]:
                    r = mid
                elif n == sortedArr[mid]:
                    l=r=mid
                else:
                    l = mid + 1

            sortedArr.insert(l, n)

        return sortedArr