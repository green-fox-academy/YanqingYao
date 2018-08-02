'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x, y) {
  ctx.strokeRect(x, y, 50, 50);
}
for (let i = 0; i < 3; i++) {
  drawSquare(Math.random() * 400, Math.random() * 400);
}
