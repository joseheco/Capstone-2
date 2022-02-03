import getObj from './getObj.js';

const homeCounter = async () => {
  await getObj;
  const counterP = document.querySelector('.home-counter-p');
  const cards = document.querySelectorAll('.card');
  counterP.textContent = `look up for a total of ${cards.length} canadian meals`;
  return cards.length;
};

export default homeCounter;
