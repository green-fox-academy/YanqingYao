// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

'use strict';

const str1 = (string) => {
  let result = '';
  if (string.length > 0) {
    if (string.slice(0, 1) === 'x') {
      result = `y${str1(string.slice(1, string.length))}`;
    } else {
      result = string.slice(0, 1) + str1(string.slice(1, string.length));
    }
  }
  return result;
};

console.log(str1('Xxxx'));
