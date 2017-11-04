//demo#22
'use strict';
let cat = {
	age: 4,
	makeSound: () => console.log(this)
}
cat.makeSound();
