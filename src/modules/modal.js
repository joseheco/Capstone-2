const modalDiv = document.getElementById('modals');

const getItem = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const result = await response.json();
  return result.meals[0];
};

const commentsApi = async (id) => {
  const comments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YVelr1C6jXi1hzKriDIQ/comments?item_id=${id}`;
  const response = await fetch(comments);
  const result = await response.json();
  return result;
};

const createModal = async (id) => {
  modalDiv.classList.remove('no-modal');
  modalDiv.classList.add('modal');

  const foodObj = await getItem(id);
  const image = foodObj.strMealThumb;
  const food = foodObj.strMeal;
  const prep = [];
  prep.push(foodObj[`strInstructions`]);

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

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('modal-comment-list-div');
  modalDetails.appendChild(commentDiv);

  const commentTitle = document.createElement('h4');
  commentTitle.classList.add('comments-title');
  commentTitle.innerText = 'Comments';
  commentDiv.appendChild(commentTitle);

  const commentList = document.createElement('div');
  commentList.classList.add('modal-comment-list');
  commentDiv.append(commentList);

  const renderComments = async () => {
    const comments = await commentsApi(id);
    comments.forEach((elem) => {
      const p = document.createElement('p');
      p.classList.add('comments');
      p.innerHTML = `${elem.username}: ${elem.comment}`;
      commentList.appendChild(p);
    });
  };
  renderComments();

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

  submitBtn.addEventListener('click', async () => {
    const postComments =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YVelr1C6jXi1hzKriDIQ/comments';
    await fetch(postComments, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: nameInput.value,
        comment: commentInput.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    commentList.innerHTML = '';
    renderComments();
    nameInput.value = '';
    commentInput.value = '';
  });

  const overflo = document.querySelector('.container-meal');
  const closeBtn = document.createElement('a');
  closeBtn.innerText = 'X';
  closeBtn.classList.add('closeBtn');
  modalContent.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    modalDiv.classList.add('no-modal');
    modalDiv.classList.remove('modal');
    overflo.classList.remove('container-meal');
    modalDiv.innerHTML = '';
  });
};

export default createModal;
