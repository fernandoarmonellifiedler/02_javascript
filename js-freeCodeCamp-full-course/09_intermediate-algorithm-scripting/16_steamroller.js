/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.*/

// incompleto
function steamrollArray(arr) {
    let newArr = [...arr];
    //let flatArr = [];

    function flatThis(array) {
        let flatArr = [];

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {

                // ver

            }
        }
    }
    // esto flatea una sola vez
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            flatArr.push(arr[i][j])
        }
    }

    return arr;
}


steamrollArray([1, [2], [3, [[4]]]]);



steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].

//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.