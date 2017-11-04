let getCategories = function(productId, ...categories){
	console.log(categories instanceof Array);
	console.log(categories);
	console.log(arguments.length);
	console.log('........');
};

getCategories(2002, 'electronics', 'home appliances', 'fridge');
getCategories(2002);
console.log(getCategories.length);
