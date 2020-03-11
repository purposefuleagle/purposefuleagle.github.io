/* ------------  ------------ */

// const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];
// // [5,4,4,4]
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

// const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLength(el) {
//   // console.log(el);
//   return el.length;
// }

// function nameUpperCase(el) {
//   // console.log(el);
//   return el.toUpperCase();
// }

// const result = mapArray(names, nameLength);
// // console.log(result);

// const result2 = mapArray(names, nameUpperCase);
// // console.log(result2);

// function greeting(firstName) {
//   return function(lastName) {
//     return `Hello ${firstName} ${lastName}`;
//   };
// }
// const testGreeting = greeting('Denis');

// function question(job) {
//   if (job === 'developer') {
//     return function(name) {
//       return `${name}, что такое JS?`;
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       return `${name}, какой предмет вы ведете?`;
//     };
//   }
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('Denis'));

// document.querySelector('.one').onclick = () => {
//   let a = document.querySelector('.i-1').value;
//   console.log(a);
// };

// document.querySelector('.two').onclick = () => {
//   let a = +document.querySelector('.i-2').value;
//   console.log(a);
// };

// document.querySelector('.three').onclick = () => {
//   let a = document.querySelector('.i-3').value;
//   document.querySelector('.three').style.background = a;
//   console.log(a);
// };

// document.querySelector('.four').onclick = () => {
//   let a = document.querySelector('.i-4').value;
//   console.log(a);
// };

// document.querySelector('.five').onchange = () => {
//   let a = document.querySelector('.five').value;

//   console.log(a);
// };
// let b = (document.querySelector('.five').value = 2);

// document.querySelector('.ch-1').onchange = () => {
//   if (document.querySelector('.ch-1').checked === true) {
//     let a = document.querySelector('.ch-1').value;
//     console.log(a);
//   }
// };
// document.querySelector('.ch-1').checked = true;

// document.querySelector('.radio').onclick = () => {
//   let r = document.querySelectorAll('input[name="r"]');
//   for (let i = 0; i < r.length; i++) {
//     if (r[i].checked) {
//       console.log(r[i].value);
//       break;
//     }
//   }
// };

// document.querySelector('.one').onclick = () => {
//   let a = +document.querySelector('.i-1').value;
//   console.log(a);
//   let out = '';
//   for (let i = 0; i <= a; i++) {
//     out += i + ' ';
//   }
//   document.querySelector('.out').innerHTML = out;
// };

// function getThis() {
//   console.log(this);
// }
// getThis();
// console.log(window.getThis());

// const arr = ['1', '3', '2', '4'];
// const res = arr
//   .map(el => parseInt(el))
//   .filter(num => num % 2)
//   .reduce((max, value) => Math.max(max, value), 0);
// console.log(res);

// function getPrice() {
//   console.log(this.price);
// }

// const prod1 = {
//   name: 'Intel',
//   price: 100,
//   getPrice,
//   getName() {
//     console.log(this.name);
//   },
//   info: {
//     information: ['2.3gh'],
//     getInfo: function() {
//       console.log(this);
//     }
//   }
// };
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

// const prod2 = {
//   name: 'Amd',
//   price: 50,
//   getPrice
// };

// prod2.getPrice();
