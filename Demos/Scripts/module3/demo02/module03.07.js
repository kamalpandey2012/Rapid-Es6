//Demo#08
//Extend and super
//submodule
//Extend helps in inheritance of objects

'use strict';
class Project {
	constructor(){
		console.log('Inside project  constructor function');
	}
}
class SoftwareProject extends Project{
}

let p = new SoftwareProject();
//here no constructor inside the SoftwareProject class but still we will get the output of 'Inside project constructor function' as extends help in inheriting all properties of class that is being extended
