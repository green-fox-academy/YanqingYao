'use strict';

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
}

promise.then(result => console.log(result), onReject);
// promise.then(console.log, onReject);
