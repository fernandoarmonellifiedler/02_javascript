/* Access Array Data with Indexes */
var array = [34,69,12];
var data = array[1]; // 69

/* Modify Array Data with Indexes */
array[0] = 22; // [ 22, 69, 12 ]

/* Access Multi-Dimensional Arrays With Indexes */
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14]
];
arr[3] // [ [ 10, 11, 12 ], 13, 14 ]
arr[3][0] //[ 10, 11, 12 ]
arr[3][0][1] //11

/* .push(): to append data to the end of an array */
var arr1 = [1,2,3]
arr1.push(7) // [ 1, 2, 3, 7 ]

/* .pop(): removes the last element from an array and returns that element*/
var arr2 = [1,2,3,4]
arr2.pop() // arr2 = [ 1, 2, 3 ]
arr3 = arr2.pop() // arr3 = 3

/* .shift(): It works just like .pop(), except it removes the first element instead of the last */
var arr4 = arr2.shift() // 1

/* .unshift(): works exactly like .push(),but adds the element at the beginning of the array */
var ourArray = ["John","cat", "J"]
ourArray.unshift("cobra") // [ 'cobra', 'John', 'cat', 'J' ]

/* Shopping List Exercise: The list should be a multi-dimensional array containing several sub-arrays. */
var myList = [
    ["Agua",5],
    ["Chocolate",10],
    ["Cafe",15],
    ["Azucar",5],
    ["Té",30]
]