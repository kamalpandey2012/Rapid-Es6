//demo#34
'use strict';
let newFunction = new Function('...categories','return categories');
console.log(newFunction('home appliances', 'electronics'));
