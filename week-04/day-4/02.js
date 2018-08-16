'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangles(width, height) {
  this.width = width;
  this.height = height;
}

Rectangles.prototype.area = function getArea() {
  console.log(this.width * this.height);
};

Rectangles.prototype.circumference = function getCircumference() {
  console.log((this.width + this.height) * 2);
};

const rect1 = new Rectangles(3, 5);
rect1.area();
rect1.circumference();
