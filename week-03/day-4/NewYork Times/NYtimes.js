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
    ul.textContent = responseObject.response.docs[i].headline.main;
    const l1 = document.createElement('li');
    l1.textContent = responseObject.response.docs[i].snippet;
    ul.appendChild(l1);
    const l2 = document.createElement('li');
    l2.textContent = responseObject.response.docs[i].pub_date;
    ul.appendChild(l2);
    container.appendChild(ul);
  }
};
