//demo#59
//for of loop with destructing
'use strict';
let count =0;
for(let [a,b,c] of [[5,10, 17]]){
	console.log(`${a} ${b} ${c}`);
	count ++; 
}
console.log(count);

