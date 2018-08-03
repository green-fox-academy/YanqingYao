'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawCheckerBoard(numRow, numColumn) {
  const w = canvas.width / numRow;
  const h = canvas.height / numColumn;

  for (let i = 0; i < numRow; i++) {
    for (let j = 0; j < numColumn; j++) {
      if (i % 2 === 1 || j % 2 === 1) {
        if (i % 2 === 1 && j % 2 === 1) {
          ctx.fillRect(w * i, w * j, w, h);
        } else {
          ctx.strokeRect(w * i, w * j, w, h);
        }
      } else {
        ctx.fillRect(w * i, w * j, w, h);
      }
    }
  }
}

drawCheckerBoard(10, 10);
