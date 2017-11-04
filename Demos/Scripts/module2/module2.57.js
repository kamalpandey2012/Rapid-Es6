//demo#57
//Try catch using destructuring
'use strict';
try{
	let [high, low] = null;
}
catch(e){
	console.log('error '+ e.name);
}
