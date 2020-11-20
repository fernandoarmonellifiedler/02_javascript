/* Use the Rest Parameter with Function Parameters:
- In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

- The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

Check out this code: */

const howMany = (...args) => "You have passed " + args.length + " arguments.";

//console.log(howMany(0, 1, 2)) //You have passed 3 arguments.
//console.log(howMany("string", null, [1, 2, 3], { })) //You have passed 4 arguments.

/* Exercise: Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z,) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

// const sum = (...args) => args.reduce((a, b) => a + b, 0);


/* =======================================================*/

/* Use the Spread Operator to Evaluate Arrays In-Place:
- ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

- The ES5 code below uses apply() to compute the maximum value in an array: */

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const array = [6, 89, 3, 45];
const maximus2 = Math.max(...array); // returns 89

// ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

//const spreaded = ...arr; // will throw a syntax error

// Exercise: Copy all contents of arr1 into another array arr2 using the spread operator. 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

