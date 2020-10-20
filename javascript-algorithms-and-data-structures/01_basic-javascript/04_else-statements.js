/* Conditional Logic with If Statements:
- When the condition evaluates to true, the program executes the statement inside the curly braces.
- When the Boolean condition evaluates to false, the statement inside the curly braces will not execute. */

function test (myCondition) {
    if (myCondition) {
       return "It was true";
    }
    return "It was false";
  }
test(true);  // returns "It was true"
test(false); // returns "It was false"

/* Comparing different values */
3 == "3" // Equality operator: returns true
3 === "3" // Strict equality operator: returns false

/* Using tipeof operator to determine the type of a variable or a value */
typeof 3 // returns 'number'
typeof "3" // returns 'string'

/* Introducing Else Statements:
- With an else statement, an alternate block of code can be executed if the condition is false
 */
function biggerOrNot(num) {
    if (num > 10) {
        return "Bigger than 10"
    } else {
        return "10 or less"
    }
}

/* Introducing Else If Statements:
- You can chain if statements together with else if statements if you have multiple conditions that need to be addressed
*/
function biggerOrNot2(num) {
    if (num > 15) {
        return "Bigger than 15"
    } else if (num < 5) {
        return "Smaller than 5"
    } else {
        return "Between 5 and 15"
    }
}

/* Chaining If Else Statements: Exercise
- Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }  
}
testSize(22) // returns Huge

/* Golf Code Exercise:
- In the game of golf each hole has a "par" meaning the average number of "strokes" a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below "par" your "strokes" are, there is a different nickname.
- Your function will be passed "par" and "strokes" arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	    Return
1	        "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!"
    } else if (strokes <= par - 2) {
        return "Eagle"
    } else if (strokes == par - 1) {
        return "Birdie"
    } else if (strokes == par) {
        return "Par"
    } else if (strokes == par + 1) {
        return "Bogey"
    } else if (strokes == par + 2) {
        return "Double Bogey"
    } else {
        return "Go Home!"
    }
  // Only change code above this line
}

console.log(golfScore(5, 4)); // should return "birdie"
