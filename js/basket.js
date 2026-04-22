const BASKET = JSON.parse(localStorage.getItem('basket')) || [];
const BASKET_CARDS = document.querySelector('.basket');

function RENDER_BASKET_PRODUCTS(data) {
  if (!Array.isArray(data)) return 'ERROR';

  if (data.length === 0) {
    return 'Ваше корзина пустая';
  }
}
