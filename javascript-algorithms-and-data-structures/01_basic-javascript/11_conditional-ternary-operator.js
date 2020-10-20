/* The Conditional (Ternary) Operator:
- The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? expression-if-true : expression-if-false;

The following function uses an if-else statement to check a condition:*/

function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }

// This can be re-written using the conditional operator:

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
  }

/* Exercise: se the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

/* Use Multiple Conditional (Ternary) Operators:
- You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:*/

function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }

// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual2(a,b) {
    return (a === b) ? "a and b are equal"
        : (a > b) ? "a i greater"
        : "b is greater"
}

// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual3(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  }

// Exercise: In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".

function checkSign(num) {
    return (num === 0) ? "zero"
        : (num < 0) ? "negative"
        : "positive"
}

checkSign(10);
console.log(checkSign(-10))