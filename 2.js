//  ALL ABOUT FUNCTIONS IN THIS FILE 



function sayHello(){
    return "hello";
}
console.log(sayHello());  // this is used to call a function and give the output

// a fucntion can be used multiple times 

function add(a, b){
    return a + b;
}
console.log(add(2, 3));
console.log(add(5, 10));


//  functions comprises of important component structure like 
//  parameter - names listed inside ( ) in fucntion definition
//  arguments - values passed to the function when it is invoked
//  return - value returned by the function when it is invoked



//  difference in parameter and argument is that parameter is used in function definition and argument is used in function invocation
// i.e the above add function has two parameters a and b and when we call the function add(2, 3) we are passing 2 and 3 as arguments to the function

function somethingA(a, b){
    return "done"; // if we comment this we will get output as "undefined"
    a + b; // this line will not be executed as the function will return "done" and exit the function
}
console.log(somethingA(2, 3)); // outputs "done"


function checkAge(age){
    if(age<18){
        return "too young";
    }
    return "old enough";
}
console.log(checkAge(15)); // outputs "too young"
console.log(checkAge(20)); // outputs "old enough"



// ARGUMENTS OBJECTS IN JAVASCRIPT
// arguments object is an array-like object that contains the values of the arguments passed to a function. It is available within all functions and can be used to access the arguments passed to the function.

function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3)); // outputs 6
console.log(sum(1, 2, 3, 4, 5)); // outputs 15


//  Fucntion expression means that we can store a function in a variable and call it using the variable name.

const multiply = function(a, b){
    return a * b;
}
console.log(multiply(2, 3)); // outputs 6
console.log(multiply(5, 10)); // outputs 50


//  fucntion declaration are hoisted to the top of their scope, meaning that they can be called before they are defined in the code but function expressions are not hoisted and can only be called after they are defined in the code.

//  function declaration
console.log(divide(10, 2));// outputs 5
function divide(a, b){
    return a / b;
}
 // outputs 5

//  function expression
console.log(subtract(10, 2)); // this will give an error as subtract is not defined yet   
const subtract = function(a, b){
    return a - b;
}





// ARROR FUNCTION IN JAVASCRIPT
//  arrow functions are a more concise way to write functions in JavaScript. They are defined using the => syntax and do not have their own this, arguments, super, or new.target keywords.

const divideArrow = (a, b) => {
    return a / b;
}
console.log(divideArrow(10, 2)); // outputs 5

//  if the function has only one parameter we can omit the parentheses around the parameter
const square = x => {
    return x * x;
}
console.log(square(5)); // outputs 25

//  if the function has only one line of code we can omit the curly braces and the return keyword
const cube = x => x * x * x;
console.log(cube(3)); // outputs 27

//  if the function has no parameters we can use empty parentheses
const greet = () => "hello";
console.log(greet()); // outputs "hello"        