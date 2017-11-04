//similar example as previous with parameters getting passed
'use strict';
class Project {
	constructor(name){
		console.log(`constructing project ${name}`);
	}
}
class SoftwareProject extends Project{
}

let p = new SoftwareProject('Build It');
