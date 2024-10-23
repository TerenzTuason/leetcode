### Problem

Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `""`.

### Analysis

The provided JavaScript function `longestCommonPrefix` iterates through each character of the first word in the array `strs`, storing the current character in a temporary variable. It then uses an inner loop to iterate through each word in the array, checking if the character at the current position matches the stored character. If all words have the same character at that position, it adds the character to the `commonPrefix` string. If a mismatch is found, the function immediately returns the `commonPrefix` string. The outer loop continues until all characters in the first word are checked, and the final `commonPrefix` is returned.
\
\
**Case 1**\
&nbsp;&nbsp;&nbsp; **Input:** strs = ["flower","flow","flight"]\
&nbsp;&nbsp;&nbsp; **Output:** "fl"

**Case 2**\
&nbsp;&nbsp;&nbsp; **Input:** strs = ["dog","racecar","car"]\
&nbsp;&nbsp;&nbsp; **Output:** ""