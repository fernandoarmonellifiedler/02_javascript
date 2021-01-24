/* Objects
- We´ll see:
1) Creating Objects
2) Factories and Constructors
3) Primitives and Reference Types
4) Working with Properties
5) Private Properties
6) Getters / Setters

--------------------------
1) Object Literals
- The object literal sintax is defined by curly braces {} 
*/


const circles = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circles.draw();

/* -----------------------
2) Factories and Constructors
- If we want to create another circle we have to duplicate the code using the example before.
- If an object has one or more method we say that objects has behaviour.
- Creating an object using literal sintax is an issue only if the object has behaviour
- the solution is to use a factory or a constructor function
- instead of harcoding we add parameters to the constructor */

// Factory function
function createCircle(radius) {
    return {
        radius, // radius: radious
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

/*- Another way is using a constructor function
- We use uppercase for the name. 
- instead of class we use function (js doesn´t have the concept of classes)
- instead body, instead of returning an object we´re gonna use the "this" keyword to set the object properties.
- this.radius is a property and this.draw is a method
- to create the object we use the "new" operator: 
    1) this creates an empty object ({}). The it will set "this" to point to that object becauce by default it points to the global object (if new it´s not used it will point to window object / global object and we don´t want to do this).
    2) Finally it will return that object from Circle(radius) function.
    3) Note that we´ll not have a return keyword, this will happen automatically when we use the new operator */

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

/*- Both ways are regular functions in javascript.
- If we return an object we have a factory function. In contrast, if we use the this keyword along with the new operator we have a constructor function. So what is the difference?
- Developers from java and c# prefer the constructor function sinthax. Other prefer factory functions so they do not make mistakes forgeting the new operator.


--------------------------
Constructor property
- Every object in js has a property called "constructor" and that references the function that was used to construct or create and object.
- Here we have two objects: circle and another.

Another.contructor returns:
f Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

circle.constructor returns:
f Object() { [native code] }

- What happened? We know it is a function becauce of the f. Object first letter is uppercased so this is a bult-in constructor function in js.
- If we declare let x = {}; javascript will do something like this: let x = new Object();
- In js we have another bult-in constructors like:
    - new String() but we generally use the literals ('', "", ``) because its cleaner ans dsimpler than using the constructor
    - new Boolean(); // true, false are boolean literals
    - new Number();
- So, every object has a constructor property that references the function that was used to create that object.

--------------------------
Functions are objects
- in js functions are objects. So when we use the factory function to create an object internally javascript engine will use this function constructor (f Object() { [native code] }) to create this object.
- When declaring a function internally is represented like this: */
const Circle1 = new Function( 'radius', `
this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

const circle = new Circle1(1); // calling this we´ve created an object

//- Let´s see another built-in methods of an objects. 
Circle.call({}, 1)

/*- the first argument references the target of 'this'. In this case is an empty object and "this" will reference the object that we passed here. After that we give the argument explicitly
- So the expression is exactly like new Circle1(1). That´s becauce the new operator will create internally an empty object and pass it as the first argument to the call method. 'this' will point to that object. That´s why if we don´t use the new operator 'this' will point to the global object
- we have another method called apply but instead of passing the arguments explicitly we pass them in an array. This is useful if you already have an array somewhere in your application. */
Circle.apply({}, [1, 2, 3]);