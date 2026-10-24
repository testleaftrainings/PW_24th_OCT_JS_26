//scope defines wherea variable is accessible in your code

//function is reusable block of code 

//global scope can be accessed anywhere

let y = 60
var a = 10

function test(){
    console.log(a);
    console.log(y);
    
}

test()
console.log(a);

//function scope
//var is function scope
//let and const is block scope

function demo(){
    var x = 20
    console.log('inside the function accessing var',x);

    if(true){
let z = 50
const c = 30
console.log('Accessing z inside the block',z);
console.log('Accessing c inside the block',c);
console.log('Accessing x inside the block',x);
 }
 //console.log('Accessing z inside the function and outside the block',z);//ReferenceError: z is not defined
 
    
}

demo()
console.log('Accessing x outside the function',x); //ReferenceError: x is not defined



