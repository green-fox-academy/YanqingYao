// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
'use strict';

const numberAdder = (number) => {
  let result = number;
  if (number < 2) {
    return 1;
  } else {
    return number + numberAdder(number - 1);
  }
}
console.log(numberAdder(5));
