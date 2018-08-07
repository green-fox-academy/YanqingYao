'use strict';

const column1 = document.createElement('select');
document.body.appendChild(column1);
column1.setAttribute('size', '4');
column1.setAttribute('id', 'column1');
const c1 = ['bread', 'milk', 'orange', 'tomato'];
for (let i = 0; i < c1.length; i++) {
  const x = document.createElement('option');
  x.textContent = c1[i];
  column1.appendChild(x);
  x.setAttribute('id', c1[i]);
}
column1.style.width = '80px';

const column2 = document.createElement('div');
document.body.appendChild(column2);
const c2 = ['up', 'bigger', 'X', 'down'];
for (let j = 0; j < c1.length; j++) {
  const y = document.createElement('button');
  y.textContent = c2[j];
  y.setAttribute('id', c2[j]);
  y.style.width = '80px';
  column2.appendChild(y);
}
column2.style.width = '80px';
document.getElementById('bigger').textContent = '>';

const column3 = document.createElement('select');
column3.setAttribute('size', '4');
document.body.appendChild(column3);
column3.style.width = '80px';

const up = document.querySelector('#up');
up.onclick = () => {
  const arr = document.getElementsByTagName('option');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (column1.value === arr[i].textContent) {
      const option = document.createElement('option');
      option.textContent = column1.value;
      console.log(column1.value);
      column1.insertBefore(option, document.getElementById(arr[i - 1].textContent));
      column1.removeChild(document.getElementById(column1.value));
    }
  }
};

const down = document.querySelector('#down');
down.onclick = () => {
  console.log(column1.value);
  for (let i = 0; i < c1.length; i++) {
    if (column1.value === c1[i]) {
      column1.removeChild(document.getElementById(column1.value));
      const option = document.createElement('option');
      option.textContent = c1[i];
      column1.insertBefore(option, document.getElementById(c1[i + 2]));
    }
  }
};

const x = document.querySelector('#X');
x.onclick = () => {
  console.log(column1.value);
  for (let i = 0; i < c1.length; i++) {
    if (column1.value === c1[i]) {
      column1.removeChild(document.getElementById(column1.value));
      document.getElementById('column1').selectedIndex = '0';
    }
  }
};

const move = document.querySelector('#bigger');
move.onclick = () => {
  console.log(column1.value);
  for (let i = 0; i < c1.length; i++) {
    if (column1.value === c1[i]) {
      column1.removeChild(document.getElementById(column1.value));
      const moveTo = document.createElement('option');
      moveTo.textContent = c1[i];
      column3.appendChild(moveTo);
    }
  }
};
