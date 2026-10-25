//string - sequence of characters represented using '',"",``

//string literal = assigning the value directly to the variable
//string object - create a string object using the new string() constructor

//string literal  -> compare value and datatype

let companyName = 'testleaf' //1000
let firstName = 'testleaf' //1000(same memory - so unique data)
let firstName1 = 'Testleaf' //2000 (different data)
 
console.log(companyName === firstName);
console.log(companyName ===  firstName1);

//string object -> compare object reference

let companyName1 = new String('testleaf')//104
let firstName2 = new String('testleaf') //105

console.log(companyName1 === firstName2);

//escape sequence

let testEsc = 'it\'s a \n regression \t testing'

console.log(testEsc);

/* 
meaning
\' -> single quotes
\n -> new line
\t -> tab space */

//concatenation 

let testCase = 'create a new lead'
let testCaseId = 123

//using +

let result = testCase + " - " + testCaseId

//using concat()
console.log(testCase.concat(testCaseId.toString()))
//console.log(testCaseId.c);


//template literal is modern JS way to create string using backticks

let x = 10

let output = `There are ${x} testcases`
console.log(output);




