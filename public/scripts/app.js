'use strict';

// const square = function (x) { 
//   return x*x;
// };

// // const squareArrow = (x) => { 
// //   return x*x;
// // };

// const squareArrow = (x) => x*x;
// console.log(square(8));
// console.log(squareArrow(6));

var getFirstName = function getFirstName(fullName) {
  if (fullName) {
    return fullName.split(' ')[0];
  }
};

var getFirstName2 = function getFirstName2(fullName) {
  return fullName ? fullName.split(' ')[0] : null;
};

console.log(getFirstName('Thales Costa'));