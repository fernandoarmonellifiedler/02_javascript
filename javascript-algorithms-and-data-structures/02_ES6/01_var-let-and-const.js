/* Explore Differences Between the var and let KeywordsPassed:
- One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.*/

var camper = 'James';
var camper = 'David';

/*- As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
- A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error. 

let camper2 = 'James';
let camper2 = 'David'; // throws an error
*/

/*- This error can be seen in the console of your browser. So unlike var, when using let, a variable with the same name can only be declared once. Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance: */

//"use strict";
x = 3.14; // throws an error because x is not declared


/* Compare Scopes of the var and let Keywords:
- When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

- The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression. */


/* Declare a Read-Only Variable with the const Keyword:
- The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

- const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned. 

"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error

- As you can see, trying to reassign a variable declared with const will throw an error. You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.*/

function printManyTimes(str) {

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");

/* Mutate an Array Declared with const:
- Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

- However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier. */

const s = [5, 6, 7];
//s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

/*- As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator. */

// Exercise: An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.

const h = [5, 7, 2];
function editInPlace() {
  // Using s = [2, 5, 7] would be invalid
  h[0] = 2;
  h[1] = 5;
  h[2] = 7;
  
}
editInPlace();

/* Prevent Object Mutation:
- As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

- Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error. */

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};

Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); // { name: "FreeCodeCamp", review:"Awesome"}