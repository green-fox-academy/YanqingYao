'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function triangular(value) {
  const abs = Math.abs(value);
  return ((abs / 2) * (abs + 1)) * (abs / value) || 0;
}

function triangle(num) {
  ctx.beginPath();
  ctx.moveTo(20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6));
  }
  ctx.stroke();
}
triangle(10);
