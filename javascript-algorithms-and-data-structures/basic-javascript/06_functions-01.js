/* Returning Boolean Values from FunctionsPassed:
- All comparison operators return a boolean true or false value.
- Since === returns true or false, we can return the result of the comparison: */
function isEqual(a,b) {
    return a === b;
  }

/* Fix the function isLess to remove the if/else statements */
function isLess(a, b) {
    return a < b
}

isLess(10,15)

/* Return Early Pattern for Functions:
- When a return statement is reached, the execution of the current function stops and control returns to the calling location. */

/* Exercise Counting Cards:
- In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

- Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	 Cards
+1	             2, 3, 4, 5, 6
 0	             7, 8, 9
-1	             10, 'J', 'Q', 'K', 'A'
*/
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count-- 
            break
    }

    if (count > 0) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }
}


console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'))