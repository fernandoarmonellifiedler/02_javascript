/* Use the JavaScript Console to Check the Value of a Variable:
- Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

- You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

- The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

- Here's an example to print 'Hello world!' to the console:

  console.log('Hello world!'); */


// Exercise: Use the console.log() method to print the value of the variable a where noted in the code.

let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(a);

// =============================================

/* Understanding the Differences between the freeCodeCamp and Browser Console:
- You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.

- The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.

- When you run ordinary JavaScript, the browser's console will display your console.log() statements the exact number of times it is called.

- The freeCodeCamp console will print your console.log() statements a short time after the editor detects a change in the script, as well as during testing.

- The freeCodeCamp console is cleared before the tests are run and, to avoid spam, only prints the logs during the first test (see the note below for exceptions).

- If you would like to see every log for every test, run the tests, and open the browser console. If you prefer to use the browser console, and want it to mimic the freeCodeCamp console, place console.clear() before any other console calls, to clear the browser console.

Note: console.logs inside functions are printed to the freeCodeCamp console whenever those functions are called, this can help debugging functions that are called during testing. */


// Exercise: First, use console.log to log the output variable. Then, use console.clear to clear the browser console.

// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.log(output);
// Run the tests to see the difference between the two consoles.
console.clear
// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
