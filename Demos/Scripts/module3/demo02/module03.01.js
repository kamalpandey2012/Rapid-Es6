//demo#01
//class fundamentals
//simple class definition demo
class Task{ //Capital letter by convention

}
let task = new Task();

console.log(typeof Task); // function. This explains class is nothing but a constructor function of ES5
console.log(typeof task);// object. as class is blueprint to create multiple objects and task is one of them
console.log(task instanceof Task); // true as task is instance of class 'Task'

console.log(global.Task === Task) //false as class does not pollute global namespace. If running this code on browser use window object instead of global
