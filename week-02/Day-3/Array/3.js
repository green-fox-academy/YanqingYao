'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
const far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
function appendA(params) {
  for (let i = 0; i < params.length; i++) {
    params[i] += 'a';
  }
  return params;
}
console.log(appendA(far));
module.exports = appendA;
