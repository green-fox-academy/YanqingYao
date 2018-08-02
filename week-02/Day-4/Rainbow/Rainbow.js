'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function square(size, color) {
  ctx.fillStyle = color;
  ctx.fillRect((canvas.width / 2 - size / 2), (canvas.height / 2 - size / 2), size, size);
}
const colorArray = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

for (let i = 7; i > 0; i--) {
  square(i * 40, colorArray[i - 1]);
}
