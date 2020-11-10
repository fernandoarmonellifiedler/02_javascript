/* Extract Matches:
- So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

- To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example: */

"Hello, World!".match(/Hello/); // Returns ["Hello"]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // Returns ["expressions"]

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');


// Exercise: Apply the .match() method to extract the word coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

// =============================================

/* Find More Than the First Match:
- So far, you have only been able to extract or search a pattern once.*/

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex); // Returns ["Repeat"]

// To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); // Returns ["Repeat", "Repeat", "Repeat"]


/* Exercise: Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

