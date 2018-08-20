function ajax(method, url, data, callback, correct, incorrect) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, `https://mellow-sugar.glitch.me${url}`);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(data));

  httpRequest.onload = () => {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.response);
      console.log(response);
      callback(response);
    }
    if (httpRequest.readyState === XMLHttpRequest.DONE && (httpRequest.status === 204)) {
      correct();
    }
    if (httpRequest.readyState === XMLHttpRequest.DONE && (httpRequest.status === 400)) {
      incorrect();
    }
  };
}

const newText = (n) => {
  if (response.text.includes('  ')) {
    const string = response.text.replace(/\s\s/g, ' ');
    newText(string);
    return string;
  }
};

document.querySelector('.get-text').onclick = () => {
  ajax('GET', '/text', null, (response) => {
    console.log(response);
    const textContainer = document.querySelector('.text-area');
    textContainer.textContent = newText(response);
    textContainer.setAttribute('value', newText);
    textContainer.setAttribute('id', response.id);
  }, null, null);
};

document.querySelector('.submit-result').onclick = () => {
  ajax('POST', '/text', {
    id: document.querySelector('.text-area').id.value,
    text: document.querySelector('.text-area').value,
  }, null, () => {
    const statusBar = document.createElement('div');
    statusBar.textContent = 'OK';
    document.body.appendChild(statusBar);
  }, () => {
    const statusBar = document.createElement('div');
    statusBar.textContent = 'Wrong';
    document.body.appendChild(statusBar);
  });
};
