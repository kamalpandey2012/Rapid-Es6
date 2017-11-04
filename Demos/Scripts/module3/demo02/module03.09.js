//demo#09
//Using super
'use strict';
class Project {
	constructor(){
		console.log('constructing project');
	}
}

class SoftwareProject extends Project{
	constructor(){
		 super();
		console.log('constructing software project');
	}
}

let sp = new SoftwareProject();
//now try and comment out the super expression. Output will be this is not defined (Reference Error). When extended has constructor than super is mandatory as it references back to the upper constructor
