const URLL = document.getElementById('url');
const NAME = document.getElementById('name');
const PRICE = document.getElementById('price');
const BTN = document.getElementById('SUBMIT');
const CARDS = JSON.parse(localStorage.getItem('cards')) || [];

BTN.addEventListener('click', () => {
  ADD_CARD();
});

function ADD_CARD() {
  if (
    URLL.value.trim() === '' ||
    NAME.value.trim() === '' ||
    PRICE.value.trim() === ''
  ) {
    return 'ERROR';
  }

  const newUser = {
    id: Math.floor(Math.random() * 1000),
    image: URLL.value,
    name: NAME.value,
    price: PRICE.value,
  };

  CARDS.push(newUser);
  localStorage.setItem('cards', JSON.stringify(CARDS));

  URLL.value = '';
  NAME.value = '';
  PRICE.value = '';
}
