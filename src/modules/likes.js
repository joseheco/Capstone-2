import getObj from './getObj.js';

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZsdppEqh4CnoIqF1n5yO/likes';

async function displayLikes() {
  await getObj;
  const items = document.querySelectorAll('.heart');
  const likesP = document.querySelectorAll('.likes');

  fetch(likesUrl).then((res) => res.json()).then((data) => {
    likesP.forEach((item) => {
      item.textContent = `${data.filter((obj) => obj.item_id === item.getAttribute('data-value'))[0].likes} likes`;
    });
  });

  // add like to api //

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-value');
      fetch(likesUrl, {
        method: 'POST',
        body: JSON.stringify({ item_id: id }),
        headers: {
          'content-type': 'application/json',
        },
      }).then(() => {
        fetch(likesUrl).then((res) => res.json()).then((data) => {
          data = data.filter((item) => item.item_id === e.target.getAttribute('data-value'));
          e.target.parentNode.nextSibling.nextSibling.innerHTML = `${data[0].likes} likes`;
        });
      });
    });
  });
}

export default displayLikes;