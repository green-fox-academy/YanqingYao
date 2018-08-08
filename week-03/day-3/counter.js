// Write a recursive function that takes one parameter: n and counts down from n.
'use strict';


const countDown = (number) => {
  if (number > 0) {
    console.log(number);
    countDown(number - 1);
  }
};
countDown(5);
