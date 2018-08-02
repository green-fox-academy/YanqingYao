'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a box that has different colored lines on each edge.
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

ctx.beginPath();
ctx.strokeStyle = getRandomColor();
ctx.moveTo(20, 20);
ctx.lineTo(120, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = getRandomColor();
ctx.moveTo(120, 20);
ctx.lineTo(120, 120);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = getRandomColor();
ctx.moveTo(120, 120);
ctx.lineTo(20, 120);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = getRandomColor();
ctx.moveTo(20, 120);
ctx.lineTo(20, 20);
ctx.stroke();
