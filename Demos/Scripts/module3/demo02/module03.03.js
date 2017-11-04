//demo#03
//Constructor demo
'use strict';
class Task{
	constructor() {
		console.log('id 99'); 
	}
	showId(){
		console.log(99);
	}
}

let task = new Task();

// make another class and declare variable inside it
//section#2
class SomeOtherTask{
	let id =100;
	constructor(){
		console.log(id);
	}
}
let someOtherTask = new SomeOtherTask();
// section#2 will throw unexpected identifier error as it is not possible to declare variable inside class yet
