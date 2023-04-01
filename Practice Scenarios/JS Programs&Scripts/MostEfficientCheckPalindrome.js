/*

Write a function that returns true if the input is a Palindrome

Palindrome definition:
A string that doesn't changed when reversed (it reads the same backward and forward).

Examples:

    "eye" is a palindrome
    "noon" is a palindrome
    "decaf faced" is a palindrome
    "taco cat" is not a palindrome (backwards it spells "tac ocat")
    "racecars" is not a palindrome (backwards it spells "sracecar")
*/

// This first snippet's my first 5 minutes of trying to figure it out myself 

function solution(inputString) {
    if (inputString.length === 1) {
        return true
    }
    else if (inputString.length % 2 === 0){
        for (let i = 0; i < (inputString.length/2); i++) {
            reverseCheck = inputString[-1]
            if (reverseCheck === i) {
                reverseCheck = 
            }
        }
    }
}
    
// After consulting a friend

function solution(inputString) {
    let left = 0;
    let right = inputString.length - 1;
    
    while (left < right) {
        if (inputString[left] === inputString[right]) {
            left++
            right--
        }
        else {
            return false
        }
    }
    return true
}
  
// After asking AI for the most efficient answer to this problem
  
function solution(inputString) {
    const reversed = inputString.split('').reverse().join('');
    return inputString === reversed;
}
