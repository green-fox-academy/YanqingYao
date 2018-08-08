
// Create a recursive function called `refactorio`
// that returns it's input's factorial

'use strict';

const refactorio = (number) => {
  if(number < 2) {
    return 1;
  } else {
    return number * refactorio(number - 1);
  }
};

console.log(refactorio('3'));
