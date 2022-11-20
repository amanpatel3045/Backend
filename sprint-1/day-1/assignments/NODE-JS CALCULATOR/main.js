const add = require('./operations/add');
const subtract = require('./operations/subtract');
const multiply = require('./operations/multiply');
const divide = require('./operations/divide');
const randomInt = require('./operations/random');


console.log(add(1,2));
console.log(subtract(5,2));
console.log(divide(10,2));
console.log(multiply(55,2));
console.log(randomInt(1,4));
