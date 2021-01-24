/* Getters/Setters 
- More accurately, the variable and function declared with let are not private members of the Circle object. Technically they´re not inside. They´re are local variables declare inside the Circle function.
- But from a Object oriented point of view we can call them as the private members of the Circle object.

- Now, what if we want to display the defaultLocation somewhere inside our application? We just want to be able to read it. So we can add this.defaultLocation and we´ll be able to access from the outside */

function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return this.defaultLocation;
    }

    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.getDefaultLocation(); // here we can reach defaultLocation

//- But we can improve this so we can call default location like this:
circle.defaultLocation;

/*- to define a property like that we can use the object method defineProperty. the first argument is the object we´re gonna add a new property to (this) and the second, is the name of our property. The third argument is an object that has a key-value pair: the key is get and the value is a function.
- so when we call circle.defaultLocation the function inside get value is called */

Object.defineProperty(this, 'defaultLocation', {
    get: function () {
        return defaultLocation;
    }
})

/*- 'get' is a getter, a function that is used to read a property.
- the property defined in the second argument is called a read-only property*/

function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return this.defaultLocation;
    }

    this.draw = function () {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');

            defaultLocation = value;
        }
    })
}


/*- if you want to set a value of this property you have to define a setter. So, inside the defineProperty method you define a set key and a value function that takes one argument ('value') and defines defaultLocation with that argument.
- what is interesting is that we can do some validation of this value before setting it and throw an error using Error built-in method to throw a new error object. */

circle.defaultLocation = 1; // will throw 'Invalid location'