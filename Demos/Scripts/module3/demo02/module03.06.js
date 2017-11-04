//demo#6
//Checking above example with ES6
'use strict';
class Task{
	constructor(){
		console.log('inside constructor function');
		console.log(this.id);
	}
}
let task = {id: 20};
Task.call(task);
//TypeError class cannot be invoked without new keyword. In class it is not possible to force this context by any method like call, apply or bind. It workes similar to fat arrow function
