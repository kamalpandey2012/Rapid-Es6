//demo#49
//Using rest operator
'use strict';
let salary = [20000, 40000, 88000];
let [low, ...remaining] = salary;
console.log(remaining);
