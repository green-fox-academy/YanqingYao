'use strict';
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

const r = [54, 23, 66, 12];
function sum23(element) {
  let sum = 0;
  sum = element[1] + element[2];
  return sum;
}
console.log(sum23(r));
