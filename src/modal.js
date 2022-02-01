const modalDiv = document.getElementById('modals');

const getItem = async (id) => {
  const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed.meals[0];
};

const createModal = async (id) => {
  modalDiv.classList.remove('no-modal');
  modalDiv.classList.add('modal');

  const foodObject = await getItem(id);
  const image = foodObject.strMealThumb;
  const food = foodObject.strMeal;
  const prep = [];
  prep.push(foodObject[`strInstructions`]);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalDiv.appendChild(modalContent);

  const modalImg = document.createElement('div');
  modalImg.classList.add('img-div');
  modalContent.appendChild(modalImg);

  const img = document.createElement('img');
  img.setAttribute('src', image);
  img.setAttribute('alt', food);
  img.classList.add('modal-img');
  modalImg.appendChild(img);

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('food-name-div');
  modalImg.appendChild(nameDiv);

  const foodTitle = document.createElement('h2');
  foodTitle.classList.add('food-title');
  foodTitle.innerHTML = food;
  nameDiv.appendChild(foodTitle);

  const modalDetails = document.createElement('div');
  modalDetails.classList.add('modal-details');
  modalContent.appendChild(modalDetails);

  const modalPrep = document.createElement('div');
  modalPrep.classList.add('prep-div');
  modalDetails.appendChild(modalPrep);

  const preparation = document.createElement('h4');
  preparation.classList.add('preparation-title');
  preparation.innerText = 'Preparation';
  modalPrep.appendChild(preparation);

  const modalPreparation = document.createElement('div');
  modalPreparation.classList.add('modal-prep');
  modalPrep.appendChild(modalPreparation);

  const prepStep = document.createElement('p');
  prepStep.classList.add('prep');
  prepStep.innerText = prep[0];
  modalPreparation.appendChild(prepStep);
  
  const modalCommentsDiv = document.createElement('div');
  modalCommentsDiv.classList.add('modal-comment-list-div');
  modalDetails.appendChild(modalCommentsDiv);

  const commentTitle = document.createElement('h4');
  commentTitle.classList.add('comments-title');
  commentTitle.innerText = 'Comments';
  modalCommentsDiv.appendChild(commentTitle);

  const modalCommentList = document.createElement('div');
  modalCommentsDiv.append(modalCommentList);

  const modalCommentForm = document.createElement('div');
  modalCommentForm.classList.add('modal-comment');
  modalContent.appendChild(modalCommentForm);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'userName');
  nameInput.setAttribute('id', 'userName');
  nameInput.setAttribute('placeholder', 'Name');
  nameInput.classList.add('comment-input');
  modalCommentForm.appendChild(nameInput);

  const commentInput = document.createElement('input');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('name', 'comment');
  commentInput.setAttribute('id', 'comment');
  commentInput.setAttribute('placeholder', 'Comment');
  commentInput.classList.add('comment-input');
  modalCommentForm.appendChild(commentInput);

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('name', 'submit');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.classList.add('submit-btn');
  modalCommentForm.appendChild(submitBtn);
  
  const closeBtn = document.createElement('a');
  closeBtn.setAttribute('id', 'id-close');
  closeBtn.innerText = "X"
  closeBtn.classList.add('closeBtn');
  modalContent.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    modalDiv.classList.add('no-modal');
    modalDiv.classList.remove('modal');
    modalDiv.innerHTML = "";
  });

};

export default createModal;