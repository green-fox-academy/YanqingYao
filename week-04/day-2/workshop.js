const promise = new Promise((resolve, reject) => {
  // reject(1);

  // window.setTimeout(() => {
  //   resolve(1);
  // }, 2000);



});

promise
  .then(result => console.log(`result: ${result}`))
  .catch(err => console.log(`err: ${err}`))
  .finally(() => console.log('finaly'));
