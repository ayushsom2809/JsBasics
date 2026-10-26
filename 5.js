// JVASCRIPT SETS

//  set it a collection of uniques values, and value occurs only once in a set


// we can create set by passing array to new Set() constructor
// create and empty set and add value using add() method

const letters = new Set(['a', 'b', 'c']);
console.log(letters); // outputs Set(3) { 'a', 'b', 'c' }

// add values
letters.add('d');
letters.add('e');
console.log(letters); // outputs Set(5) { 'a', 'b', 'c', 'd', 'e' }

// typeof set returns object
console.log(typeof letters); // outputs object

// we can also create set from string
const letters2 = new Set('abcde');
console.log(letters2); // outputs Set(5) { 'a', 'b', 'c', 'd', 'e' }

// we can also create set from array
const letters3 = new Set(['a', 'b', 'c', 'd', 'e']);
console.log(letters3); // outputs Set(5) { 'a', 'b', 'c', 'd', 'e' }

// we can also create set from another set
const letters4 = new Set(letters3);
console.log(letters4); // outputs Set(5) { 'a', 'b', 'c', 'd', 'e' }        





