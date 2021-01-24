/* Abstraction 
- using the same example we´re gonna add some complexity adding a new property and a new method that will be called isnside the draw method*/

function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimumLocation = function () {
        // ...
    }

    this.draw = function () {
        this.computeOptimumLocation();

        console.log('draw');
    }
}

const circle = new Circle(10);

//- There´s a problem with this implementation. If we accidentally call the computeOptimumLocation method maybe this will put the object on a back state and calling draw method will throw an error*/

circle.computeOptimumLocation();
circle.draw();

/*- Abrstraction concept means that we have to hide the details and show only the essencials.
- In this case we have to hide these both new property and method. These are implementation details, part of the complexity of this object.
- The essentials are only the radious and the draw method


--------------------------
Private properties and methods
- If you declare a variable inside the object will be a local variable and not a property accesible from the outside.
    Will be let color = 'red';
    instead of this.color = 'red';

- defaultLocation can be declared as a local variable and computeOptimumLocation method to a private method without using 'this'.
- that´s because of the 'closure' of javascript. The scope of a variable declared inside a function is a local scope of that function.
- In contrast to scope we have closure. Closure will determine wich variable will be accessible to an inner function. So this function will be able to access to all the variables defined within its scope as well as the variables declared in its parent function.
- scope it´s temporary. Once the variable is called it dies ans if its called again it´s reinitialized.
- closure stays there and those variables called within the parent scope of a function will preserve their state because they´re part of the closure of this draw function (defaultLocation property and computeOptimumLocation method). */

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function () {
        // ...
    }

    this.draw = function () {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log('draw');
    }
}

const circle = new Circle(10);

//- to call those properties and methods inside draw method you simply put them without 'this'. But if you want to access members of this new circle object you need to use 'this' (e.g. this.radius)