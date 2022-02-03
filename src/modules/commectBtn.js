import display from './display.js';
import createModal from './modal.js';

const overflo = document.querySelector('.container-meal');
overflo.classList.remove('container-meal');

const commentBtnEvent = async () => {
  await display();
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((element) => {
    element.addEventListener('click', (e) => {
      overflo.classList.add('container-meal');
      const idBtn = e.target.getAttribute('data-value');
      createModal(idBtn);
    });
  });
};

export default commentBtnEvent;
