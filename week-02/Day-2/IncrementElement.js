'use strict';
// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

const t = [1, 2, 3, 4, 5];
const increment = toIncrease => (toIncrease === t[2] ? t[2] + 1 : toIncrease);
const increasedArr = t.map(increment);
console.log(increasedArr);
