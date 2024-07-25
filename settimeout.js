console.log('ram');
setTimeout(() => {
  console.log('delay for 5 sec');
}, 5000);

console.log('harry');

let sum = (a, b) => {
  let c = a + b;
  return c;
};

let add = sum(2, 4);
console.log(add);
