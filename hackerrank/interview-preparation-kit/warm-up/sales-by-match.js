/* Problem
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1,2,1,2,1,3,2]

There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
  - int n: the number of socks in the pile
  - int ar[n]: the colors of each sock

  Returns
  - int: the number of pairs

Input Format
The first line contains an integer , the number of socks represented in ar.
The second line contains  space-separated integers, ar[i] , the colors of the socks in the pile.


Sample Input
STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

Sample Output
3
There are three pairs of socks.
*/

function sockMerchant(n, ar) {
  let duplicates = ar.reduce(function (acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc;
  }, []);
  let count = 0;
  duplicates.map((item) => {
    ar.filter((itemArr) => {
      if (itemArr === item) count += 1;
    });
  });
  let result = Math.floor(count / 2);

  return result;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
