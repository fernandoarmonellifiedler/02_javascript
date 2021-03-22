/* 2D Array - DS

Given a 6x6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

Example
arr = 
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

0 4 3
  1
8 6 6

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.


Function Description
Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):
  - int arr[6][6]: an array of integers

Returns
  - int: the maximum hourglass sum


Input Format
Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

Output Format
Print the largest (maximum) hourglass sum found in arr.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output
19

Explanation
arr contains the following hourglasses:

image

The hourglass with the maximum sum (19) is:

2 4 4
  2
1 2 4 */

function hourglassSum(arr) {
  let bigSum = 0;
  function createHourglass(array, x, y) {
    let hourglass = [];
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        if (i === x + 1) {
          hourglass.push(array[i][y + 1]);
          i++;
          j--;
        } else {
          hourglass.push(array[i][j]);
        }
      }
    }
    return hourglass.reduce((acc, item) => acc + item, 0);
  }
  bigSum = createHourglass(arr, 0, 0);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      console.log(createHourglass(arr, i, j) > bigSum);
      if (createHourglass(arr, i, j) > bigSum) {
        bigSum = createHourglass(arr, i, j);
      }
    }
  }
  return bigSum;
}

console.log(
  hourglassSum([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
  ])
);

// console.log(
//   hourglassSum([
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
//   ])
// );
