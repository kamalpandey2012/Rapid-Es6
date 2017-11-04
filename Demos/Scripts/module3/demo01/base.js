//No need to declare use strict if working with default system.import as it always works in strict mode
'use strict';
//importing another module in javascript ES6 
// to import single variable 
// import {newProductId } from ./module1.js
// try changing projectName variable it will throw an runtime error as imports are readonly to help preserve modularity. 
// one can also import objects and its properties could be changed in runtime. Look at third parameter 
import {newProductId, projectName, newObj, showProjectId} from './module1.js';

let productId = 99;
//changing property of imported object is perfectly fine
newObj.description = 'some Description';
console.log('in base js');
console.log(`project name ${projectName}`);
console.log(`product id ${productId}`);
console.log(`new product id ${newProductId}`);
console.log(`project id  ${newObj.projectId}`);
console.log(`Description ${newObj.description}`);
newObj.projectId = 111;
//check the output of function that is printing value on module1.js
showProjectId();
//something interesting happened the value gets synched to module1.js. We are able to modify contents of other modules using properties of 
