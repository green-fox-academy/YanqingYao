'use strict';

const btn = document.querySelector('button');
const div = document.querySelector('div');
const url = 'http://api.icndb.com/jokes/random';

function insertDiv(input) {
  const div1 = document.createElement('div');
  div1.textContent = input;
  div.appendChild(div1);
}

function data() {
  return fetch(url)
    .then(response => response.json())
    .then(myJson => insertDiv(myJson.value.joke))
    .catch(err => insertDiv(`err: ${err}`));
}

btn.addEventListener('click', data);
