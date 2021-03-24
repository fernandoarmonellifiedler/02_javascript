/* There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array. */

/* Accessing Object Properties with Dot Notation:
- Dot notation is what you use when you know the name of the property you're trying to access ahead of time. */
var testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

/* Accessing Object Properties with Bracket Notation:
 - Use it if the property of the object you are trying to access has a space in its name (however, you can still use bracket notation on object properties without spaces). */
var testObj2 = {
  'an entree': 'hamburguer',
  'my side': 'veggies',
  'the drink': 'water',
};
var entreeValue = testObj2['an entree'];
var drinkValue = testObj2['the drink'];

/* Accessing Object Properties with Variables:
- With bracket notation we can access a property which is stored as the value of a variable (This can be very useful for iterating through an object's properties or when accessing a lookup table.).*/
var dogs = {
  Fido: 'Mutt',
  Hunter: 'Doberman',
  Snoopie: 'Beagle',
};

var myDog = 'Hunter';
var myBreed = dogs[myDog]; // "Doberman"
/*- Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows: */
var someObj = {
  propName: 'John',
};

function propPrefix(str) {
  var s = 'prop';
  return s + str;
}

var someProp = propPrefix('Name'); // someProp now holds the value 'propName'
someObj[someProp]; // "John"

/* Add New Properties to a JavaScript Object */
var ourDog = {
  name: 'Camper',
  legs: 4,
  tails: 1,
  friends: ['everything!'],
};

ourDog.bark = 'bow-wow';

/* Delete Properties from a JavaScript Object */
delete ourDog.bark;

/* Testing Objects for Properties:
- Sometimes it is useful to check if the property of a given object exists or not.
- We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not. */
var myObj = {
  top: 'hat',
  bottom: 'pants',
};
myObj.hasOwnProperty('top'); //true
myObj.hasOwnProperty('middle'); //false

/* Exercise: Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found". */

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return 'Not Found';
  }
}

/* Manipulating Complex Objects:
- This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array.
- Objects hold data in a property, which has a key-value format. - In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk". JavaScript Object Notation or JSON is a related data interchange format used to store data. */

var myMusic = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    release_year: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
  /* Exercise: Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings. */
  {
    artist: 'Gorillaz',
    title: 'Empire Ants',
    release_year: 2011,
    formats: ['CD', '8T', 'LP'],
  },
];

/* Accessing Nested Objects: The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Exercise: Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.*/
var myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line

/* Accessing Nested Arrays: objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays. */
var myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
];

var secondTree = myPlants[1].list[1]; // Change this line

/* Record Collection Exercise:
- You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

- You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function:

1) Your function must always return the entire object. OK!
2) If prop isn't tracks and value isn't an empty string, update or set that album's prop to value. OK!

3) If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it. OK!
4) If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array. OK!

5) If value is an empty string, delete the given prop property from the album. OK!
*/

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (value === '') {
    delete object[id][prop];
  } else if (prop === 'tracks') {
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }
  return object;
}

console.log(updateRecords(collection, 2468, 'tracks', '1997'));

/* 
RESPUESTA CORRECTA
function updateRecords(object, id, prop, value) {
  if (value === "") {
    delete object[id][prop];
  } else if (prop === "tracks") {
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }
  return object;
}

RESPUESTA INCOMPLETA
function updateRecords(object, id, prop, value) {
  if (value === "") {
    delete object[id][prop];
  } else if (prop === "tracks") {
    if (object[id].hasOwnProperty("tracks") !== true) {
      object[id][prop] = [];
      object[id][prop] = value;
    } else if (value !== "") {
      object[id][prop].push(value);
    } else {
    object[id][prop] = value;
    }
  }
  return object;
}

OTRA MAS
function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    object[id][prop] = value;
  }
  if (prop === 'tracks' && object[id].hasOwnProperty("tracks") === false) {
    object[id][prop] = [];
    object[id][prop] = value;
  }
  if (prop === 'tracks' && value !== '') {
    object[id][prop].push(value);
  }
  return object;
}
*/
