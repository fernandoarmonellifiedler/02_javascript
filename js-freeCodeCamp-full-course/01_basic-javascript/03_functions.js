/* Write Reusable JavaScript with Functions */
function functionName() {
    console.log("Hello World");
  }

/* Passing Values to Functions with ArgumentsPassed */
function testFun(param1, param2) {
      console.log(param1, param2)
  }

testFun("Hello", "World!") // Hello World!

/* Introducing Local and Global scopes: It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable */
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
myFun() //Head

/* Understanding Undefined Value returned from a Function */
var sum = 0
function addSum(num) {
    sum = sum + num;
    return sum
}

addSum(3) // 3
addSum(4) // 7

/* Assignment with a Returned ValuePassed */
function funcSum(a, b) {
    return a + b
}

var ourSum = funcSum(5,12) // 17

/* Stand in Line Exercise:
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array and return the element that was removed */
function nextInLine(arr, item) {
    arr.push(item)
    var removed = arr.shift()
    console.log(arr)
    return removed
}

var array1 = [6,4,7,8,2]
console.log(nextInLine(array1, 9))
/*  */
/*  */