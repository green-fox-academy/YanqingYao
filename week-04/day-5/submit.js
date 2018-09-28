'use strict';
const submitBtn = document.querySelector('.sub-btn');
// const titleInput = document.querySelector('.title').value;
// const urlInput = document.querySelector('.url').value;

function ajax(method, url, data, callback) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url, true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(data));

  httpRequest.onload = () => {
    if (httpRequest.status === 200) {
      callback();
    }
  };
}

submitBtn.onclick = () => {
  ajax('POST', 'http://52.29.105.35:3000/posts', { url: document.querySelector('.url').value, title: document.querySelector('.title').value }, () => {
    window.location.href = './index.html';
  });
};
