/* Define a Constructor Function

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:*/

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

/*
This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

    - Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
    - Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
    - Constructors define properties and behaviors instead of returning a value as other functions might.

-------------------------------

Exercise: Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively. */

function Dog() {
    this.name = "Bobby";
    this.color = "blue";
    this.numLegs = 4
}

// =============================================

/* Use a Constructor to Create Objects

Here's the Bird constructor from the previous challenge:*/

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
    // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();


// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2

// Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name; // => Elvira

// ----------------------------

//Exercise: Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();


// ==========================================

/* Extend Constructors to Receive Arguments

The Bird and Dog constructors from last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:*/

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

//Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

//Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2

/*The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

-------------------------------

Exercise: Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.*/

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
};

let terrier = new Dog("Pepe","White");