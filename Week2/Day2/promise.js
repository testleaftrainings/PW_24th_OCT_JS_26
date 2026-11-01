//this is old way of handling promise in js
//in modern js we use async and await to handle promise

/* it has 3 states
pending = still working
resolved = success
rejected = failed */

// let marks = 35
// //Creates a new Promise.
// let studentRecord = new Promise((success,failure)=>{

//     if(marks>35){
//         success('Passed')
//     }else{
//         failure('failed')
//     }
// })

// //console.log(studentRecord);

// studentRecord
// .then(message=>console.log(message))
// .catch(fail=>console.log(fail))

//promise with async and await

let marks1 = 30

function getResult(){
    return new Promise((resolve,reject)=>{

        if(marks1>35){
        resolve('Passed')
    }else{
        reject('failed')
    }
    })
}

//async means this function may take time to complete the task
//it also alows using await inside the function
//await means wait until task finishes

async function progress() {
    
    try{
       const result =  await getResult()
       console.log(result);
       
    }catch(error){
        console.log(error);
        
    }
}

progress()

