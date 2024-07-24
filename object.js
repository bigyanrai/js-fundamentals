//Array is a collection of values whereas objecgt is  a collection of key value pairs
// key value pairs are called properties

// let list = {
//   name: 'harry',
//   favFruits: ['apple', 'mango', 'orange'],
//   location: {
//     city: 'kathmandu',
//     province: 'bagmati',
//     country: 'nepal',
//   },
//   age: () => {
//     console.log(`i am a function`);
//   },
// };

// console.log(list.name);
// console.log(list.location);
// console.log(list.favFruits[2]);
// console.log(list.location.country);

// let products = [
//   { name: 'mobile', price: 15000 },
//   { name: 'battery', price: 5000 },
//   { name: 'radio', price: 3000 },
// ];

//[15000,3000,5000]
//[23000]

// const output = products
//   .map((value) => {
//     return value.price;
//   })
//   .reduce((prev, cur) => {
//     return prev + cur;
//   });

// console.log(output);

// let list = ['bigyan', 'ram', 'n9solution', 'harry', 'zebra'];

// const output = list.sort((a, b) => {
//   return a.length - b.length;
// });

// console.log(output);

// convert object into array

// let info = {
//   name: 'ram',
//   age: 50,
//   locatoin: 'ktm',
// };

// let output = Object.entries(info);

// console.log(output);

// let list = [
//   ['name', 'ram'],
//   ['age', 50],
//   ['locatoin', 'ktm'],
// ];

// let objectOutput = Object.fromEntries(list);

// console.log(objectOutput);
