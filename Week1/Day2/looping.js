//loop mean you can repeat the task until a condiction become false


//for loop => when you know the count you can go for for loop
/* console.log(1)
console.log(2);
console.log(3);
console.log(4);


; */
//syntax for for loop 
/* for (let index = 0; index < array.length; index++) { //initalization , condition, iteration
    const element = array[index];
    
} */

    for(let i = 0; i<7; ++i){
        console.log(i);
        
    }

    //usecase = print the dropdown values

    //while loop => when we are not sure about the condition or no of iteration 
    //we can go for while loop

    /* syntax:
    while (condition) {
        
    } */

    let i = 10

    while(i<=10){
        console.log(i);
        i++
        
    }

    //usecase : pagination

    //do- while 

    /* syntax
    do {
        
    } while (condition); */

    let pin
    do{
pin = 1234 //user enter the pin
console.log('Please enter your ATM pin');

    }while(pin!==1234) //(1234!==1234)

        console.log('pin accepted, welcome!');
        