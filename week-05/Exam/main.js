function ajax(method, url, data, callback, correct, incorrect) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, `https://mellow-sugar.glitch.me${url}`);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(data));

  httpRequest.onload = () => { // called when an XMLHttpRequest transaction completes successfully
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.response);
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

const newText = (original) => {
  let result = '';
  const string = original.text.split(' ');
  for (let i = 0; i < (string.length - 1); i++) {
    if (string[i] !== '') {
      result += `${string[i]} `;
    }
  }
  result += string[string.length - 1];
  return result;
};

document.querySelector('.get-text').onclick = () => {
  ajax('GET', '/text', null, (response) => {
    const textContainer = document.querySelector('.text-area');
    textContainer.textContent = newText(response);
    textContainer.setAttribute('id', response.id);
  }, null, null);
};

document.querySelector('.submit-result').onclick = () => {
  ajax('POST', '/text', {
    id: Number(document.querySelector('.text-area').id),
    text: document.querySelector('.text-area').value,
  }, null, () => {
    const statusBar = document.createElement('div');
    statusBar.textContent = 'OK';
    statusBar.setAttribute('class', 'green');
    statusBar.setAttribute('id', 'new');
    document.body.appendChild(statusBar);
    // document.querySelector('#new').classList.add('hidden');
  }, () => {
    const statusBar = document.createElement('div');
    statusBar.textContent = 'Wrong';
    statusBar.setAttribute('class', 'red');
    statusBar.setAttribute('id', 'new');
    document.body.appendChild(statusBar);
    // document.querySelector('#new').claxssList.add('hidden');
  });
};
