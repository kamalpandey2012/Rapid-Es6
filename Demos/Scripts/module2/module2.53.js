//demo#53
//Destructuring objects
'use strict';
let salary = {
	low: '32000',
	avg: '40000',
	high: '88000'
}
let { low , avg , high} = salary;
console.log('high salary ' + high);
