/* Adding/Removing Properties
- So we have the Circle constructor function */

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// - And the circle object
const circle = new Circle(10);

/*- This objects in js are dinamic. That means after you create them you can add or delete properties. For example, a token property
- because we dont have classes we dont need to predefine this properties, we can add them when we need them.*/

// add location property using dot notation
circle.location = { x: 1 }; 

// add location property using bracket notation
circle['location'] = { x: 1 }; 

//- Bracket notation is useful when you need to dinamically access a property name */
const propertyName = 'location';
circle[propertyName] = { x: 1 };

//- Another use case for using bracket notation is when you´re using the property names that are not valid identifiers 
const propertyName = 'center-location';
circle[propertyName] = { x: 1 };


/*- We can also delete object properties when, for example, when we dont want to sent some user properties to a client (pass, credit card info)
- we use the delete operator */

delete circle.location;