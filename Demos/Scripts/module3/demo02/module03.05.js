//demo#05
//assigning this with call keyword to function in ES5
'use strict';
let Task = function(){
	console.log('inside constructor');
	console.log(this.id);
};
let task = {id: 20};
Task.call(task);
// here this is assigned to task object and every property of task could be called inside the Task function with this keyword
