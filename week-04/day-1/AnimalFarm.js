'use strict';

function Animal(hunger = 5, thirst = 5) {
  this.hunger = hunger;
  this.thirst = thirst;
  this.eat = eat;
  this.drink = drink;
  this.play = play;
}

function eat() {
  this.hunger -= 1;
}
function drink() {
  this.thirst -= 1;
}
function play() {
  this.hunger += 1;
  this.thirst -= 1;
}

function Farm(slots) {
  this.slots = slots;
  this.animals = animalArr.bind(this)();
  this.breed = breed.bind(this)();
  // this.slaughter = slaughter;
  // this.progress = progress;
  this num = slots;
}
const arr = [];
function animalArr() {
  for (let i = 0; i < this.slots; i++) {
    arr.push(i);
  }
  return arr;
}
function breed() {
  if (num < this.slots) {
    num += 1;
  }
}
function slaughter() {
    num -= 1;
  }


// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects

// const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full


