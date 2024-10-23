var twoSum = function(nums, target) {

    var sum = 0;
    var output = []

    for(let i = 0; i < nums.length; i++) {
        for(let j = (nums.length - 1); j > i; j--) {
            sum = nums[i] + nums[j];
            if(sum == target){
                output.push(i);
                output.push(j);
                return output;
            }
        }
    }
};

// Case 1 
// Input: nums = [2,7,11,15], target = 9
// Expected Output: [0,1]
console.log(twoSum([2,7,11,15], 9))

// Case 2
// Input: nums = [3,2,4], target = 6
// Expected Output: [1,2]
console.log(twoSum([3,2,4], 6))

// Case 3
// Input: nums = [3,3], target = 6
// Expected Output: [0,1]
console.log(twoSum([3,3], 6))