class Solution(object):
    def twoSum(self, nums, target):
        sum = 0
        output = []

        for i in range(len(nums)):
            for j in range(len(nums))[::-1]:
                if(j > i):
                    sum = nums[i] + nums[j]
                    if(sum == target):
                        output.append(i)
                        output.append(j)
                        return output
        
    # Case 1 
    # Input: nums = [2,7,11,15], target = 9
    # Expected Output: [0,1]
    print(twoSum("", [2,7,11,15], 9))

    # Case 2
    # Input: nums = [3,2,4], target = 6
    # Expected Output: [1,2]
    print(twoSum("", [3,2,4], 6))

    # Case 3
    # Input: nums = [3,3], target = 6
    # Expected Output: [0,1]
    print(twoSum("", [3,3], 6))
        