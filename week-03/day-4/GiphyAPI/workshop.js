'use strict';

const ajax = (method, url, callback) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open(method, url);
  httpRequest.send();
};




const colorRenderer = (response) => {
  response.colors.forEach((color) => {
    const colorElement = document.createElement('p');
    colorElement.innerText = color;
    colorContainer.appendChild(colorElement);
  })
}

const postColor = (name) => {
  ajax('POST', 'http//', console.log, { name });
}

ajax('GET', 'http//', colorRenderer);
