### Problem

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with `O(log n)` runtime complexity.

### Analysis

The function iterates through the `nums` array, checking if the `target` number is equal to or less than the current element. If this condition is met, it returns the current index `i`. If the loop reaches the last element without finding such a condition, it returns the index of the last element plus 1, indicating that the target should be inserted at the end of the array.
\
\
**Case 1**\
&nbsp;&nbsp;&nbsp; **Input:** nums = [1,3,5,6], target = 5\
&nbsp;&nbsp;&nbsp; **Output:** 2

**Case 2**\
&nbsp;&nbsp;&nbsp; **Input:** nums = [1,3,5,6], target = 2\
&nbsp;&nbsp;&nbsp; **Output:** 1

**Case 3**\
&nbsp;&nbsp;&nbsp; **Input:** nums = [1,3,5,6], target = 7\
&nbsp;&nbsp;&nbsp; **Output:** 4