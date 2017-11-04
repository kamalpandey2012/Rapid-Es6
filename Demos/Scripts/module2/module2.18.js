//demo#18
'use strict';
let getPrice = (count, tax) => {
	let price = count * 4; 
	price *= (1 + tax);
	return price;
};
console.log(getPrice(4, .16));
