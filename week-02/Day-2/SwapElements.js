'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

const abc = ['Arthur', 'Boe', 'Chloe'];
function swap(element) {
  let tmp = 0;
  tmp = element[0];
  element[0] = element[2];
  element[2] = tmp;
  return element;
}
console.log(swap(abc));
