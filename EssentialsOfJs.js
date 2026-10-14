// Syntax of JavaScript will comprsise of the following components:
// Lierals and variables; comments; difference in let;var;const 

// Literals are fixed values like numbers, strings, booleans, null, undefined, and objects.
// Variables are (variable values as the name suggests) could be changed or updated. Variables are declared using var, let, or const keywords.



// Variables are data containers
// Modern javascript uses let and const 
// Older javascript uses var

// Let keyword was introduced in es6 (2015)
// let have a block scope and must be declared before use and connot be redeclared in the same scope

// block scope
{
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // ReferenceError: x is not defined as x is block scoped

// const keyword was also introduced in es6 (2015)
// const have a block scope and must be declared before use and connot be redeclared in the same scope
// const variables cannot be reassigned but can be mutated if they are objects or arrays

// block scope
{
    const y = 20;
    console.log(y); // 20
}
// console.log(y); // ReferenceError: y is not defined as y is block scoped

// var keyword was introduced in es5 (2009)
// var have a function scope and can be redeclared and updated within the same scope

// function scope
function myFunction() {
    var z = 30;
    console.log(z); // 30
}
myFunction();
// console.log(z); // ReferenceError: z is not defined as z is function scoped