//demo#13
//modifying function of parent class
'use strict';
class Project {
	getTaskCount(){
		return 50;
	}
};

class SoftwareProject extends Project{
	getTaskCount(){
		return super.getTaskCount() + 6;
	}
};

let p = new SoftwareProject();
console.log(p.getTaskCount());

