'use strict';
let cat = {
	age: 4,
	sound:'meww',
	makeSound:function(){
		return () => console.log(this.sound);
	}
};
console.log(cat.makeSound()());
