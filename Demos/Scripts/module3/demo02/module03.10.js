//demo#10
//Declaring methods inside class

'use strict';
class Project{
	getTaskCount(){
		return 50;
	}
}

class SoftwareProject extends Project{
}

let p = new SoftwareProject();
console.log(p.getTaskCount());
