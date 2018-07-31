'use strict';
// - Create a variable named `animals`
//   with the following content: `['koal', 'pand', 'zebr']`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

const animals = ['koal', 'pand', 'zebr'];
const apendA = addA => `${addA}a`; // OR make a = 'a'
const appendedArr = animals.map(apendA);
console.log(appendedArr);
