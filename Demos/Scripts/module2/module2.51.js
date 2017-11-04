//demo#51
//nested destructruring
'use strict';
let salary = [20000, 40000, [30000, 80000]];
let [low, medium, [mediumHigh, high]] = salary;
console.log('medium  high salary '+ mediumHigh);
console.log('low salary ' + low);
console.log('high salary ' + high);
