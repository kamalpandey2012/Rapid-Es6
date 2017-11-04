let newObj = {
	projectId : 101,
	description:'no description found'
};
let newProductId = 56;
let projectName = 'build it';

//export let newProductId = 56;
//exporting another variable 
//export let projectName = 'Build It';
//exporting function and looking at its property in other module 

let showProjectId = function(){
	console.log(`project id in module1 ${newObj.projectId}`);
};
export {newProductId, projectName, newObj, showProjectId}

