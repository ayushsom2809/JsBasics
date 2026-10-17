// ABOUT OBJECTS IN JAVASCRIPT
// objects are used to store multiple values in a single variable. They are a collection of properties, where each property is a key-value pair. The key is a string and the value can be any data type, including other objects.

let person = {
    name: "John",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    greet: function(){
        return "Hello, my name is " + this.name;
    }
};

console.log(person.name); // outputs "John"
console.log(person.age); // outputs 30
console.log(person.hobbies[1]); // outputs "traveling"
console.log(person.address.city); // outputs "New York"
console.log(person.greet()); // outputs "Hello, my name is John"

// we can also add new properties to an object using dot notation or bracket notation

person.gender = "male"; // adding new property using dot notation
person["country"] = "USA"; // adding new property using bracket notation

console.log(person.gender); // outputs "male"
console.log(person.country); // outputs "USA"

// we can also delete properties from an object using the delete operator


delete person.isMarried; // deleting property using delete operator
console.log(person.isMarried); // outputs undefined

// we can also loop through the properties of an object using for...in loop

for(let key in person){
    console.log(key + ": " + person[key]);
}

// outputs:
// name: John
// age: 30
// hobbies: reading,traveling,swimming
// address: [object Object]
// greet: function(){
//     return "Hello, my name is " + this.name;
// }
// gender: male
// country: USA 