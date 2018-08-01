'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

const listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums(params) {
  let check = '';
  if (params.indexOf(4) && params.indexOf(8) && params.indexOf(12) && params.indexOf(16)) {
    check = true;
  } else {
    check = false;
  }
  return check;
}


console.log(checkNums(listOfNumbers));

module.exports = checkNums;
