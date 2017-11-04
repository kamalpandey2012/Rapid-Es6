//demo#39
'use strict';
let price = 39, quantity= 4;
let productValue = {
	price,
	quantity,
	calculatePrice(){
		return price*quantity;
	}
}
console.log(productValue.calculatePrice());

