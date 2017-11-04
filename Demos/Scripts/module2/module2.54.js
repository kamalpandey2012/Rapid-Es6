//demo#55
//destructing objects and assigning it to new properties
'use strict';
let salary = {
	low: 20000,
	avg : 40000,
	high: 89000
};

let {low: newLow, avg: newAvg, high: newHigh} = salary;
console.log('new high ' + newHigh);


