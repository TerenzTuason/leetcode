var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(target == nums[i] || target < nums[i]) {
            return i
        }
        else if(i == nums.length-1) {
            return i + 1
        }
    }
};

// Case 1 
// Input: nums = [1,3,5,6], target = 5
// Expected Output: 2
console.log(searchInsert([1,3,5,6], 5))

// Case 2
// Input: nums = [1,3,5,6], target = 2
// Expected Output: 1
console.log(searchInsert([1,3,5,6], 2))

// Case 3
// Input: nums = [1,3,5,6], target = 7
// Expected Output: 4
console.log(searchInsert([1,3,5,6], 7))