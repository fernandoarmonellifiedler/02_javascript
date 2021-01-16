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


const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();

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
- intead body, instead of returning an object we´re gonna use the "this" keyword to set the object properties.
- to create the object we use the "new" operator: this creates an empty object ({}). The it will set "this" to point to that object becauce by default it points to the global object (if new it´s not used it will point to window object / global object and we don´t want to do this). Finally it will return that object from Circle function. 
*/