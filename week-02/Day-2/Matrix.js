'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const a = 4;
const array = [];
function matrix(num) {
  for (let k = 0; k < num; k++) {
    array.push([0]);
    for (let j = 0; j < num; j++) {
      array[k][j] = 0;
    }
  }
  for (let i = 0; i < num; i++) {
    array[i][num - 1 - i] = 1;
  }
  return array.join('\n');
}
console.log(matrix(a));
