//demo#28
'use strict';
const TAX = 0.7;
let getPrice = (price = 1000, tax = price * TAX) =>{
	return price += tax;
}
console.log(getPrice());
