'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function triangle(num) {
  for (let i = 0; i < num; i++) {
    const w = 18;
    const h = 24;
    // ctx.beginPath();
    // ctx.moveTo(canvas.width / 2 + w * i, i * h);
    // ctx.lineTo(canvas.width / 2 - (num - i * 2) * w, num * h);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(canvas.width / 2 - w * i, i * h);
    // ctx.lineTo(canvas.width / 2 + (num - i * 2) * w, num * h);
    // ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - (i + 1) * w, (i + 1) * h);
    ctx.lineTo(canvas.width / 2 + (i + 1) * w, (i + 1) * h);
    ctx.stroke();
  }
}
triangle(10);
