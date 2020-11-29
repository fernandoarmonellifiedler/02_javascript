/* Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use Bird’s prototype. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:*/

Bird.prototype.numLegs = 2;

// Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2

/* Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

-------------------------------

Add a numLegs property to the prototype of Dog*/

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle.numLegs) // 4

// ======================================

/* Iterate Over All Properties

You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.*/

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

// -------------------------------

// Exercise: Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps. */

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }