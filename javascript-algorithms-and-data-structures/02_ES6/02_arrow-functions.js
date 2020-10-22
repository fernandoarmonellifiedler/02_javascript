/* Use Arrow Functions to Write Concise Anonymous Functions:
- In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax: */

const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
  }

// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc3 = () => "value"; // This code will still return value by default.

/* Exercise: Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

var magic = function() {
  "use strict";
  return new Date();
};
*/

const magic = () => new Date();

/* Write Arrow Functions with Parameters:
- Just like a regular function, you can pass arguments into an arrow function. */

// doubles input value and returns it
const doubler = (item) => item * 2;

/*If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.*/

// the same function, without the argument parentheses
const doubler2 = item => item * 2;

/* It is possible to pass more than one argument into an arrow function. */

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;


/*Exercise: Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax:

 var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
}; */ 

const myConcat = (arr1, arr2) => arr1.concat(arr2)


