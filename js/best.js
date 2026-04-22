const BEST_CARD = document.querySelector('.best-cards');
const CARD = JSON.parse(localStorage.getItem('cards'));

function RENDER_CARDS() {
  if (!Array.isArray(CARD)) {
    return 'ERROR';
  }

  BEST_CARD.innerHTML = '';
  CARD.forEach((card, idx) => {
    BEST_CARD.innerHTML += `
    <div class="card" data-index=${idx}>
    <img src=${card.image} alt=${card.name}>
    <h4>${card.name}</h4>
    <div class="card-data">
    <div class="card-first">
        <ion-icon name="male-female-outline"></ion-icon>
        <span> #${idx + 1}</span>
    </div>
    <div class="card-second">
        <ion-icon name="shield-checkmark"></ion-icon>
    </div>
    <div class="card-third">
        <ion-icon name="trending-up-outline"></ion-icon>
    </div>
    </div>
    <p>${card.price} ETH</p>
    <hr/>
    <button><ion-icon name="add-outline"></ion-icon> Add</button>
    </div>
    `;
  });
}

function getLocal(params) {
  return JSON.parse(localStorage.getItem('basket')) || [];
}

function setLocal(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

function addToBasket(data) {
  const basket = getLocal();
  const yes = basket.find((item) => item.name === data.name);

  if (yes) {
    yes.count = (yes.caunt || 1) + 1;
  } else {
    basket.push({
      ...data,
      count: 1,
    });
  }
  setLocal(basket);
}

BEST_CARD.addEventListener('click', (event) => {
  if (event.target.closest('button')) {
    const ELEMENT = event.target.closest('.card');
    const IDX = ELEMENT.dataset.index;
    const ITEM = CARD[IDX];
    addToBasket(ITEM);
  }
});

RENDER_CARDS();
