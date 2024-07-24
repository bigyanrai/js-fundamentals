// boolean => true or false
// falsy =0, "",null,undefined
// empty string and 0 are false value other are truthy

// import { printhello } from "./export.js";

// import { print } from "./export";

// ==, ===, >, <,>=,<=,
// && and operator
// || or operator
// ! not operator

// console.log(1 == "1"); value
// console.log(1 === "1"); value and datatype
// let age = 18;

// if (age >= 18) {
//   console.log("You can enter bar");
// } else {
//   console.log("you cannot enter bar");
// }

// let name = "harry";

// if (name === "harry") {
//   console.log("i am a");
// } else if (name === "john") {
//   console.log("i am b");
// } else {
//   console.log("i am c");
// }

// let a = false;
// console.log(!a);

// define function, call function, pass value to function, function with return, arrow function

//syntax of function

//function sum() {}

// function sum() {
//   console.log("my name is ram");
// }

//Function code will not execute unless we call it.we ehave to call function to execute the function cod block
// sum(); //function call

// let sum = function () {
//   console.log("i am a function");
// };

// console.log("a");
// console.log("b");
// sum();

//pass value to function

//pass value to function
// let sum = function (y, z, a) {
//   // parameter
//   let add = a + y + z;
//   console.log(add);
// };

// sum(2, 4, 5); //arguments

//It is not necessary to have same number of arguements and parameter

// default value

// let sum = function (a, b, c = 5) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// sum(1, 2, 3);

//function with return
// let sum = function (a, b) {
//   let c = a + b;
//   return c;
// };

// let output = sum(6, 4);
// console.log(output);

//function without return, call normally : sum()
//function with return, call by store it in a variable

//arrow function
// let sum = (a, b) => {
//   console.log("i am ram");
//   let c = a * b;
//   return c;
// };

// let output = sum(2, 4);
// console.log(output);

//PROBLEM
// const sum = (num1, num2) => num1 + num2;
// let result = sum(1, 2);
// console.log(result);

// javascript is a dynamic language because a variable an be stored with different value at a different time

// let name = "ram";
// name = "harry";

// console.log(name);
// name = true;
// console.log(name);

//javascript function can return only one value
// let sum = () => {
//   return 1, 2, 3, 4;
// };

// console.log(sum());

// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());

// const name = "Bigyan";

// if (name.length < 3) {
//   console.log("name cannot be less than 3");
// } else {
//   console.log("you can enter");
// }

// uppercase

// printhello();

// let name = "BigYAn RaI";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let multi = [1, 2, 3, 4, 5];

// let output = multi.map((value, index) => {
//   //map method always returns
//   return value * 2;
// });

// console.log(output);

//use map mehtod if both input and output are arrays and both input and outputs length are same;

// let list = ["a", "b", "c"];
// let output = list.map((value, index) => {
//   return value * 5;
// });

// console.log(output);

// const input = [1, 3, 4, 5];

// console.log(
//   input.map((value) => {
//     if (value % 2 != 0) {
//       return value * 100;
//     } else {
//       return value * 0;
//     }
//   })
// );

// console.log(['my', 'name', 'is'].map((value) => value.toUpperCase() + 'N'));

// const input = ['r', 'a', 'm'];
// const output = input.map((value, index) => {
//   if (index === 0) {
//     return value.toUpperCase();
//   } else {
//     return value;
//   }
// });

// console.log(output);

// split convert string into array
//joint convert array into string

// console.log('ramhari'.split('a'));

// const statement = 'my name is Bigyan Rai';
// const output = statement.split(' ');
// console.log(output);

// let arr = ['a', 'b', 'c'];

// let output = arr.filter((value, index) => {
//   if (value === 'a') {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let list = [1, 2, 3, 4];

// let output = list.filter((value) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// const output = [1, 3, 33, 89, 55, 98, 2, 4, 6, 90].filter((value) => {
//   if (value > 55) return true;
// });

// console.log(output);

// const input = ['ram', 'hari', 'john'];

// const output = input.filter((value) => {
//   if (value.length > 3) {
//     return true;
//   } else return false;
// });
// console.log(output);

//map return anything,filter return true or false and find returns the searched item

// let input = ['', 'ram', 'hari', 0, 1, 2, null, undefined, true, false];
// let output = input.filter(Boolean);
// console.log(output);

// includes only give true or false
// let list = ['ram', 'bigyan', 'hari'];
// console.log(list.includes('ram'));

// let list = [1,2,3,4,5];'
// console.log(list.includes('ram'));

//push=> pushes new element at the end of the array
// pop=> pops the last element of the Array
// unshift=>pushes new element at the start of the Array
// shift=>pops the first element of the array
// let list = [1, 2, 3, 4];

// list.push(5);
// list.pop();
// list.unshift(0);
// list.shift();

// console.log(list);

//sort

// let list = ['apple', 'cat', 'zebra', 'frog', 'donkey'];

// let output = list.sort();

// console.log(output);

// let numberlist = [5, 3, 30, 4, 2];
// console.log(
//   numberlist.sort((a, b) => {
//     return a - b;
//   })
// );

let list = [1, 2, 3, 4];
// let output = list.reduce((previous, current) => {
//   return previous + current;
// });

// console.log(output);

// let output = list.reduce((previous, current) => {
//   if (current % 2 === 0) {
//     return previous + current;
//   } else {
//     return previous;
//   }
// }, 0);
// console.log(output);

let output = list
  .filter((value) => {
    if (value % 2 == 0) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((prev, cur) => {
    return prev + cur;
  }, 0);

console.log(output);
