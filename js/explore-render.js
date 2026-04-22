const EXPLORES = JSON.parse(localStorage.getItem('explores')) || [];
const EXPLORE_MAIN_CARDS = document.querySelectorAll('.explore-cards');

function RENDER_EXPLORES(data) {
  if (!Array.isArray(data)) return 'ERROR';
  if (data.length === 0) return 'ERROR2';

  EXPLORE_MAIN_CARDS.forEach((container) => {
    container.innerHTML = '';

    data.forEach((explore) => {
      container.innerHTML += `
        <div class='explore-card'>
            <img src="${explore.image}" alt="${explore.title}">
        <div class="explore-name">
            <h2>${explore.title}</h2>
            <h3>${explore.price} ETH</h3>
        </div>
        <div class="explore-people">
            <img src="./images/miniphoto.svg">
            <h6>10+ People place bit</h6>
        </div>
        <div class="explore-end">
            <h4>
            <ion-icon name="git-pull-request-outline"></ion-icon>
            Highest bit <span>0.001 ETH</span>
            </h4>
            <button>${explore.category}</button>
        </div>
        <div class="explore-like">
            <ion-icon name="heart-outline"></ion-icon>
        </div>
        </div>
      `;
    });
  });
}

RENDER_EXPLORES(EXPLORES);
