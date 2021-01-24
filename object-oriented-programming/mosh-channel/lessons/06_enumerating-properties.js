/* Enumerating properties
- we can enumerate or iterate using the for/in loop */

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {
    console.log(key);
}

//- if you want to get the value of the property you can use the bracket notation

for (let key in circle) {
    console.log(key, circle[key]);
}

//- if you want the properties and not the methods we can use the tipeof operator to check the type of this value

for (let key in circle) {
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

//- Another approach to get all the keys in an object (and return an array). But we cannot separate properties from methods

const keys = Object.keys(circle);
console.log(keys);

//- Finally, sometimes you want to know if an object has a given property.  For that we use the in operator putting the name of the property as a string

if ('radius' in circle)
    console.log('Circle has a radius');