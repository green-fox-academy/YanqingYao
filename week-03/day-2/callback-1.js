'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  for (let i = 0; i < array.length; i++) {
    output[i] = callback(array[i]);
  }
  return output;
};

const addOne = (number) => {
  return number + 1;
};
// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (array) => {
  let output = '';
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      output += array.slice(i, i + 1);
    }
  }
  return output;
};

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
