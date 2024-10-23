var longestCommonPrefix = function(strs) {
    var commonPrefix = ""
    
    for(let i = 0; i < strs[0].length; i++) {
        var currentCharacter = strs[0][i]
        for(let j = 0; j < strs.length; j++) {
            if(strs[j][i] == currentCharacter){
                if(j == strs.length-1) {
                    commonPrefix = commonPrefix + currentCharacter
                }
            }
            else {
                return commonPrefix
            }
        }
    }
    
    return commonPrefix
};

// Case 1 
// Input: strs = ["flower","flow","flight"]
// Expected Output: "fl"
console.log(longestCommonPrefix(["flower","flow","flight"]))

// Case 2
// Input: strs = ["dog","racecar","car"]
// Expected Output: ""
console.log(longestCommonPrefix(["dog","racecar","car"]))