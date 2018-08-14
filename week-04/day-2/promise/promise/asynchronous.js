'use strict';

const promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
}

promise
  .then(console.log, onReject)
  .then(console.log('MAIN PROGRAM'));
