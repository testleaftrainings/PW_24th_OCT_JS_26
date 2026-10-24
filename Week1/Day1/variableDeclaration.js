//variable declaration --> var companyName
//value Assignment to the variable --> companyName = 'Testleaf'
//this is called declaration + initialization in a single statement

//var ,let and const--> keyword used to declare a variable

//var => allows both redeclaration and reassignment

var product = 'mobile' //declaration
var product = 'laptop' //redeclaration /reinitialization in a single statement

console.log(product);
console.log(typeof product);

product = 'carryBag' //reassignment ->updating the new value is also allowed in var

console.log(product);

//let => allows reassignment but redeclaration is not allowed

let quantity = 1

//let quantity = 2 //redeclaration is not allowed
quantity = null //reassignment is allowed

console.log(quantity);
console.log(typeof quantity);

//const => both is not possible

const price = 2000

//price = 4000

console.log(price); //TypeError: Assignment to constant variable.



