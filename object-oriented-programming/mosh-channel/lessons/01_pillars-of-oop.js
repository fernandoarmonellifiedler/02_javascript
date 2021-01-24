/* Pillars of OOP
- There are four pillars of OOP.
    - Encapsulation
    - Abstraction
    - Inheritance
    - Polymorphism

--------------------------
1) Encapsulation
- OOP will combine a group of related variables and functions into a unit reducing complexity and increasing reusability.
- This unit is called Object.
- Variables are called Properties and Functions are called Methods.

E.g., a car Object will have:

Properties:
    - make
    - model
    - color

Methods:
    - start()
    - stop()
    - move()

Another example: Calculating the wage of an employee

- This is a procedural implementation (variables on one side and functions on the other side) */
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// Object Oriented way: 
let employee = {
    baseSalary : 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getWage();

/* What are the advantages?
- The getWage function doesn´t have any parameters. They are highly related

--------------------------
2) Abstraction
- You can hide some of the properties and methods from the outside and show only the esencials
- It makes a simpler interface
- Reduce the impact of change

--------------------------
3) Inheritance
- Allows you to eliminate redundant code. 
- E.g., in html you have multiple tags, each one with hidden and innerHTML properties in common, and methods like click() and focus(). Instead of redefining all this props and methods for each one of the elements we can define it once in a generic object (called HTMLElement) and have other objects to inherit this properties and methods.

--------------------------
4) Polymorphism (many forms)
- Allows you to get rid of long and ugly switch/case elements.
- For example, all the previous HTML elements should have the hability to be rendered on a page but the way each element is rendered is different from the others.
- On a procedural way our code will look like this: */

switch(x) {
    case 'select': renderSelect();
    case 'text': renderTextBox();
    case 'checkbox': renderCheckBox();
    // and so on..
}

// On the OOP, we can impolement a render() in each of these objects and the render() method will behave differently depending of the type of the object they are referencing. It will look like this:

element.render(); 