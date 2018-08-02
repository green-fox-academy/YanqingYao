'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.
const arr = [[14, 569], [156, 638], [328, 93]];
function drawSquare(coor) {
  ctx.strokeRect(coor[0], coor[1], 50, 50);
}
for (let i = 0; i < 3; i++) {
  drawSquare(arr[i]);
}
