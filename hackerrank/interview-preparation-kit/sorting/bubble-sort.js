/* Sorting: Bubble Sort
Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
    
}

Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
First Element: firstElement, where firstElement is the first element in the sorted array.
Last Element: lastElement, where lasElement is the last element in the sorted array.

Example
swap    a       
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]

The steps of the bubble sort are shown above. It took 3 swaps to sort the array. Output is:

Array is sorted in 3 swaps.  
First Element: 1  
Last Element: 6  


Function Description
Complete the function countSwaps in the editor below.

countSwaps has the following parameter(s):
  - int a[n]: an array of integers to sort

Prints
Print the three lines required, then return. No return value is expected.

Input Format
The first line contains an integer, n, the size of the array a.
The second line contains n space-separated integers a[i].

Sample Input 1
3
3 2 1

Sample Output 1

Array is sorted in 3 swaps.
First Element: 1
Last Element: 3

At this point the array is sorted and the three lines of output are printed to stdout.
 */

function countSwaps(a) {
  let arr = [...a];
  let swapCount = 0

  for (let j = 0 ; j < arr.length ; j ++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        swapCount++;
        let prev = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = prev
      }
    }
  }
  
  console.log(`Array is sorted in ${swapCount} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[arr.length-1]}`);
}

console.log(countSwaps([1, 2, 3]));

/*

for (let j = 0 ; j < array.length-1; j++) {
          console.log(array[i], array[j+1]);
          if (array[i] < array[j+1]) {
            let mayor = a[i];
            let menor = a[j+1];
            console.log('swap!');
            array[i] = menor;
            array[j] = mayor;
          }
      }
      
      */
