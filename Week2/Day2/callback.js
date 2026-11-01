//callback is a function passed as an argument to another function and 
//it's executed later after some task is completed


function login(cb,cb1){
    cb()
    cb1()
console.log('log in is successfull');
//cb()
//cb1()
}

function username(){
console.log('enter username');
//cb1()
}

function password(){
    console.log('enter password');
    
}

// function welcome(){
//     console.log('welcome to home page');
    
// }

login(username,password)

// // login(()=>{
// //     username(()=>{
// //         password(()=>{
// //             welcome()
// //         })
// //     })
// })