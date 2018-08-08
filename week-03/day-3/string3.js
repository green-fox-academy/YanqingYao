// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

'use strict';

const str3 = (string) => {
  let result = '';
  if (string.length > 0) {
    result = string.slice(0, 1)+ `*${str3(string.slice(1, string.length))}`;
  }
  return result;
};

console.log(str3('Xxffjkslx'));
