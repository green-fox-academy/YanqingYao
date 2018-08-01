'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers = [1, 2, 3, 4, 5, 6, 8];
function containsSeven(params) {
  const index = params.indexOf(7);
  let check = '';
  if (index !== -1) {
    check = 'Hoorray';
  } else {
    check = 'Noooooo';
  }
  return check;
}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

module.exports = containsSeven;
