const canvas = document.querySelector('.my-canvas'); // eslint-disable-line
const ctx = canvas.getContext('2d');

const drawSquare = (x, y, size) => {
  ctx.fillReact(x, y, size, size); // eslint-disable-line
};

// const drawTriangle = (x, y, size) => {
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x, y + size);
// };

drawSquare(30, 30, 100);

