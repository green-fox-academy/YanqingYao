'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

const a = 3;
function factorio(element) {
  let factorioValue = 1;
  for (let i = 1; i <= element; i++) {
    factorioValue *= i;
  }
  return factorioValue;
}
console.log(factorio(a));
