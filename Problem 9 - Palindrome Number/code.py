import math

class Solution(object):
    def isPalindrome(self, x):
        if x < 0 or x % 10 == 0 and x != 0:
            return False

        reversed = 0
        original = x

        while original > reversed:
            reversed = reversed * 10 + original % 10
            original = math.floor(original / 10)

        return original == reversed or original == math.floor(reversed / 10)
    
    # Case 1 
    # Input: x = 121
    # Expected Output: True
    print(isPalindrome("", 121))

    # Case 2
    # Input: x = -121
    # Expected Output: False
    print(isPalindrome("", -121))

    # Case 3
    # Input: x = 10
    # Expected Output: False
    print(isPalindrome("", 10))
        