'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
function makingMatches(a, b) {
  let out = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    // out = out + a[i] + b[i];
    out.push(a[i]);
    out.push(b[i]);
  }
  return out;
}
console.log(makingMatches(girls, boys));

module.exports = makingMatches;
