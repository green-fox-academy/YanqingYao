'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleStep() {
  ctx.fillStyle = 'purple';
  for (let i = 0; i < 15; i++) {
    ctx.fillRect(i * 20, i * 20, 20, 20);
  }
}
purpleStep();
