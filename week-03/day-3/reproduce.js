
'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

const reproduce = (w, x, y, n) => {
  if (n > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < 7; i++) {
      ctx.lineTo(canvas.width / 2 + 30 * Math.cos(i * 2 * Math.PI / 6), 15 * Math.sqrt(3) + 30 * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.stroke();
  }
};

reproduce(300, canvas.width / 2, canvas.height / 2, 4);


ctx.stroke();
