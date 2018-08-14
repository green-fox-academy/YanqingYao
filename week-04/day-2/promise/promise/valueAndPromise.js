'use strict';

const promise = new Promise((fulfill, reject) => {
  fulfill('MANHATTAN');
  reject(new Error('ERROR'));
});
function attachTitle(params) {
  return `DR. ${params}`;
}

promise.then(attachTitle, null)
  .then(console.log);
