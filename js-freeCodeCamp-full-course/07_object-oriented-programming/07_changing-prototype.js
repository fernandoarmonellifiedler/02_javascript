/* Change the Prototype to a New Object

Up until now you have been adding properties to the prototype individually:*/

Bird.prototype.numLegs = 2;

// This becomes tedious after more than a few properties.

Bird.prototype.eat = function () {
    console.log("nom nom nom");
}

Bird.prototype.describe = function () {
    console.log("My name is " + this.name);
}

// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// ----------------------------------

// Exercise: Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log('waka waka');
    },
    describe: function () {
        console.log('My name is ' + this.name)
    }
};

// ==========================================

/* Remember to Set the Constructor Property when Changing the Prototype

There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:*/

duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works

// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
    constructor: Bird, // define the constructor property
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// ----------------------------------

// Exercise: Define the constructor property on the Dog prototype. */

function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};
