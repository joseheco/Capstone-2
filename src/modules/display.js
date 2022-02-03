import getObj from './getObj.js'

async function display(){
    const meals = await  getObj;
    const displaySection = document.querySelector('.meals')
 
    for(let i = 0; i < meals.length; i+=1){
 
      const card = document.createElement('div');
 
    card.classList.add('card');
    card.innerHTML = `<img src="${meals[i].strMealThumb}">
                      <div class="cardTitle">
                      <h1>${meals[i].strMeal}</h1>
                      <box-icon data-value="${meals[i].idMeal}" class="heart" name='heart'></box-icon>
                      </div>
                      <p data-value="${meals[i].idMeal}" class="likes">0 likes</p>
                      <div class="btns">
                      <button data-value="${meals[i].idMeal}" type="button" class="comment-btn">Comments</button>
                      </div>
    `
    
    displaySection.appendChild(card)
    }
 }
 
 export default display;