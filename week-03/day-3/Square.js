'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

const squareRepeat = (w, x, y, n) => {
  if (n > 0) {
    ctx.rect(x, y, w, w);
    ctx.stroke();
    squareRepeat(w / 3, w / 3 + x, y, n - 1);
    squareRepeat(w / 3, 2 * w / 3 + x, w / 3 + y, n - 1);
    squareRepeat(w / 3, x, y + w / 3, n - 1);
    squareRepeat(w / 3, w / 3 + x, y + 2 * w / 3, n - 1);
  }
};
squareRepeat(canvas.width, 0, 0, 5);
