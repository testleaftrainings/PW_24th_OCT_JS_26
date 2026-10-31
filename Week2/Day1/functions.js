//Named function
//reusable step in test script
lanunchApp()
function lanunchApp(){
    console.log('App launched');
    
}

//lanunchApp()

//function expression (annonymous function)

//function without name , stored inside a variable
//syntax to create function
// function name(params) {
    
// }
//login()
let login = function (a,b){
    console.log('Login successfull');
    console.log(a+b);
    
}

login(2,3)

//Arrow function

//short and modern way of writing functions

let add = (a,b)=>a+b

console.log(add(5,9));

let funArrow =()=>{
    console.log('Hello Team I am an arrow function');
    
}

funArrow()
//syntax for arrow function
// async (params) => {
    
// }