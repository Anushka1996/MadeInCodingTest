// Exercise #1: Palindrome Checker
// Write a function that accepts a single string argument, and returns a boolean indicating whether the string is a palindrome.
// It should satisfy these test cases:		
// "oscar" -> false
// "aaaa" -> true
// "Racecar" -> true
// "Madam, I'm Adam" -> true

function palindrome(str) {
    var regex = /[\W_]/g;
    var lowerCaseStr = str.toLowerCase().replace(regex, '');
    var reverseStr = lowerCaseStr.split('').reverse().join(''); 
    return reverseStr === lowerCaseStr;
  }
  palindrome("madam");