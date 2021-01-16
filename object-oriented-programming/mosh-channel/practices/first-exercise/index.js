// defining and object literal
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

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw')
    }
}

const another = new Circle(1);