/* Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:*/

(function () {
    console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

/*Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

---------------------------------

Exercise: Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE). */

/*
function makeNest() {
    console.log("A cozy nest is ready");
}

makeNest();
*/

(function () {
    console.log("A cozy nest is ready");
})()

// =======================================

/* Use an IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins: */

function glideMixin(obj) {
    obj.glide = function () {
        console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    };
}
// We can group these mixins into a module as follows:

let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})(); // The two parentheses cause the function to be immediately invoked

// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

motionModule.glideMixin(duck);
duck.glide();

// ---------------------------------

// Exercise: Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },

        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();