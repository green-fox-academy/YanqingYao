'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
function reverse(params) {
  let r = {};
  r = params.split('');
  return r.reverse().join('');
}
console.log(reverse(reversed));

module.exports = reverse;
