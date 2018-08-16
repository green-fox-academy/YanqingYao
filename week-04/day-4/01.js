'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals(word) {
  this.word = word;
  // this.say = function say() {
  //   console.log(this.word);
  // };
}

Animals.prototype.say = function say() {
  console.log(this.word);
};

const cat = new Animals('meow');
cat.say();
