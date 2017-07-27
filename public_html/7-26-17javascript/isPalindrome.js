//var palin = "hannah";
//var notPalin = "joseph";
//console.log("for", palin, "isPalindrome() returns", isPalindrome(palin));
//console.log("for", notPalin, "isPalindrome() returns", isPalindrome(notPalin));                    
//console.log("for", "racecar", "isPalindrome() returns", isPalindrome("racecar"));
function isPalindrome(input) {
    for (var i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}              