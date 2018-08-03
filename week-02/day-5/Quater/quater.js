'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
function divide(params) {
  for (let j = 0; j < Math.sqrt(params); j++) {
    const w = canvas.width / Math.sqrt(params) * j;
    const w2 = canvas.width / Math.sqrt(params) * (j + 1);
    for (let k = 0; k < Math.sqrt(params); k++) {
      const h = canvas.width / Math.sqrt(params) * k;
      const h2 = canvas.width / Math.sqrt(params) * (k + 1);
      for (let i = 0; i < canvas.width / 3 / Math.sqrt(params); i += 3) {
        ctx.strokeStyle = 'purple';
        ctx.beginPath();
        ctx.moveTo(w + i * 3, h);
        ctx.lineTo(w2, i * 3 + h);
        ctx.stroke();
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(w, i * 3 + h);
        ctx.lineTo(w + i * 3, h2);
        ctx.stroke();
      }
    }
  }
}
divide(81);
