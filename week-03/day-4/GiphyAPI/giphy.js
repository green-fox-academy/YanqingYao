const btn = document.querySelector('button');
const container = document.querySelector('.container');

const a = () => {
  const search = document.getElementById('search').value;
  const limit = document.getElementById('limit').value;
  console.log(search);
  console.log(limit);
  const request = new XMLHttpRequest();

  request.onload = () => {
    const responseObject = JSON.parse(request.response);
    imgRenderer(responseObject);
  };
  request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=fm9Qaa5VRMex4uTwX0j8axYaQfAGP3nD&q=' + search + '&limit=' + limit + '&offset=0&rating=Y&lang=en');
  request.send();
};

btn.addEventListener('click', a);

const imgRenderer = (responseObject) => {
  console.log(responseObject);
  // responseObject.data.forEach((data) => {
  //   const b = document.createElement('p');
  //   b.textContent = responseObject[i].data.url;
  //   console.log(b);
  //   document.div.appendChild(b);
  // });

  for (let i = 0; i < responseObject.data.length; i++) {
    if (i < 16) {
      const b = document.createElement('iframe');
      b.setAttribute('src', responseObject.data[i].embed_url);
      console.log(b);
      container.appendChild(b);
    }
  }
};
