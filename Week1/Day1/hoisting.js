//hoisting is default behavior in JS where declaration alone gets hoisted to the top of the scope
/* here we have 2 phase
1.memory creation phase -> JS prepares variables and function
2. execution phase -> js executes the code line by line */

//var is hoisted and if you access it before initialization, js returns undefined

console.log(x);

var x = 10
//console.log(x);

/* 
internally
var x
console.log(x)
x=10 */

//let is hoisted but cannot be accessed before initialized , resulting in referenceerror
//let => hoisting take place but throws reference error
console.log(y); //ReferenceError: Cannot access 'y' before initialization

let y = 20 //TDZ
//console.log(y);

/* 
let y
console.log(y)
y=20*/

//const 
console.log(z);//ReferenceError: Cannot access 'z' before initialization

const z = 30
