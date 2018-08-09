const container = document.querySelector('.container');
const btn = document.querySelector('button');

const a = () => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    const responseObject = JSON.parse(request.response);
    content(responseObject);
  };
  request.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=bf9d87f1b8584c20a2364f45611ae9d7&q=moon+landing+by+Apollo+11');
  request.send();
};

btn.addEventListener('click', a);

const content = (responseObject) => {
  console.log(responseObject);

  for (let i = 0; i < responseObject.response.docs.length; i++) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    ul.textContent = responseObject.response.docs[i].headline.main;
    container.appendChild(ul);
  }

};
