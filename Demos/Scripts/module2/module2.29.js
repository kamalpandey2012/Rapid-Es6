//demo#29
'use strict';
let getTax = price => 0.7*price;
let getPrice = (price =1000, tax = getTax(price)) => {
	 let totalPrice = price + tax;
	 return totalPrice;
};

console.log(getPrice());
