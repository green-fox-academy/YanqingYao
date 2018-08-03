'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for (let i = 0; i < canvas.width; i += 5) {
  ctx.strokeStyle = 'purple';
  ctx.beginPath();
  ctx.moveTo(i * 5, 0);
  ctx.lineTo(canvas.width, i * 5);
  ctx.stroke();
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(0, i * 5);
  ctx.lineTo(i * 5, canvas.width);
  ctx.stroke();
}
