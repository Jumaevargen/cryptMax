const HOTOne = document.getElementById('hotOne-url');
const HOTTwo = document.getElementById('hotTwo-url');
const HOTThree = document.getElementById('hotThree-url');
const HOTFirst = document.getElementById('hotFour-url');
const HOTTitle = document.getElementById('title-hot');
const BTN_HOT = document.getElementById('BTN-HOT');
const COLLEC = JSON.parse(localStorage.getItem('collec')) || [];

BTN_HOT.addEventListener('click', () => {
  RENDER_HOT();
});
function RENDER_HOT() {
  if (
    HOTOne.value.trim() === '' ||
    HOTTwo.value.trim() === '' ||
    HOTThree.value.trim() === '' ||
    HOTFirst.value.trim() === '' ||
    HOTTitle.value.trim() === ''
  ) {
    return 'ERROR';
  }

  const newHOT = {
    id: Math.floor(Math.random() * 1000),
    imgOne: HOTOne.value,
    imgTwo: HOTTwo.value,
    imgThree: HOTThree.value,
    imgFour: HOTFirst.value,
    title: HOTTitle.value,
  };

  COLLEC.push(newHOT);
  localStorage.setItem('collec', JSON.stringify(COLLEC));

  HOTOne.value = '';
  HOTTwo.value = '';
  HOTThree.value = '';
  HOTFirst.value = '';
  HOTTitle.value = '';
}
