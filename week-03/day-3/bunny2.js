// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict';

const earNumber = (number) => {
  if (number < 1) {
    return 0;
  } else if (number % 2 === 1) {
    return 2 + earNumber(number - 1);
  }
  else {
    return 3 + earNumber(number - 1);
  }
}
console.log(earNumber(4));
