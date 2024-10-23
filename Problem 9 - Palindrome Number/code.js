var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {   
        return false;
    }

    let reversed = 0;
    let original = x;

    while (original > reversed) {
        reversed = reversed * 10 + original % 10;
        original = Math.floor(original / 10);
    }

    return original === reversed || original === Math.floor(reversed / 10);
}

// Case 1 
// Input: x = 121
// Expected Output: true
console.log(isPalindrome(121))

// Case 2
// Input: x = -121
// Expected Output: false
console.log(isPalindrome(-121))

// Case 3
// Input: x = 10
// Expected Output: false
console.log(isPalindrome(10))