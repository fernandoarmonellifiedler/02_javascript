/* Value vs reference types
- In js we have two categories of types. Value types (primitives) and reference types. And both of them behave differently.

Value types: Number, String, Boolean, Symbol (new in ES6), undefined, null

Reference types: Object, Function, Array

- Function and Array are Objects too so we have Primitives and Objects. We´ll see this with an example.
- We declare a variable and change his value. */

let x = 10;
let y = x;

x = 20

/*- x and y are two independent variables. If we log to the console x = 20 and y = 10
- when working with primitives the value 10 is stored inside of x variable. And when x is assigned as the value of y the value is copied inside y.

- Now, working with reference types we´re gonna declare an object with a value of 10 and then, declare the value of x to 20. */

let x = { value: 10 };
let y = x;

x.value = 20

/*- Here, value property of y is also 20.
- the object is not stored inside the variable. Is stored somewhere else in the memory and the address of that memory location is stored inside of that variable.
- So when we copy x into y, what is copied is the reference or the address

Conclusion:
    - Primitives are copied by their value
    - Objects are copied by their reference
    
- Another example: we define a function that takes a number and simply increases that number by one.*/

let number = 10

function increase(number) {
    number++;
}

increase(number);
console.log(number); // 10

/*- When we call increase and pass this number variable its value is copied into this 'number' parameter that is local on this function so the number inside the function and the variable 'number' are completly independent.
- this is becauce primitives are copied
- changing to the reference type or an object */

let obj = { value: 10 }

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // { value: 11 }

/*- the reason for this is becauce when we call increase and pass this object this object is passed by the reference so the local parameter points to the same object declared before.
- We have two variables that points to the same object */