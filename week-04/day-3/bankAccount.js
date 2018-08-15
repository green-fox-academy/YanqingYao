'use strict';

// let balance
// const pinCode = initializePin();
// let accountNumber


let excuted = false;
function initializePin() {

  console.log(excuted);
  let pin = '';
  return function pinInit() {
    if (excuted === false) {
      for (let i = 0; i < 4; i++) {
        pin += Math.floor(Math.random() * 10);
      }
      excuted = true;
      console.log(excuted);
      return pin;
    } else {
      return pin;
    }
  };
}
const initPin = initializePin();
console.log(initPin());
