'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function triangular(value) {
  const abs = Math.abs(value);
  return ((abs / 2) * (abs + 1)) * (abs / value) || 0;
}

function purpleStep() {
  ctx.fillStyle = 'purple';
  for (let i = 1; i < 13; i++) {
    const j = triangular(i - 1);
    ctx.fillRect(j * 5, j * 5, i * 5, i * 5);
  }
}
purpleStep();
