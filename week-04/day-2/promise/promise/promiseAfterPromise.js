'use strict';


first()
  .then(second)
  .then(console.log);


  // var firstPromise = first();

  // var secondPromise = firstPromise.then(function (val) {
  //   return second(val);
  // });

  // secondPromise.then(console.log);
