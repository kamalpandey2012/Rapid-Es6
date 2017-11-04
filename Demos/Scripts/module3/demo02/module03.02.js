//demo#02
//defining functions in class
'use strict';
class Task{
	showId(){ //remember the syntax of property literal
		console.log(99);
	}
}

let task =  new Task();
task.showId(); // lets find out where showId exist 

console.log(task.showId === Task.prototype.showId);// true 
// This implies showId is just in the prototype of function Task
