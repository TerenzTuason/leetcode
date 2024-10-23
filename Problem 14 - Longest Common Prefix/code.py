class Solution(object):
    def longestCommonPrefix(self, strs):
        commonPrefix = ""
        shortestLength = len(strs[0])
        
        for i in range(shortestLength):
            currentCharacter = strs[0][i]
            for j in range(len(strs)):
                if strs[j][i] == currentCharacter:
                    if j == len(strs)-1:
                        commonPrefix = commonPrefix + currentCharacter
                else:
                    return commonPrefix
    
    # Case 1 
    # Input: strs = ["flower","flow","flight"]
    # Expected Output: "fl"
    print(longestCommonPrefix("", ["flower","flow","flight"]))

    # Case 2
    # Input: strs = ["dog","racecar","car"]
    # Expected Output: ""
    print(longestCommonPrefix("", ["dog","racecar","car"]))
            