/* Value vs reference types */

let x = 10;
let y = x;

x = 20

// ----------------

let x = { value: 10 };
let y = x;

x.value = 20

// ----------------
let number = 10

function increase(number) {
    number++;
}

increase(number);
console.log(number); // 11

