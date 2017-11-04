//demo#47 Destructuring
//Destructuring means take apart structure of something like array or object. For Array we take out individual element. For object we can destructure or take out and reassign the properties. 
//String could also be destructured.
// Basic destructuring syntex example
'use strict';
let salary = [30000, 50000, 88000];
let [low, average, high] = salary;
console.log('Low salary '+ low);
console.log('High Salary ' + high);

