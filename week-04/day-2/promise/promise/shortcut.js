function resolved() {
  console.log('Resolved');
}

function rejected() {
  console.log(new Error('failjeldgkjdlfd'));
}
Promise.reject()
  .then(resolved())
  .catch(rejected())
  .then(resolved, rejected);

// const promise1 = new Promise((resolved, rejected) => {
//   resolved('Resolved');
//   rejected(new Error('failjeldgkjdlfd'));
// });

// promise1.resolve().catch(function(error) {
//   console.log(error);
// });
