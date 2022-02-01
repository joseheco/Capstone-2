import './style.css';

const url = 'www.themealdb.com/api/json/v1/1/random.php'

async function logFetch(){
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
}

logFetch();


