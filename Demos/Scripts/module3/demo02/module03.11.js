//demo#11
//If task count is overrided in extend
'use strict';
class Project {
	getTaskCount(){
		return 50;
	}
}
class SoftwareProject extends Project{
	getTaskCount(){
		return 66;
	}
}

let p = new SoftwareProject();

console.log(p.getTaskCount());
// If extend has same function name than it will be overrided
