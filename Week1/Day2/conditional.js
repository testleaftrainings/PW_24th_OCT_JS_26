//if statement : executes a block of code only if a specified condiction is true

//if_else: execute one lock of code if the condicyion is true otherwise
//it execute other block of code

//else if : used to check multiple condition

function stuent(marks){
    if(marks>=80){
        console.log('distinction')
        
    }else if(marks>60){
        console.log('First class')
        
    }else{
        console.log('second class')
        
    }
}
stuent(40)

/* 
syntax
if (condition) {
    
} else {
    
} */
/* if (condition) {
    
}
 */


//use switch when one variable can have many fixed values

/* 
syntax for switch
switch (key) {
    case value:
        
        break;

    default:
        break;
} */

        let alertType = 'modal'

        switch (alertType) {
            case "simple":
                console.log('simple alert');
                break;
            case "confirm":
                    console.log('confirm alert');
                    break;
            case "prompt":
                    console.log('prompt alert');
                    break;
            default:
                console.log('invalid alert');
                
        }