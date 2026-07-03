class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = deque([])

        for o in operations:
            print(o, stack)
            if o == "+":
                num1 = stack[-1]
                num2 = stack[-2]
                stack.append(num1 + num2)
            elif o == "D":
                num1 = stack[-1]
                stack.append(num1 * 2)
            elif o == "C":
                stack.pop()
            else:
                stack.append(int(o))

        return sum(stack)