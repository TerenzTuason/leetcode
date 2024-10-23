class Solution(object):
    def searchInsert(self, nums, target):
        for i in range(len(nums)):
            if target == nums[i] or target < nums[i]:
                return i
            elif i == len(nums) - 1:
                return i + 1
    
    # Case 1 
    # Input: nums = [1,3,5,6], target = 5
    # Expected Output: 2
    print(searchInsert("", [1,3,5,6], 5))

    # Case 2
    # Input: nums = [1,3,5,6], target = 2
    # Expected Output: 1
    print(searchInsert("", [1,3,5,6], 2))

    # Case 3
    # Input: nums = [1,3,5,6], target = 7
    # Expected Output: 4
    print(searchInsert("", [1,3,5,6], 7))
