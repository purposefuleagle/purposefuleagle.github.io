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

const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  // console.log(el);
  return el.length;
}

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

function question(job) {
  if (job === 'developer') {
    return function(name) {
      return `${name}, что такое JS?`;
    };
  } else if (job === 'teacher') {
    return function(name) {
      return `${name}, какой предмет вы ведете?`;
    };
  }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Denis'));
