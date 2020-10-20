/* While Loops:  it runs "while" a specified condition is true and stops once that condition is no longer true. */

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

var myArray = []
var x = 5;
while(x > 0) {
    myArray.push(x);
    x--;
}

/* For Loops: it runs "for" a specific number of times.
For loops are declared with three optional expressions separated by semicolons:
for ([initialization]; [condition]; [final-expression]) */
var ourArray2 = [];
for (let i = 0; i < 5; i++) {
  ourArray2.push(i);
}

/* Nesting For Loops: you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. */
var arr = [
    [1,2], [3,4], [5,6]
];

for (let i = 0 ; i < arr.length ; i++) {
    for (let j = 0 ; j <arr[i.length] ; j++) {
        console.log(arr[i][j]);
    }
}

/* Exercise: Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.*/
function multiplyAll(arr) {
  var product = 1;
  
  for (let i = 0 ; i < arr.length ; i++) {
      for (let j = 0 ; j < arr[i].length ; j++) {
          product = product * arr[i][j];
      }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]])

/* Do...While Loops: it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true. */
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

/* Replace Loops using Recursion:
- Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

- However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

- The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
*/

/* Exercise: Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr. */

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr,n - 1) + arr[n-1];
  }
}

/* Exercise: Profile Lookup.
- We have an array of objects representing different people in our contacts lists.
- A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

- The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact:
- If both are true, then return the "value" of that property.
- If name does not correspond to any contacts then return "No such contact".
- If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
 */
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
  // Only change code below this line
      for (let i = 0 ; i < contacts.length ; i++) {
          if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop]
          } else {
              return "No such property"
          }
      } 
      return "No such contact"
    // Only change code above this line
  }
    
  console.log(lookUpProfile("Akira", "likes"));
  /* NOTAS:
  - mis soluciones no estaban funcionando por estar colocando el return de name dentro del for. Entonces la funcion terminaba en el primer contacto. La solucion dejó ese return fuera del loop for ya que si no lo encuentra puede retornar "no such contac"
  - luego, se aplicó una solución simplificada usando ||. quiere decir que una vez dentro del contacto vamos a retornar su prop y en el caso de no encontrarla, "no such property".
  Sigue la solución incompleta:

IF CONTACT EXIST
function lookUpProfile(name, prop){
// Only change code below this line
  for (let i = 0 ; i < contacts.length ; i++) {
    if (contacts[i]["firstName"] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]
      } else {
        return "No such property"
      }
    } else {
      return "No such contact"
    }
  }
// Only change code above this line
}

IF CONTACT DOESN´T EXIST
function lookUpProfile(name, prop){
// Only change code below this line
  for (let i = 0 ; i < contacts.length ; i++) {
    if (contacts[i]["firstName"] !== name) {
      return "No such contact";
    } else if (!contacts[i].hasOwnProperty(prop)) {
        return "No such property";
    } else {
      return contacts[i][prop]
    }
  }
// Only change code above this line
}

UNA ULTIMA PRUEBA QUE NO FUNCIONO:
function lookUpProfile(name, prop){
  // Only change code below this line
      for (let i = 0 ; i < contacts.length ; i++) {
          if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop]
          } else {
              return "No such property"
          }
      } 
      return "No such contact"
    // Only change code above this line
  }
*/