// Given a string, compute recursively a new string where all the 'x' chars have been removed.

'use strict';

const str1 = (string) => {
  let result = '';
  if (string.length > 0) {
    if (string.slice(0, 1) === 'x') {
      result = `${str1(string.slice(1, string.length))}`;
    } else {
      result = string.slice(0, 1) + str1(string.slice(1, string.length));
    }
  }
  return result;
};

console.log(str1('Xxffjkslx'));
