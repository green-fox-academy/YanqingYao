'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 },
];

function getMore(params) {
  const name = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i].candies < 5) {
      name.push(params[i].name);
    }
  }
  return name;
}
console.log(getMore(students));

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average
