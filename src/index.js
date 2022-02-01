import './style.css';
// import 'boxicons';

import createModal from './modal.js';

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'

const getObj = new Promise((resolve) => {
   fetch(url)
   .then(res => res.json())
   .then(data => {
      resolve(data.meals.slice(7))
   })
})

const img = document.createElement('img');
document.body.appendChild(img);

async function display(){
   const meals = await  getObj;
   console.log(meals)
   const displaySection = document.querySelector('.meals')


   for(let i = 0; i < meals.length; i+=1){
     const card = document.createElement('div');

     card.classList.add('card');
     card.innerHTML = `<img src="${meals[i].strMealThumb}">
                       <div class="cardTitle">
                       <h1>${meals[i].strMeal}</h1>
                       <box-icon name='heart'></box-icon>
                       </div>
                       <p class="likes">0 likes</p>
                       <div class="btns">
                       <button data-value="${meals[i].idMeal}" type="button" class="comment-btn">Comments</button>
                       </div>
     `
     
     displaySection.appendChild(card)
   }
}



const commentBtnEvent = async () => {
   await display();
   const commentBtns = document.querySelectorAll('.comment-btn');
   commentBtns.forEach((element) => {
   element.addEventListener('click', (e) => {
      const idBtn = e.target.getAttribute('data-value');
      createModal(idBtn);
      console.log(idBtn) 
   });
   });
};
commentBtnEvent();

display();

