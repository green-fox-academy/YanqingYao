'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
function hexagon() {
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + 30 * Math.cos(0), 15 * Math.sqrt(3) + 30 * Math.sin(0));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(canvas.width / 2 + 30 * Math.cos(i * 2 * Math.PI / 6), 15 * Math.sqrt(3) + 30 * Math.sin(i * 2 * Math.PI / 6));
  }
  ctx.stroke();
}
hexagon(10);
