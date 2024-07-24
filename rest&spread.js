// let { name, country, ...rest } = {
//   name: 'ram',
//   age: 50,
//   location: 'ktm',
//   country: 'nepal',
// };

// console.log(rest);

// let sum = (a, b) => {
//   console.log(a);
//   console.log(b);
// };

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// let { a, ...d } = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(a, d);

// let list = [1, 2, 3];
// let list1 = ['ram', 'harry', 'john'];

// let output = [10, 9, 11, 'n9solutions', ...list1, 'ant,...list'];

// console.log(output);

let info = {
  name: 'ram',
  age: 50,
  location: 'ktml',
};

let info1 = {
  ...info,
};

console.log(info1);

let info2 = { ...info, country: 'Nepal', isMarried: true };
console.log(info2);

// let a=NaN
// console.log(a===NaN)

// let a;
// console.log(a);

// let name;
// console.log(name);
// undefined means variable is declared but not initialize

// let a = null;
// console.log(a);
