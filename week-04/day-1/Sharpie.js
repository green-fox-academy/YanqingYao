'use strict';

function constructor(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.useage = use;
}

const red = new constructor('red', 5);
const yellow = new constructor('yellow', 3);
const blue = new constructor('blue', 8);

function use() {
  while (this.inkAmount >= this.width) {
    this.inkAmount -= this.width;
    console.log(this.inkAmount);
  }
}

red.useage();

yellow.useage();

blue.useage();
