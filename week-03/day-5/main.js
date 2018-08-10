const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const slidePic = document.getElementsByClassName('pic-des');
const smallContainer = document.querySelector('.small-container');
const description = document.querySelector('.description');
let slideIndex = 3;

function showPic(n) {
  if (n > slidePic.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidePic.length;
  }
  for (let i = 0; i < slidePic.length; i++) {
    slidePic[i].style.display = 'none';
    // description[i].style.display = 'none';
  }
  slidePic[slideIndex - 1].style.display = 'block';
  // description[slideIndex - 1].style.display = 'block';
}

showPic(slideIndex);

const plusPic = () => {
  showPic(slideIndex += 1);
};
const minusPic = () => {
  showPic(slideIndex -= 1);
};

plus.addEventListener('click', plusPic);
minus.addEventListener('click', minusPic);

smallContainer.addEventListener('click', (e) => {
  slideIndex = e.target.alt;
  showPic(slideIndex);
});
