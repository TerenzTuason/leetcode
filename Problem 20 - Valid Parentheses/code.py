class Solution(object):
    def isValid(self, s):
        stack = []
        matching_brackets = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for char in s:
            if char in "({[":
                stack.append(char)
            else:
                if len(stack) == 0 or stack.pop() != matching_brackets[char]:
                    return False
        
        return len(stack) == 0

    # Case 1 
    # Input: s = "()"
    # Expected Output: True
    print(isValid("", "()"))

    # Case 2
    # Input: s = "()[]{}"
    # Expected Output: True
    print(isValid("", "()[]{}"))

    # Case 3
    # Input: s = "(]"
    # Expected Output: False
    print(isValid("", "(]"))