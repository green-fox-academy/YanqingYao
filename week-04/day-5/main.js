'use strict';
const btn = document.querySelector('.submit-button');
const upVote = document.getElementsByClassName('up');
const downVote = document.getElementsByClassName('down');
console.log(upVote);
console.log(downVote);

btn.onclick = () => {
  window.location.href = 'submit.html';
};

function createElement(element) {
  const res = document.createElement(element.type);
  if ('classes' in element && element.classes.length !== 0) {
    res.classList.add(element.classes);
  }
  if ('attributes' in element) {
    Object.keys(element.attributes).forEach((attr) => {
      res.setAttribute(attr, element.attributes[attr]);
    });
  }
  if ('inner' in element) {
    res.innerHTML = element.inner;
  }

  if ('children' in element) {
    element.children.forEach((child) => {
      res.appendChild(child);
    });
  }
  return res;
}

function createPost(post, voted = 0) {
  const newPost = createElement({
    type: 'div',
    classes: 'new-post',
    attributes: {
      id: 'post-' + post.id,
    },
    children: [
      createElement({
        type: 'div',
        classes: 'score',
        children: [
          createElement({
            type: 'img',
            attributes: {
              src: 'upvote' + (voted == 1 ? 'd' : '') + '.png',
              alt: 'upvote',
              'data-id': post.id,
              class: 'up',
            },
          }),
          createElement({
            type: 'p',
            inner: post.score,
          }),
          createElement({
            type: 'img',
            attributes: {
              src: 'downvote' + (voted == -1 ? 'd' : '') + '.png',
              alt: 'downvote',
              'data-id': post.id,
              class: 'down',
            },
          }),
        ],
      }),
      createElement({
        type: 'div',
        classes: 'content',
        children: [
          createElement({
            type: 'h2',
            children: [
              createElement({
                type: 'a',
                attributes: { href: post.url },
                inner: post.title,
                classes: 'title-content',
              }),
            ],
          }),
          createElement({
            type: 'p',
            inner: `submitted ${post.timestamp} <strong>anonymous </strong>`,
            children: [
              createElement({
                type: 'p',
                inner: 'Modify',
                classes: 'Modify',
                attributes: {
                  'data-id': post.id,
                },
              }),
              createElement({
                type: 'p',
                inner: 'Delete',
                classes: 'Delete',
                attributes: {
                  'data-id': post.id,
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return newPost;
}

function appendPost(newPost) {
  document.querySelector('main').appendChild(newPost);
  console.log(newPost.querySelectorAll('p.Modify'));
  newPost.querySelectorAll('img.up').forEach((target) => {
    target.onclick = upVoteScore;
  });
  newPost.querySelectorAll('img.down').forEach((target) => {
    target.onclick = downVoteScore;
  });
  newPost.querySelectorAll('p.Modify').forEach((target) => {
    target.onclick = modifyTitle;
  });
  newPost.querySelectorAll('p.Delete').forEach((target) => {
    target.onclick = deletePost;
  });
}
function ajax(method, url, data, callback) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, `http://52.29.105.35:3000${url}`);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(data));

  httpRequest.onload = () => {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.response);
      console.log(response);

      callback(response);
    }
  };
}
window.onload = () => {
  ajax('GET', '/posts', null, (data) => {
    data.posts.forEach((element) => {
      appendPost(createPost(element));
    });
  });
};

const upVoteScore = (event) => {
  ajax('PUT', `/posts/${event.target.getAttribute('data-id')}/upvote`, {}, (data) => {
    const oldChild = document.querySelector(`#post-${data[0].id}`);
    console.log(oldChild);

    document.querySelector('main').replaceChild(
      createPost(data[0], 1), oldChild,
    );
  });
};

const downVoteScore = (event) => {
  ajax('PUT', `/posts/${event.target.getAttribute('data-id')}/downvote`, {}, (data) => {
    const oldChild = document.querySelector(`#post-${data[0].id}`);
    console.log(oldChild);

    document.querySelector('main').replaceChild(
      createPost(data[0], -1), oldChild,
    );
  });
};

const modifyTitle = (event) => {
  ajax('PUT', `/posts/${event.target.getAttribute('data-id')}`, {
    title: 'modified title',
    url: 'http://facebook.com',
  }, (data) => {
    const oldChild = document.querySelector(`#post-${data[0].id}`);
    console.log(oldChild);

    document.querySelector('main').replaceChild(
      createPost(data[0]), oldChild,
    );
  });
};

const deletePost = (event) => {
  ajax('DELETE', `/posts/${event.target.getAttribute('data-id')}`, {}, (data) => {
    const oldChild = document.querySelector(`#post-${data.id}`);
    console.log(data.id);
    const newChild = createPost(data);
    newChild.classList.add('hidden');
    document.querySelector('main').replaceChild(
      newChild, oldChild,
    );
  });
};
