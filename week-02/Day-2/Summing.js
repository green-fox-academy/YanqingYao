'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
const num = 2;
function sum(element) {
  let x = 0;
  for (let i = 1; i <= element; i++) {
    x += i;
  }
  return x;
}
console.log(sum(num));
