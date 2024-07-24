//primitive and non-primitive datatypes
// primitive=>call by value
// String,number,boolean,undefined,null
// let name='ram';

console.log(typeof 'ram');
console.log(typeof 1);

// non-primitive=>call by refrence
// array,object,function,date

// let sum = () => {};
// console.log(typeof [1]);

// // console.log(typeof {name:'ram'};
// sum();
// console.log(typeof sum);
// console.log(typeof new Date());

//In jiavascript, a primitive datatype is data that is not an object and has no methods or properties

let list = [1, 3, 4, 6, 7, 7, 75, 3, 2];
let output = [...new Set(list)];
console.log(output);
