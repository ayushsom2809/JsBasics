// ABOUT ARRAY 

//its an object designed to store multiple values in a single variable.

const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
console.log(cars); // outputs ['BMW', 'Volvo', 'Saab', 'Ford']

//to access array in elements we use index number starting from 0
console.log(cars[0]); // outputs 'BMW'
console.log(cars[1]); // outputs 'Volvo'
console.log(cars[2]); // outputs 'Saab'
console.log(cars[3]); // outputs 'Ford'

//we can also change the value of an array element using its index number

cars[0] = 'Toyota';
console.log(cars); // outputs ['Toyota', 'Volvo', 'Saab', 'Ford']

//we can also add new elements to an array using the push() method

cars.push('Honda');
console.log(cars); // outputs ['Toyota', 'Volvo', 'Saab', 'Ford', 'Honda']

//we can also remove the last element from an array using the pop() method

cars.pop();
console.log(cars); // outputs ['Toyota', 'Volvo', 'Saab', 'Ford']

//we can also remove the first element from an array using the shift() method

cars.shift();
console.log(cars); // outputs ['Volvo', 'Saab', 'Ford']

//we can also add new elements to the beginning of an array using the unshift() method

cars.unshift('Mercedes');
console.log(cars); // outputs ['Mercedes', 'Volvo', 'Saab', 'Ford']

//we can also loop through the elements of an array using for loop

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//outputs:
// Mercedes
// Volvo
// Saab
// Ford

//we can also loop through the elements of an array using for...of loop

for(let car of cars){
    console.log(car);
}

//outputs:
// Mercedes
// Volvo
// Saab
// Ford

//we can also loop through the elements of an array using forEach() method

cars.forEach(function(car){
    console.log(car);
});

//outputs:
// Mercedes
// Volvo
// Saab
// Ford

//we can also use map() method to create a new array by applying a function to each element of the original array

const carNames = cars.map(function(car){
    return car.toUpperCase();
});
console.log(carNames); // outputs ['MERCEDES', 'VOLVO', 'SAAB', 'FORD']

//we can also use filter() method to create a new array with all elements that pass a test

const filteredCars = cars.filter(function(car){
    return car.startsWith('S');
});
console.log(filteredCars); // outputs ['Saab']

//we can also use find() method to return the first element that passes a test

const foundCar = cars.find(function(car){
    return car.startsWith('F');
});
console.log(foundCar); // outputs 'Ford'

//we can also use reduce() method to reduce the array to a single value

const totalLength = cars.reduce(function(total, car){
    return total + car.length;
}, 0);
console.log(totalLength); // outputs 20

//we can also use sort() method to sort the elements of an array

const sortedCars = cars.sort();
console.log(sortedCars); // outputs ['Ford', 'Mercedes', 'Saab', 'Volvo']

//we can also use reverse() method to reverse the order of the elements of an array

const reversedCars = cars.reverse();
console.log(reversedCars); // outputs ['Volvo', 'Saab', 'Mercedes', 'Ford']     