var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Case 1 
// Input: s = "()"
// Expected Output: true
console.log(isValid("()"))

// Case 2
// Input: s = "()[]{}"
// Expected Output: true
console.log(isValid("()[]{}"))

// Case 3
// Input: s = "(]"
// Expected Output: false
console.log(isValid("(]"))