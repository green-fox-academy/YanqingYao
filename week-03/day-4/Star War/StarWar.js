const container = document.querySelector('.container');
const btn = document.querySelector('button');
const film = document.querySelector('.film');

const a = () => {
  const search = document.getElementById('search').value;
  const request = new XMLHttpRequest();

  request.onload = () => {
    const responseObject = JSON.parse(request.response);
    content(responseObject);
  };
  request.open('GET', 'https://swapi.co/api/people/?search=' + search);
  request.send();
};

btn.addEventListener('click', a);

const content = (responseObject) => {
  console.log(responseObject);

  for (let i = 0; i < responseObject.results.length; i++) {
    const l1 = document.createElement('li');
    l1.textContent = responseObject.results[i].name;
    container.appendChild(l1);
  }
};


container.addEventListener('click', (e) => {
  const event = e.target.textContent;
  console.log(e.target.textContent);
  const request = new XMLHttpRequest();
  request.onload = () => {
    const responseObject = JSON.parse(request.response);
    listFilm(responseObject);
  };
  request.open('GET', 'https://swapi.co/api/people/?search=' + event);
  request.send();
});


const listFilm = (responseObject) => {
  console.log(responseObject);

  for (let i = 0; i < responseObject.results.length; i++) {
    for (let ii = 0; ii < responseObject.results[i].films.length; ii++) {
      const l1 = document.createElement('li');
      l1.textContent = responseObject.results[i].films[ii];
      film.appendChild(l1);
    }
  }
};

