'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for (let i = 0; i < canvas.width / 6; i += 3) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, i * 3);
  ctx.lineTo(canvas.width / 2 + i * 3, canvas.height / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height - i * 3);
  ctx.lineTo(canvas.width / 2 + i * 3, canvas.height / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, i * 3);
  ctx.lineTo(canvas.width / 2 - i * 3, canvas.height / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height - i * 3);
  ctx.lineTo(canvas.width / 2 - i * 3, canvas.height / 2);
  ctx.stroke();
}
