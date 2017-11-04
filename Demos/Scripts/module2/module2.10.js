'use strict';
let updateFunctions = [];
for (let i=0; i<2; i++){
	updateFunctions.push(function(){return i});
}
console.log(updateFunctions[0]());
