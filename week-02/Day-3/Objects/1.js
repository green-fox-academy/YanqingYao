'use strict';

const students = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
];

function Candy(params) {
  let numCandy = 0;
  for (let i = 0; i < params.length; i++) {
    numCandy += params[i].candies;
  }
  return numCandy;
}

function sum(params) {
  let sumUp = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i].candies < 5) {
      sumUp += params[i].age;
    }
  }
  return sumUp;
}
console.log(Candy(students));
console.log(sum(students));


// create a function that takes a list of students and logs:
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
