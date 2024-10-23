### Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have **exactly one solution**, and you may not use the same element twice. You can return the answer in any order.

### Analysis

To find two numbers in the `nums` array that add up to the `target`, the code uses a nested loop where the outer loop iterates through each element of the array with index `i`. The inner loop iterates backwards from the end of the array to the current index `i` using index `j`. For each pair of indices `i` and `j`, it calculates the sum of the elements at these indices. If this sum equals the `target` value, the indices `i` and `j` are pushed into the `output` array, and the function immediately returns this array.
\
\
**Case 1**\
&nbsp;&nbsp;&nbsp; **Input:** nums = [2,7,11,15], target = 9\
&nbsp;&nbsp;&nbsp; **Output:** [0,1]

**Case 2**\
&nbsp;&nbsp;&nbsp; **Input:** nums = [3,2,4], target = 6\
&nbsp;&nbsp;&nbsp; **Output:** [1,2]

**Case 3**\
&nbsp;&nbsp;&nbsp; **Input:** nums = [3,3], target = 6\
&nbsp;&nbsp;&nbsp; **Output:** [0,1]