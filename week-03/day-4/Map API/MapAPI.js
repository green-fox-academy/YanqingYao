const btn = document.querySelector('button');
const container = document.querySelector('.container');

const a = () => {
  const search = document.getElementById('search').value;
  console.log(search);
  const request = new XMLHttpRequest();

  request.onload = () => {
    const responseObject = JSON.parse(request.response);
    showPosition(responseObject);
  };
  request.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + search);
  request.setRequestHeader('X-Mashape-Key', 'BADVHPN44Dmshh48MzNLy7PG6pGvp13NpxtjsnVNtAlqNibqYQ');
  request.setRequestHeader('Accept', 'application/json');
  request.send();
};
btn.addEventListener('click', a);

const showPosition = (responseObject) => {
  console.log(responseObject);
  for (let i = 0; i < responseObject.Results.length; i++) {
    const ul = document.createElement('ul');
    ul.textContent = responseObject.Results[i].name;
    container.appendChild(ul);
    const l1 = document.createElement('li');
    l1.textContent = responseObject.Results[i].lat;
    container.appendChild(l1);
    const l2 = document.createElement('li');
    l2.textContent = responseObject.Results[i].lon;
    container.appendChild(l2);
  }
};
