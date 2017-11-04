//demo#52
//Passing parameter and destructing 
'use strict';
function reviewSalary([low, avg ] , high= 88000){
	console.log(avg);
}
reviewSalary([32000, 40000]);
