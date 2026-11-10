
 // fucntions in depth 

const numbers = [1,2,3,4];
let text = '';
numbers.forEach(myTest1)
function myTest1(value){
   text += value + " "
}
console.log(text)


const number1 = [1,2,3,4];
const number2 = number1.map(myTest2);
console.log(number2);
function myTest2(value){
  return value*2;
}
// this is a gloabl object , precedence is call;bind;apply;object;global

function myTest3(){
  return this;
}

// call method used to call fucntion with a specifc this
// lets a object use method belonging to another object

// basic syntax
// functionName.call(this,arg1,arg2,...)

const person1 = {name:'ayush'};
const person2 = {name: 'sam'};
function greet(greetings){
  return greetings + " " + this.name
}
console.log(greet.call(person2,"hello"));


// apply method lets you write a method which can be used on different object
// its used to call a function with a specific this
// similar to call() but uses array as arguments

// basic syntax
// functionName.apply(this,[arg1,arg2,...]);
// example

const personInfo1={name:'ayush'};
const personInfo2={name:'sam'};
const personInfo3={name:'joe'};

function greetings1(greeting, greeting1){
  return greeting + " " + greeting1+ " "+this.name;
}
console.log(greetings1.apply(personInfo3,['hello',"wassup"]));


// main difference between call and apply is the way we pass arguments

// we should use call() if dont have an array























