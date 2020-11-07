/* Use Destructuring Assignment to Extract Values from Objects:
- Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code: */

const user = { name: 'John Doe', age: 34 };

const nameES5 = user.name; // name = 'John Doe'
const ageES5 = user.age; // age = 34

/* Using the ES6 destructuring syntax, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.*/

const { name1, age1 } = user; // name1 = 'John Doe', age1 = 34

/* Exercise: Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  //const today = HIGH_TEMPERATURES.today;
  //const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  const {today, tomorrow } = HIGH_TEMPERATURES;

/* Use Destructuring Assignment to Assign Variables from Objects:
- Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

- Using the same object from the last example:*/

const user2 = { name: 'John Doe', age: 34 };

/* Here's how you can give new variable names in the assignment. 
You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.*/

const { name: userName, age: userAge} = user2 // userName = 'John Doe', userAge = 34

/* Use Destructuring Assignment to Assign Variables from Nested Objects:
- You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples: */

const user3 = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

// Here's how to extract the values of object properties and assign them to variables with the same name:

//const { johnDoe: { age, email }} = user3;

// And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge3, email: userEmail3 }} = user3;

/* Exercise: Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object. */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  //const lowToday = LOCAL_FORECAST.today.low;
  //const highToday = LOCAL_FORECAST.today.high;
  
  const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST
 
/* Use Destructuring Assignment to Assign Variables from Arrays:
- ES6 makes destructuring arrays as easy as destructuring objects.

- One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
- Destructuring an array lets us do exactly that: */

const [a1, b1] = [1, 2, 3, 4, 5, 6];
//console.log(a1, b1); // 1, 2

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const arr = [1, 2, 3, 4, 5, 6];

const [c, d,,, e] = arr
//console.log(c, d, e); // 1, 2, 5

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;

[a, b] = [b, a]

/* Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements:
- In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below: */

const [k, l, ...arr1] = [1, 2, 3, 4, 5, 7];
//console.log(k, l); // 1, 2
//console.log(arr1); // [3, 4, 5, 7]

//Variables k and l take the first and second values from the array. After that, because of the rest parameter's presence, arr1 gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

// Exercise: Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  "use strict";

  const [ , , ...arr] = list; // Change this line

  return arr;
}
const arr2 = removeFirstTwo(source);

console.log(arr2)

/* Use Destructuring Assignment to Pass an Object as a Function's Parameters:
- In some cases, you can destructure the object in a function argument itself.

Consider the code below: */

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
  }

// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate2 = ({ name, age, nationality, location }) => {
    /* do something with these fields */
  }

// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

// Exercise: Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line

//const half = (stats) => (stats.max + stats.min) / 2.0; 
  const half = ({max,min}) => (max + min) / 2.0; 

  // Only change code above this line
 