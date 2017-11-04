//demo#33
'use strict';
let newFunction = new Function('price =1000', 'return price');
console.log(newFunction());
