//demo#30
'use strict'
let getPrice = function(param1, param2 =100, param3 = 300){     
	console.log(arguments.length);
	for(let i=0;i<arguments.length-1; i++){
		console.log(arguments[i]);
	}
};
getPrice(10);
