const COLLEC = JSON.parse(localStorage.getItem('collec')) || [];
const HOT_CARDS = document.querySelector('.colection-cards');

function RENDER_COLECTION(data) {
  if (!Array.isArray(data)) return 'ERROR';

  if (data.length === 0) return 'ERROR2';

  HOT_CARDS.innerHTML = '';

  data.forEach((hot) => {
    HOT_CARDS.innerHTML += `
    <div class="colection-card">
    <div class="cards-img">
    <img src=${hot.imgOne} alt=${hot.HOTTitle} class="main-img">
    <div class="cards-images">
        <img src=${hot.imgTwo} alt=${hot.HOTTitle}>
        <img src=${hot.imgThree} alt=${hot.HOTTitle}>
        <img src=${hot.imgFour} alt=${hot.HOTTitle}>
    </div>

    </div>
    <h2>${hot.title}</h2>
    <div class="hot-end">
    <img src="./images/miniHot.svg" alt="Img">
    <h5>By <span>James Zeller</span></h5>
    </div>
    </div>
    `;
  });
}
RENDER_COLECTION(COLLEC);
