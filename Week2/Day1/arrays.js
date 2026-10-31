//array is collection of elements of similar datatype or heterogeneous data type
//array is non primitive datatype

/* 
let name = 'yuva'
let age =56
 */

//array of element
//index     0           1   2
let arr = ['Yuvarani', 56, true]

//length - no of elements present in the array

console.log(arr.length); //(length = index+1)

//print the complete array element
console.log(arr);

//print the specific element present in the array
console.log(arr[0]);

//print the undefined index
console.log(arr[3]);

//add element to the array
arr[3]= 'welcome'
console.log(arr); //[ 'Yuvarani', 56, true, 'welcome' ]

//change the element in the array
arr[1] = 30

console.log(arr); //[ 'Yuvarani', 30, true, 'welcome' ]

//push() -> used to add one or more element at the end of the array
let arr1 = ['Yuvarani', 56, true]
// arr1[4] = 'hello'
// console.log(arr1);

console.log(arr1.push(undefined, 'playwright'));
console.log(arr1); //[ 'Yuvarani', 56, true, undefined, 'playwright' ]

//pop() -> usedto remove 1 element at the end of the array

let poppedarray = arr1.pop()
console.log(arr1); //[ 'Yuvarani', 56, true, undefined ]

//unshift() -> add one or more elements to the beginning array

let unshiftedArray = arr1.unshift('Mango',100)
console.log(unshiftedArray);
console.log(arr1); //[ 'Mango', 100, 'Yuvarani', 56, true, undefined ]

//shift() -> removes one element at the beginning of the array

let shiftArray = arr1.shift()
console.log(arr1); //[ 100, 'Yuvarani', 56, true, undefined ]

//slice() -> extracts the portion of the array but it will not alter or modify the existing array

let slicedArray = arr1.slice()
console.log(slicedArray);//[ 100, 'Yuvarani', 56, true, undefined ]

console.log(arr1.slice(1,4));

//splice() -> add element, delet elements from the array

//syntax
//splice(startindex, deletecount, iteam1, iteam2...)
//splice method modifies the original array

//arr1 = [ 100, 'Yuvarani', 56, true, undefined ]
let spliceArray = arr1.splice(1,0,'sanjeev','seeni')
console.log(spliceArray); //[]

console.log(arr1); //[ 100, 'sanjeev', 'seeni', 'Yuvarani', 56, true, undefined ]

let spliced = arr1.splice(4,2,'welcome',"Js")
console.log(spliced); //[ 56, true ]
console.log(arr1); //[
//   100,       'sanjeev',
//   'seeni',   'Yuvarani',
//   'welcome', 'Js',
//   undefined
// ]
//let arr2 = [4321.2345, 23, 435]

let madhu = [100, 110, 250, 268]
console.log(madhu.sort()); //[ 100, 110, 250, 268 ]

let num1 = [500,21,100,4]
console.log(num1.sort()); //[ 100, 21, 4, 500 ]

//ascending order
console.log(num1.sort((a , b)=>a-b)); //[ 4, 21, 100, 500 ]

//descending order
console.log(num1.sort((a,b)=>b-a)); //[ 500, 100, 21, 4 ]

//includes() -> checks whether the element is present or not
//let madhu = [100, 110, 250, 268]
console.log(madhu.includes(268));  //true

//join() ->convert array into string

console.log(typeof madhu.join()); //100,110,250,268

//map => transform every element into a new array
//let madhu = [100, 110, 250, 268]
console.log(madhu.map((value) => value * 2)); //[ 200, 220, 500, 536 ]

console.log(madhu);

















