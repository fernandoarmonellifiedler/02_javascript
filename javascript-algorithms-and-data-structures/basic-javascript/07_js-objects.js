/* There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array. */

/* Accessing Object Properties with Dot Notation:
- Dot notation is what you use when you know the name of the property you're trying to access ahead of time. */
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

var hatValue = testObj.hat
var shirtValue = testObj.shirt

 /* Accessing Object Properties with Bracket Notation:
 - Use it if the property of the object you are trying to access has a space in its name (however, you can still use bracket notation on object properties without spaces). */
 var testObj2 = {
     "an entree": "hamburguer",
     "my side": "veggies",
     "the drink": "water"
 }
 var entreeValue = testObj2["an entree"]
 var drinkValue = testObj2["the drink"]

 /* Accessing Object Properties with Variables:
 - With bracket notation we can access a property which is stored as the value of a variable (This can be very useful for iterating through an object's properties or when accessing a lookup table.).*/
 var dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };

  var myDog = "Hunter";
  var myBreed = dogs[myDog]; // "Doberman"
/*- Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows: */
var someObj = {
    propName: "John"
};

function propPrefix(str) {
    var s = "prop";
    return s + str;
}

var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

