
'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

const reproduce = (w, x, y, n) => {
  if (n > 0) {
    ctx.beginPath();
    ctx.moveTo(x + w * Math.cos(0), y + w * Math.sin(0));
    for (let side = 1; side < 7; side++) {
      ctx.lineTo(x + w * Math.cos(side * 2 * Math.PI / 6), y + w * Math.sin(side * 2 * Math.PI / 6));
    }
    ctx.stroke();
    reproduce(w / 2, w / 2 + x, y, n - 1);
    reproduce(w / 2, x - w / 4, y - w / 4 * Math.sqrt(3), n - 1);
    reproduce(w / 2, x - w / 4, y + w / 4 * Math.sqrt(3), n - 1);
  }
};

reproduce(200, canvas.width / 2, canvas.height / 2, 5);
