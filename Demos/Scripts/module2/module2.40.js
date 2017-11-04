//demo#40
'use strict';
let price = 40, quantity = 4;
let productValue = {
	price: 50,
	quantity:5,
	calculatePrice(){
		return this.price * this.quantity;
	}
};
console.log(productValue.calculatePrice());
