import './style.css';
import 'boxicons';

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
   const displaySection = document.querySelector('.meals')

   const overflo = document.querySelector('.container-meal')
overflo.classList.remove('container-meal');

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

     const card = document.createElement('div');

     card.classList.add('card');
     card.innerHTML = `<img src="${meals[i].strMealThumb}">
                       <div class="cardTitle">
                       <h1>${meals[i].strMeal}</h1>
                       <box-icon data-value="${meals[i].idMeal}" class="heart" name='heart'></box-icon>
                       </div>
                       <p data-value="${meals[i].idMeal}" class="likes"></p>
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
      overflo.classList.add('container-meal');
      const idBtn = e.target.getAttribute('data-value');
      createModal(idBtn);
   });
   });
};
commentBtnEvent();

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZsdppEqh4CnoIqF1n5yO/likes';

async function displayLikes(){

  const ids = await getObj;
  const items = document.querySelectorAll('.heart');
  const likesP = document.querySelectorAll('.likes');


  fetch(likesUrl).then(res => res.json()).then(data => {
     console.log(data)
   likesP.forEach(item => item.textContent = data.filter(obj => obj.item_id === item.getAttribute('data-value'))
   [0].likes)
     
   })




// add comment to api //

   items.forEach(item => {
      item.addEventListener('click', (e) => {
         const id = e.target.getAttribute('data-value');
         fetch(likesUrl, {
            method: 'POST',
            body: JSON.stringify({"item_id": id}),
            headers: {
               'content-type': 'application/json',
             }
         }).then( () => {
            fetch(likesUrl).then(res => res.json()).then(data => {data = data.filter(item => 
               item.item_id === e.target.getAttribute('data-value'))
               e.target.parentNode.nextSibling.nextSibling.innerHTML = data[0].likes;
            })
         })
      })
   })
}

displayLikes();
