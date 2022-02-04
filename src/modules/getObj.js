const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const getObj = new Promise((resolve) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      resolve(data.meals);
    });
});

export default getObj;