/* New Year Chaos
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example
q = [1,2,3,5,4,6,7,8]
If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.

q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

Function Description
Complete the function minimumBribes in the editor below.

minimumBribes has the following parameter(s):
  - int q[n]: the positions of the people after all bribes

Returns
  - No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.

Input Format
The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in the queue
- The second line has n space-separated integers describing the final state of the queue.
*/

// closer solution (time limit exceeded)
function minimumBribes(q) {
  let count = 0;
  for (let i = 0; i < q.length; i++) {
    let originalIndex = q[i] - 1;
    let finalIndex = q.indexOf(q[i]);
    let moves =
      originalIndex > finalIndex
        ? originalIndex - finalIndex
        : finalIndex - originalIndex;
    if (moves > 2 && originalIndex > finalIndex)
      return console.log('Too chaotic');

    for (let j = 0; j < q.indexOf(q[i]); j++) {
      if (q[i] < q[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
// [0, 0, 2, 1, 2, 2, 1, 4]
// [0, 0, 0, 1, 0, 0, 2, 4]

console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
// 12345678
// 12354678
// 12534768
// 12537468
// 12537648 ---
// 12537684
// 12537864

// function howManyMoves(n, arr) {
//   let originalIndex = n - 1;
//   let finalIndex = arr.indexOf(n);
//   let result =
//     originalIndex > finalIndex
//       ? originalIndex - finalIndex
//       : finalIndex - originalIndex;
//   console.log('num ' + n, 'mov ' + result);
//   return result;
// }

// let moves = howManyMoves(q[i], q);
// console.log('number'+q[i], 'moves'+moves);

// function minimumBribes(q) {
//   let counter = 0;
//   let moves = [];
//   for (let i in q) {
//     let originalIndex = q[i] - 1;
//     let finalIndex = q.indexOf(q[i]);

//     // let moves =
//     //   originalIndex > finalIndex
//     //     ? originalIndex - finalIndex
//     //     : finalIndex - originalIndex;
//     if (originalIndex > finalIndex) {
//       moves.push(originalIndex - finalIndex);
//     }
//     else {
//       moves.push(finalIndex - originalIndex);
//     }

//     console.log('num ' + q[i], 'mov ' + moves);

//     // if (moves > 2) {
//     //   return console.log('Too chaotic');
//     // } else {
//     //   counter += moves;
//     // }
//   }
//   console.log(moves);
// }
