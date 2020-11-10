/* Match Single Character with Multiple Possibilities:
- You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

- You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

- For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u". */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


/* Exercise: Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
Note: Be sure to match both upper- and lowercase vowels. */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

// =============================================

/* Match Letters of the Alphabet:
- You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

- Inside a character set, you can define a range of characters to match using a hyphen character: -.

- For example, to match lowercase letters a through e you would use [a-e]. */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2); // Returns ["cat"]
batStr.match(bgRegex2); // Returns ["bat"]
matStr.match(bgRegex2); // Returns null


/* Exercise: Match all the letters in the string quoteSample.
Note: Be sure to match both upper- and lowercase letters.*/

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result2 = quoteSample2.match(alphabetRegex); // Change this line

// =============================================

/* Match Numbers and Letters of the Alphabet:
- Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

- For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

- Also, it is possible to combine a range of letters and numbers in a single character set.*/

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig; // matches all letters and numbers in jennyStr
jennyStr.match(myRegex);


// Exercise: Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/ig; // Change this line
let result3 = quoteSample3.match(myRegex3); // Change this line