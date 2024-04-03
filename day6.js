//* Write a puzzle to determine whether a string is palindrome or not. A palindrome is a word , phrase number, or other sequence of character that reads the same forward and backward, ignoring spaces. punctuations and capitalization.

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let r_str = str.split("").reverse().join("");
    console.log(str);
    console.log(r_str);
    return str === r_str ? true : false;
}

console.log(isPalindrome("A man,a plan, a canal, Panama")); //Output: True

console.log(isPalindrome("racecar")); //Output: true
console.log(isPalindrome("hello")); //Output: False

//*-----------------------
//* Constraints:
//*-----------------------

//? The input string may contain letters,digits,spaces,punctuation, and special characters.
//? The function should be case-insensitive,meaning "Racecar" and "racecar" should be considered the same.
//? Ignore spaces , punctuation, and special characters when determing if a string is a palindrome.
//? The function should return true if the input string is a palindrome and false otherwise.

//todo Note
//? .replace (/\W/g, "") : Uses the replace() method with a regular expression (/\W/g) to remove a;; non-word characters from the string. Here: 
//? \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).
//? the gflag performs a global search meaning it replaces all occurrence of non-word characters in the string
//? So replace(/\W/g, "") replaces all non-word characters with an empty string, effectively removing them from the string.