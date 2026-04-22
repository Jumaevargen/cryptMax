const EXPLORE_URL = document.querySelectorAll('.explore-url');
const EXPLORE_TITLE = document.querySelectorAll('.explore-title');
const EXPLORE_PRICE = document.querySelectorAll('.explore-price');
const CATEGORY = document.querySelectorAll('.explore-category');
const SAVE = document.querySelectorAll('.explore-btn');

let EXPLORES_DATA = JSON.parse(localStorage.getItem('explores')) || [];

SAVE.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    CREATE_NEW_EXPLORE(index);
  });
});

function CREATE_NEW_EXPLORE(i) {
  const url = EXPLORE_URL[i];
  const title = EXPLORE_TITLE[i];
  const price = EXPLORE_PRICE[i];
  const category = CATEGORY[i];

  if (
    url.value.trim() === '' ||
    title.value.trim() === '' ||
    price.value.trim() === '' ||
    category.value.trim() === ''
  ) {
    return 'ERROR';
  }

  const newExplore = {
    id: Math.floor(Math.random() * 1000),
    image: url.value,
    price: price.value,
    title: title.value,
    category: category.value,
  };

  EXPLORES_DATA.push(newExplore);
  localStorage.setItem('explores', JSON.stringify(EXPLORES_DATA));

  url.value = '';
  title.value = '';
  price.value = '';
  category.value = '';

  RENDER_EXPLORES(EXPLORES_DATA);
}
