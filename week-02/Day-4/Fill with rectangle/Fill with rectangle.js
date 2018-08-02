'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function name() {
  ctx.fillStyle = getRandomColor();
  ctx.fillRect(Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 200);
}
for (let i = 0; i < 3; i++) {
  name();
}
