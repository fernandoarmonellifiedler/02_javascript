/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument. */

// WORKING SOLUTION

function whatIsInAName(collection, source) {
    var arr = [];

    // Only change code below this line
    let sourceKey = Object.keys(source); // [ 'apple' ]
    let sourceVal = Object.values(source); // [ 1 ]

    let matchObj = collection
        //.map(obj => Object.keys(obj))
        .filter(obj => obj.hasOwnProperty(sourceKey))

    console.log(matchObj);
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([
    { "apple": 1 },
    { "apple": 1 },
    { "apple": 1, "bat": 2 }],

    { "apple": 1 }))

/* WORKING SOLUTION - CASE 1
function whatIsInAName(collection, source) {
    var arr = [];

    // Only change code below this line
    let sourceKey = Object.keys(source); // ['last']
    let sourceVal = Object.values(source); // ['Capulet']

    for (let i = 0; i < collection.length; i++) {

        if (collection[i]['last'] == sourceVal) {
            console.log('OK!');
            arr.push(collection[i])
        } else {
            console.log('NO!');
        }
    }
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }],

    { last: "Capulet" }));
*/