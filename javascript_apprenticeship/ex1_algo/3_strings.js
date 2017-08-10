 /*
 * Given a string, reverse each word in a the sentence
 * */

let reverse = "Mary would you mary me";

let reverseWords = reverse.split(' ');
let reverseArray = [];

for (var i = 0; i < reverseWords.length; i++) {
    reverseArray[i] = reverseWords[i].split('').reverse().join('');
}

let reverseString = reverseArray.join(' ');

console.log(reverseString);


 /*
 * Given two strings, return true if they are anagrams of one another
 * */

let wordOne = "Pascal Obispo";
let wordTwo =  "Pablo Picasso";
// => returns true !
let wordOnesorted = wordOne.toUpperCase().split('').sort().join('');
let wordTwosorted = wordTwo.toUpperCase().split('').sort().join('');

if (wordOnesorted === wordTwosorted) {
    console.log("this is an anagram");
} else {
    console.log("this is not an anagram");
}


 /*
 * Check if a given string is a palindrome "Rotor" is a palindrome. "Race Car" should also be considered a palindrome.
 * Case sensitivity should be taken into account
 * */

/*let palindrome = "Eh ! ça va la vache";

let palindromeNoSpace = palindrome.split('').join('');
console.log(palindromeNoSpace);

let isPalindrome = palindrome.split('').reverse().join('');

if (palindrome.split('').reverse().join('') === isPalindrome) {
    console.log("This is a palindrome");
} else {
    console.log("This is not a palindrome");
}*/
