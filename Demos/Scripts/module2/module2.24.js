//demo#24
'use strict';
let cat = {
	age:4,
	getAge: function(){
		return () => console.log(this.age);
	}
};

let newCat = {
	age:2,
};

cat.getAge().bind(newCat);
cat.getAge().call(newCat);
cat.getAge().apply(newCat);
