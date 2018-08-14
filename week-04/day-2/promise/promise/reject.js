'use strict';

const promise = new Promise((fulfill, reject) => {
  // Your solution here
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

// Your solution here
promise.then(null, onReject);
