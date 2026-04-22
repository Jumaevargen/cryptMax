let BASKET = JSON.parse(localStorage.getItem('basket')) || [];
const BASKET_CARDS = document.querySelector('.basket');

function RENDER_BASKET_PRODUCTS(data) {
  if (!Array.isArray(data)) return 'ERROR';

  if (data.length === 0) {
    return 'Ваше корзина пустая';
  }

  BASKET_CARDS.innerHTML = '';
  data.forEach((b) => {
    const div = document.createElement('div');
    div.className = 'basket-cards';
    const image = document.createElement('img');
    image.src = b.image;
    const name = document.createElement('h3');
    name.textContent = b.name;
    const count = document.createElement('p');
    count.textContent = 'Count: ' + b.count;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.dataset.id = b.id;

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(count);
    div.appendChild(btn);
    BASKET_CARDS.appendChild(div);
  });
}
BASKET_CARDS.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.dataset.id;
    DELETE_ITEM(id);
  }
});
function DELETE_ITEM(id) {
  const ITEM_ID = Number(id);
  BASKET = BASKET.filter((el) => el.id !== ITEM_ID);
  localStorage.setItem;
  ('basket', JSON.stringify(BASKET));
  RENDER_BASKET_PRODUCTS(BASKET);
}
RENDER_BASKET_PRODUCTS(BASKET);
