//demo#49
//What happens when middle or any element of array is skipped or defined 'undefined'
'use strict'
let salary  = [20000, 40000, 88000];
let [low, ,high] = salary;
console.log('high salary '+ high);
console.log('low salary ' + low);
